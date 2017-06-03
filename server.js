const express = require('express');
const server = express();
const port =  process.env.PORT || 8080;

server.get('/', function (req, res){
  res.send('Hello World');
});

server.listen(port, function(){
  console.log('listening on port,', port);
});
