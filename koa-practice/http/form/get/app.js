const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

// static server
var www = require('path').join(__dirname, '../public')
app.use(serve(www));

// response
app.use(ctx => {
  if (ctx.path === '/topic') {
    return ctx.body = ' Hello Koa ' + ctx.path + ' a='+ ctx.query['a'];
  }

  return ctx.body = ' Hello Koa with default path = ' + ctx.path  ;
});


app.listen(3000);