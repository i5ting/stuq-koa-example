var UserModel = {
  create: function () {
  },
  retrieve: function () {
  },
  update: function () {
  },
  delete: function () {
  }
}

var Promise = require("bluebird");

// Promisify
Promise.promisifyAll(UserModel);

console.dir(UserModel)

// $ node promisifyAll.js
// { create: [Function],
//   retrieve: [Function],
//   update: [Function],
//   delete: [Function],
//   createAsync: [Function],
//   retrieveAsync: [Function],
//   updateAsync: [Function],
//   deleteAsync: [Function] }

/**
 * Check if `obj` is a promise.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

var is_promise = isPromise(UserModel.createAsync());
console.log(is_promise)