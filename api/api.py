import sys
import csv
import numpy as np
import json

from flask import Flask, request

app = Flask(__name__)

def sen_to_w(sen):
    pchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+"
    app_filtered = []
    for a in sen.lower():
        if a in pchar:
            app_filtered.append(a)
        else:
            app_filtered.append(" ")
    filtered_s = "".join(app_filtered)
    return filtered_s.split(" ")

def create_tf(searchterms, descs):
    tf = dict()
    for appid in descs:
        terms = sen_to_w(descs[appid])
        for t in terms:
            if t in searchterms:
                if t not in tf:
                    tf[t] = dict()
                if appid not in tf[t]:
                    tf[t][appid] = 0
                tf[t][appid]+=1
    return tf

def create_idf(searchterms, descs):
    idf = dict()
    for t in searchterms:
        idf[t] = 0
    for appid in descs:
        termsset = set(sen_to_w(descs[appid]))
        for t in searchterms:
            if t in termsset:
                idf[t]+=1
    for t in searchterms:
        if idf[t]==0:
            del idf[t]
        else:
            idf[t] = np.log(len(descs)/idf[t])
    return idf

def csvtodict(desc_csv):
    retdict={}
    with open(desc_csv, encoding='utf-8', errors='ignore') as csvfile:
        reader = csv.reader(csvfile)
        next(reader)
        for row in reader:
            if len(row[2]) > 5:
                retdict[int(row[0])] = row[2]
    return retdict

def tfidfscore(tf,idf,topk=5):
    scores= {}
    for t in tf:
        if t in idf:
            for k in tf[t]:
                if k not in scores:
                    scores[k] = 0.0
                scores[k] += tf[t][k]*idf[t]
    rank = sorted(scores.items(), key = lambda x: x[1], reverse=True)
    ret= []
    for i in range(topk):
        ret.append(rank[i][0])
    return ret

def find_relevant_jobs(kwords, desc_csv, topk=5):
    terms = sen_to_w(kwords)
    descs = csvtodict(desc_csv)
    tf = create_tf(terms, descs)
    idf = create_idf(terms, descs)
    tup = tfidfscore(tf,idf,topk=topk)
    ret = []
    for t in tup:
        ret.append(descs[t])
    return (tup,ret)

@app.route('/query-example', methods=["POST"])
def query_example():
    req = request.get_json()
    print(req)
    ids, desc = find_relevant_jobs(req['id'],'greencard.csv', int(req['number']))
    strret = ""
    space = " "
    for i in ids:
        strret += str(i)
        strret += space
    print(strret)
    jsonstr = json.dumps(ids)
    return jsonstr