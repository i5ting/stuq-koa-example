// 1、引入`mongoose connect`
require('../connect');

// 2、引入`User` Model
var User = require('./user');

// 3、定义`user` Entity
var user = new User({
  username: 'i5ting',
  password: '0123456789'
});

// 4、对数据库进行操作
user.save(function(err, doc){
  if (err) {
    console.log('save error:' + err);
  }
  
  console.log('save sucess \n' + doc);
})
