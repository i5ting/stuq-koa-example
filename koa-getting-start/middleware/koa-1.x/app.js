var http = require('http');
var koa = require('koa');
var app = koa();
      
app.use(function *(next){
  if(this.url =='/'){
    this.body = 'Hello world!'
  }else if(this.url =='/2'){
    this.body = 'Hello world!2'
  }else{
    this.body = 'Hello world! other'
  }
})

var server = http.createServer(app.callback());

server.listen(8888);