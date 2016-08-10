const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const getRawBody = require('raw-body');
const app = new Koa();

app.use(bodyParser());

var co = require('co')

var parse = require('co-body')

// for raw data
app.use((ctx, next) => {

  if (ctx.is('text/*')) {
    return new Promise((resolve, reject) => {

      yield parse.text(ctx.request);
    });

   
    
  } else {
    // before
    return next().then(() => {
      // after
    })
  }
});

// response
app.use(ctx => {
  // the parsed body will store in this.request.body
  // if nothing was parsed, body will be an empty object {}
  console.dir(ctx.text)
  return ctx.body = ctx.text
});

app.listen(3000);