const Koa = require('koa')
const app = new Koa()
var router = require ('koa-router')();
const views = require('koa-views')
const multer = require('koa-multer');
const upload = multer({ dest: 'uploads/' });

// Must be used before any router is used
app.use(views(__dirname, { extension: 'pug' }))

router.post('/profile',  upload.single('avatar'), ctx => {
  return ctx.render('user', {
    user: 'sucess upload file'
  });
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000)
