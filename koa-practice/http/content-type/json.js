const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = {
    "a":"1",
    "b": 2
  }
});

app.listen(3000);