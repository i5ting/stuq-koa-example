import test from 'ava';

// 1、引入`mongoose connect`
require('../mini/connect');

// 2、引入`User` Model
const User = require('../mini/user');

// 3、定义`user` Entity
let user = new User({
  username: 'i5ting',
  password: '0123456789'
});


global.log = console.log


test('#save()', function * (t) {
  var u = yield User.create(user)
  t.is(u.username, 'i5ting');
});
//
// test.before.cb(t => {
//   User.remove({}, function(err, result){
//     User.find({}, (err, docs) => {
//       t.end();
//     })
//   });
// });
//
// test('#find() return array', t => {
//   User.find({}, (err, docs) => {
//     t.false(err);
//     t.is(docs.length, 1);
//     t.is(docs[0].username, 'i5ting');
//   });
// });
//
// test('#findById() return one', t => {
//   let _user = new User({
//     username: 'i5ting for findById',
//     password: '01234567891'
//   });
//
//   _user.save((err, u) => {
//     if (err) log(err);
//
//     t.is(u.username, 'i5ting for findById');
//
//     User.findById(u._id, (err, doc) => {
//       t.false(err);
//       t.is(doc.username, 'i5ting for findById');
//     });
//   });
// });
//
//
// test('#findOne() return user obj', t => {
//   User.findOne({username: 'i5ting'}, (err, doc) => {
//     t.false(err);
//     t.is(doc.length, 1);
//     t.is(doc.username, 'i5ting');
//   });
// });
//
// test('#remove()', t => {
//   const _user = new User({
//     username: 'i5ting for delete',
//     password: '0123456789'
//   });
//
//   _user.save((err, u) => {
//     t.is(u.username, 'i5ting for delete');
//
//     User.remove({username: 'i5ting for delete'}, (err, doc) => {
//       t.false(err);
//       t.is(doc.result.ok, 1);
//       t.is(doc.result.n, 1);
//     });
//   });
// });
//
//
// test('#findByIdAndUpdate()', t => {
//   const _user = new User({
//     username: 'i5ting for update 1',
//     password: '0123456789'
//   });
//
//   _user.save((err, u) => {
//     t.is(u.username, 'i5ting for update 1');
//
//     User.findByIdAndUpdate(u._id, {
//       username: 'sang',
//     }, (err, user) => {
//       t.false(err);
//       t.is(user.username, 'sang');
//     });
//   });
// });
//
// test('#findOneAndUpdate()', t => {
//   const _user = new User({
//     username: 'i5ting for update 2',
//     password: '0123456789'
//   });
//
//   _user.save((err, u) => {
//     t.is(u.username, 'i5ting for update 2');
//
//     User.findOneAndUpdate({
//       username: 'i5ting for update 2',
//     }, {
//       username: 'sang',
//     }, (err, user) => {
//       t.false(err);
//       t.is(user.username, 'sang');
//     });
//   });
// });
//
//
