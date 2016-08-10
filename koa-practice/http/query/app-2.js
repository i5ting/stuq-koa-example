const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if (ctx.path === '/topic') {
    return ctx.body = ' Hello Koa ' + ctx.path + ' a='+ ctx.query['a'];
  }
  
  return ctx.body = ' Hello Koa with default path = ' + ctx.path  ;
});

app.listen(3000);