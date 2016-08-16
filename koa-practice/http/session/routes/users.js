"use strict"

const router = require('koa-router')()
const User = require('../models/user')

// 首页
router.get('/', ctx => {
  return ctx.render('index', {
    title: '演示session用法'
  })
})

// 注册
router.get('/register', ctx => {
  return ctx.render('users/new', {
    user: 'sucess upload file'
  })
})

// 注册信息保存
router.post('/register', ctx => {
  console.log(ctx.request.body)
  let body = ctx.request.body
  
  let user = new User({
    username: body.name,
    password: body.password
  })
  
  return user.save(function(err, doc){
    if (err) {
      return ctx.redirect('/404')
    } 
    var session = ctx.session
    session.current_user = {
      username: body.name,
      password: body.password
    }
    
    return ctx.redirect('/')
  })
})

router.get('/login', ctx => {
  return ctx.render('users/login', {
    user: 'sucess upload file'
  })
})
  
// 登录
router.post('/login', ctx => {
  console.log(ctx.request.body)
  let body = ctx.request.body
  
  var session = ctx.session
  
  if (body.name === 'sang' && body.password === '000000') {
    session.current_user = {
      username: body.name,
      password: body.password
    }
  
    return ctx.redirect('/')
  } else {
    session.current_user = null
  
    return ctx.redirect('/')
  }
  
  // 查询数据库
  // User.login(u.name, u.password, function (err, result) {
       // 完成某些操作
  //   return ctx.redirect('/')
  // })
})

router.get('/logout', ctx => {
  ctx.session = null
  
  return ctx.redirect('/')
})

// 获取用户信息
router.post('/profile', ctx => {
  return ctx.render('user', {
    user: 'sucess upload file'
  })
})


module.exports = router