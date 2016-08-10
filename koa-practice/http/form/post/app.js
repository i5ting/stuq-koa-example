const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// for post
app.use(bodyParser());
// static server
var www = require('path').join(__dirname, '../public')
app.use(serve(www));

// response
app.use(ctx => {
  if (ctx.path === '/topic') {
    console.log(ctx.request.body)
    return ctx.body = 'post body = ' + JSON.stringify(ctx.request.body);
  }

  return ctx.body = ' Hello Koa with default path = ' + ctx.path  ;
});


app.listen(3000);