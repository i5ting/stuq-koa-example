'use strict'

const co = require('co');
const debug = require('debug')('v1')
const convert = require('koa-convert')
const isGeneratorFunction = require('is-generator-function');

module.exports = {
  middleware :[],
  use: function (fn) {
    if (isGeneratorFunction(fn)) {
      console.log('Support for generators will been removed in v3. ' +
                'See the documentation for examples of how to convert old middleware ' +
                'https://github.com/koajs/koa/tree/v2.x#old-signature-middleware-v1x');
      fn = convert(fn);
    }
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
