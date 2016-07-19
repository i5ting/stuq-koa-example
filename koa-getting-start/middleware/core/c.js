var co = require('co')

function * a(){
  console.log('第1个中间件before 1')
  yield *b()
  console.log('第1个中间件after 2')
}

function * b(){
  console.log('  第2个中间件before 3')
  yield *c()
  console.log('  第2个中间件after 4')
}

function * c(){
  console.log('    业务逻辑处理')
}

co(function* () {
  yield *a()
})
