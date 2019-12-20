//const http = require('http')

// http.createServer(
    // function(req,res){
        // res.writeHead(200,{'content-Type':'text/plain'});
        // res.end('<h1>Hello World</h1');
    // }

// ).listen(5000);

const express = require('express')

const routes= require('./routes')
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/',routes);
 
app.listen(3000, ()=> console.log('server started at port 3000'));