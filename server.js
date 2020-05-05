var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cs411pw',
    database : 'cs411'
  });
  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
  })  
  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

  var server = app.listen(3000, "127.0.0.1", function () {
    var host = server.address().address
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port)
  });
app.get('/', (req, res) => {
    //console.log("reached");
    let id = 'Id="'  + req.query.id + '" AND ';
    let title = 'Title="'  + req.query.title + '" AND ';
    let fulldescription = 'FullDescription="'  + req.query.fulldescription + '" AND ';
    let locationraw = 'LocationRaw="'  + req.query.locationraw + '" AND ';
    let locationnormalized = 'LocationNormalized="'  + req.query.locationnormalized + '" AND ';
    let contracttype = 'ContractType="'  + req.query.contracttype + '" AND ';
    let contracttime = 'ContractTime="'  + req.query.contracttime + '" AND ';
    let company = 'Company="'  + req.query.company + '" AND ';
    let category = 'Category="'  + req.query.category + '" AND ';
    let sourcename = 'SourceName="'  + req.query.sourcename + '"';
    console.log(req.query.id);
    console.log("reached");
    if(req.query.id === "" || typeof req.query.id === 'undefined'){
      id = "";
    }
    if(req.query.title === "" || typeof req.query.title === 'undefined'){
      title = "";
    }
    if(req.query.fulldescription === "" || typeof req.query.fulldescription === 'undefined'){
      fulldescription = "";
    }
    if(req.query.locationraw === "" || typeof req.query.locationraw === 'undefined'){
      locationraw = "";
    }
    if(req.query.locationnormalized === "" || typeof req.query.locationraw === 'undefined'){
      locationnormalized = "";
    }
    if(req.query.contracttype === "" || typeof req.query.contracttype === 'undefined'){
      contracttype = "";
    }
    if(req.query.contracttime === "" || typeof req.query.contracttime === 'undefined'){
      contracttime = "";
    }
    if(req.query.company === "" || typeof req.query.company === 'undefined'){
      company = "";
    }
    if(req.query.category === "" || typeof req.query.category === 'undefined'){
      category = "";
    }
    if(req.query.sourcename === "" || typeof req.query.sourcename === 'undefined'){
      sourcename = "";
    }
    let sql  = 'SELECT * FROM greencard WHERE ' + id + title + fulldescription + locationraw + locationnormalized + contracttype + contracttime + company + category + sourcename;
    if(sql.substr(sql.length - 4) === "AND "){
      sql = sql.slice(0, -4);
    }
    sql = sql + ';';
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (!err) {
            //console.log("SENT")
            console.log(this.sql);
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            console.log('Error while performing Query.');
        }
    });
});
  //route for insert data
app.post('/',(req, res) => {
    let data = {Id: req.body.id, Title: req.body.title, FullDescription: req.body.fulldescription, LocationRaw: req.body.locationraw, LocationNormalized: req.body.locationnormalized, 
      ContractType: req.body.contracttype, ContractTime: req.body.contracttime, Company: req.body.company, Category: req.body.category, SourceName: req.body.sourcename};
    let sql = "INSERT INTO greencard SET ?";
    //console.log("reached");
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });
  //route for delete data
app.delete('/delete',(req, res) => {
    let data = req.body;
    console.log(req.body);
    let sql = "DELETE FROM greencard WHERE ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });

  //route for update data
  app.put('/',(req, res) => {
    let data = {Id: req.body.id, Title: req.body.title, FullDescription: req.body.fulldescription, LocationRaw: req.body.locationraw, LocationNormalized: req.body.locationnormalized, 
      ContractType: req.body.contracttype, ContractTime: req.body.contracttime, Company: req.body.company, Category: req.body.category, SourceName: req.body.sourcename};
    let sql = "UPDATE greencard SET Title = \"" + req.body.title + "\",FullDescription = \"" + req.body.fulldescription + "\",LocationRaw = \"" + req.body.locationraw +
    ",LocationNormalized = " + req.body.locationraw + ",ContractType = " + req.body.contracttype + ",ContractTime = " + req.body.contracttime + 
    "\",Company = \"" + req.body.company + "\",Category = \"" + req.body.category + "\",SourceName =  \"" + req.body.sourcename + "\"WHERE Id = \"" + req.body.id + "\";";
    console.log("reached");
    let query = connection.query(sql, (err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });

  app.get('/multiple', (req, res) => {
    //console.log("reached");
    let ids = req.query.ids;
    console.log(req.query.ids);
    console.log("reached");
    let sql  = 'SELECT * FROM greencard WHERE ID in (';
    sql = sql + ids + ')';
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (!err) {
            //console.log("SENT")
            console.log(this.sql);
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            console.log('Error while performing Query.');
        }
    });
  });

  app.get('/queryone', (req, res) => {
    //console.log("reached");
    let sql  = 'select application_employer.EMPLOYER_NAME,avg(PREVAILING_WAGE) from application_employer left join employer on application_employer.EMPLOYER_NAME=employer.EMPLOYER_NAME natural join application group by application_employer.EMPLOYER_NAME';
    connection.query(sql, function(err, rows, fields) {
        if (!err) {
            //console.log("SENT")
            console.log(this.sql);
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            console.log('Error while performing Query.');
        }
    })
  });

  app.get('/querytwo', (req, res) => {
    //console.log("reached");
    let sql  = 'select JOB_TITLE, avg(PREVAILING_WAGE) from applicant natural join application group by JOB_TITLE';
    connection.query(sql, function(err, rows, fields) {
        if (!err) {
            //console.log("SENT")
            console.log(this.sql);
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            console.log('Error while performing Query.');
        }
    })
  });

  app.get('/querythree', (req, res) => {
    //console.log("reached");
    let title = req.query.title;
    console.log(req.query.title);
    console.log("reached");
    let sql  = 'select STATEWORKSITE, count(*) from applicant natural join application where applicant.JOB_TITLE ="' + title + '" group by STATEWORKSITE';
    connection.query(sql, function(err, rows, fields) {
        if (!err) {
            //console.log("SENT")
            console.log(this.sql);
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            console.log('Error while performing Query.');
        }
    })
  });