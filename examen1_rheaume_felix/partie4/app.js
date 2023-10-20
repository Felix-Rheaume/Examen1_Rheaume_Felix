var express = require('express');
var mysql = require('mysql2');
var app = express();

app.use(express.json());

var conn = mysql.createConnection({
    database: 'defaultdb',
    host: 'mysql-29cea68d-kamy-de31.aivencloud.com',
    user: 'user-formatif',
    password: 'AVNS_9PkaTowuWO-G74OvGu7',
    port: 13194
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Connected!"); 
})

app.get('/getTexte', function(req, res){
    sqlQuery = "SELECT texte FROM defaultdb.Examen1";
    conn.query(sqlQuery, function(err, results, test){
        if(err) throw err;
        results.forEach(element => {
            res.json(element);
        });
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })


module.exports = app;