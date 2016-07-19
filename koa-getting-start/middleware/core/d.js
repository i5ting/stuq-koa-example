var co = require('co');
var compose = require('koa-compose')

function * a(next){
  console.log('第1个中间件before 1')
  yield next
  console.log('第1个中间件after 2')
}

function * b(next){
  console.log('  第2个中间件before 3')
  yield next;
  console.log('  第2个中间件after 4')
}

function * c(next){
  console.log('    业务逻辑处理')
}

var stack = [a, b, c];

co(compose(stack))
