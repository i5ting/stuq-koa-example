"use strict"

var Faye = require('faye'); 

const router = require('koa-router')()


var client = new Faye.Client('http://127.0.0.1:3000/faye');

console.log(client)

// 首页
router.get('/', ctx => {
  var session = ctx.session;
  
  setTimeout(function () {
    console.log('publish')
    client.publish('/messages', {
      text: 'Hello world'
    });
  }, 3000)
  
  
  if (session.current_user) {
    return ctx.render('index', {
      title: '演示session用法: 当前状态为已登录或注册成功'
    });
  } else {
    return ctx.render('index', {
      title: '演示session用法: 当前状态为游客'
    });
  }
});

module.exports = router
