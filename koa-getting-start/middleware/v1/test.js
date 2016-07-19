var app = require('./app')

app.use(function *(next){
  console.log(1)
  yield next;
  console.log(2)
})

app.use(function *(next){
  console.log(3)
  yield next;
  console.log(4)
})

app.callback();
// 1
// 3
// 4
// 2