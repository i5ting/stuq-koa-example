import test from 'ava';

// 1、引入`mongoose connect`
require('../connect');

// 2、引入`User` Model
const User = require('../user/virtual/user');

// 3、定义`user` Entity
const user_with_invite_code = new User({
  username: 'i5ting',
  password: '0123456789',
  invite_code  : 'xxxx',
  phone_number: 18611112222
});

const user_with_no_invite_code = new User({
  username: 'i5ting',
  password: '0123456789',
  phone_number: 18611112222
});

test('#is_valid() === true if user_with_invite_code', t => {
  user_with_invite_code.save((err, u) => {
    t.true(u.is_valid)
  })
});

test('#is_valid() === false if user_with_no_invite_code', t => {
  user_with_no_invite_code.save((err, user) => {
    t.false(user.is_valid)
  })
});
