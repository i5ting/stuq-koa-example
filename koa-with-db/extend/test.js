import test from 'ava';

// 1、引入`mongoose connect`
require('../connect');

// 2、引入`User` Model
const User = require('./user');

// 3、定义`user` Entity
const user = new User({
  username: 'i5ting',
  password: '0123456789',
  openid  : 'xxxxxx1'
});

const user2 = new User({
  username: 'i5ting for is_exist',
  password: '0123456789',
  openid  : 'xxxxxx2'
});

test('#find_by_username()', t => {
  user.save((err, u) => {
    t.ifError(err)
    
    User.find_by_username('i5ting', (err, user) => {
      t.not(err)
      t.not(user)
      t.is(user.username, 'i5ting');
      t.is(user.password, '0123456789');
    })
  });
});

test('#is_exist()', t => {
  user2.save((err, u) => {
    t.ifError(err)
    // console.log(user)
    var is_exist = u.is_exist();
    t.true(is_exist)
  });
});


test.after(t => {
  User.remove({}, (err, result) => {

  })
})
