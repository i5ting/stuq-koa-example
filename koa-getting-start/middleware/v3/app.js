'use strict'

const co = require('co');
const debug = require('debug')('v1')

module.exports = {
  middleware :[],
  use: function (fn) {
    this.middleware.push(fn);
    return this;
  },
  compose: function (middleware) {
    return function (context, next) {
      // last called middleware #
      let index = -1
      return dispatch(0)
      function dispatch (i) {
        if (i <= index) return Promise.reject(new Error('next() called multiple times'))
        index = i
        const fn = middleware[i] || next
        if (!fn) return Promise.resolve()
        try {
          return Promise.resolve(fn(context, function next () {
            return dispatch(i + 1)
          }))
        } catch (err) {
          return Promise.reject(err)
        }
      }
    }
  },
  callback: function () {
    const fn = this.compose(this.middleware);
    debug('callback compose fn = ' + fn)
    
    var ctx = {
      
    }

    fn(ctx).then(function(){

    })
  }
}
