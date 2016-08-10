const Koa = require('koa')
const app = new Koa()

const views = require('koa-views')

// Must be used before any router is used
app.use(views(__dirname, { extension: 'pug' }))

// response
app.use(ctx => {
  return ctx.render('user', {
    user: 'John'
  });
})

app.listen(3000)