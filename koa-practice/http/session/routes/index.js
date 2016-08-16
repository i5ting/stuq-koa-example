"use strict"

const router = require('koa-router')()

// 首页
router.get('/', ctx => {
  var session = ctx.session;
  
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