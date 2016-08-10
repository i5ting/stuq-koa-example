const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

// response
app.use(ctx => {
  // the parsed body will store in this.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.type = '1'
  ctx.body = {"a":"eewe"}
  
  //ctx.request.body;
});

app.listen(3000);