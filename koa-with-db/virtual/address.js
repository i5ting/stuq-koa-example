import test from 'ava';

// 1、引入`mongoose connect`
require('../connect');

// 2、引入`User` Model
const User = require('../user/virtual/user2');

// 3、定义`user` Entity
const user = new User({
  username: 'i5ting',
  password: '0123456789',
  address  : '天津-天津-东丽区-空港商务园'
});

test.before.cb(t => {
  User.remove({}, (err, result) => {
    t.end()
  })
})

test('#province city county detail_address', t => {
  user.save((err, u) => {
    t.is(u.province, '天津')
    t.is(u.city, '天津')
    t.is(u.county, '东丽区')
    t.is(u.detail_address, '空港商务园')
  })
}); 