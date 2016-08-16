require('./db')

const Koa = require('koa')
const views = require('koa-views')
const router = require('koa-router')()
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose');
const session = require('koa-generic-session')
const MongoStore = require('koa-generic-session-mongo')

const app = new Koa()

const index = require('./routes/index')
const users = require('./routes/users')

app.keys = ['keys', 'keykeys'];

app.use(session({
  store: new MongoStore({
    url: require('./mongodb').url(),
    ttl: 6000
  })
}));

app.use (bodyParser())
app.use (serve(__dirname + '/public'))

// Must be used before any router is used
app.use(views(__dirname + '/views', { extension: 'pug' }))


router.use('/', index.routes(), index.allowedMethods())
router.use('/users', users.routes(), users.allowedMethods())

app
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = app