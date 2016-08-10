const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = "plain string"
});

app.listen(3000);