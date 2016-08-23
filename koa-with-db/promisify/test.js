import test from 'ava';

// 1、引入`mongoose connect`
require('../connect');

// 2、引入`User` Model
const User = require('../user/promisify/user');

// 3、定义`user` Entity
const user = new User({
  username: 'i5ting',
  password: '0123456789'
});

test.cb('#thenable for default', t => {
  user.save().then( (user) => {
    // console.log(user)
    t.pass()
    t.end()
  }).catch((err) => {
    t.ifError(err);
    t.fail();
    t.end()
  })
});

test.cb('#thenable for bluebird promisifyAll', t => {
  user.saveAsync().then( (user) => {
    // console.log(user)
    t.pass()
    t.end()
  }).catch((err) => {
    t.ifError(err);
    t.fail();
    t.end()
  })
});

test.cb('#thenable for bluebird Async methods', t => {
  user.saveAsync().then( (u) => {
    return User.findByIdAndUpdateAsync( u._id, {'username' : 'aaaa'})
  }).then((updated_result) => {
    // console.log(updated_result)
    return User.findOneAsync({'username' : 'aaaa'});
  }).then((find_user) => {
    // console.log(find_user)
    t.pass()
    t.end()
  }).catch((err) => {
    t.ifError(err);
    t.fail();
    t.end()
  })
});
