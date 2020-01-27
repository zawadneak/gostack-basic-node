const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());

server.use((req,res,next)=>{
  console.time('Request');
  console.log('==============')

  console.count('Request number')
  console.log(`Method: ${req.method} | URL: ${req.url}`)

  next();

  console.timeEnd('Request');
})

server.use(routes)

server.listen(3333);

module.exports = server