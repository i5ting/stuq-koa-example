var koa = require('koa')
var app = koa() 

// ignore
app.use(function *(next){
  if(this.url === '/favicon.ico'){
    return
  }
  yield next
})

// m1
app.use(function *(next){
  console.log('第1个中间件before 1')
  yield next
  console.log('第1个中间件after 2')
})

// m2
app.use(function *(next){
  console.log('  第2个中间件before 3')
  yield next
  console.log('  第2个中间件after 4')
})

// response
app.use(function *(next){
  console.log('    业务逻辑处理')
  this.body = 'sucess'
})

app.listen(3001)