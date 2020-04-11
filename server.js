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
    let data = req.query.id;
    console.log(req.query.id);
    console.log("reached");
    connection.query('SELECT * FROM greencard WHERE Category=\"' + data + '\"', function(err, rows, fields) { 
        if (!err) {
            //console.log("SENT")
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

  //route for insert data
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