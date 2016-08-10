const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = "<h1>plain html<h1>"
});

app.listen(3000);