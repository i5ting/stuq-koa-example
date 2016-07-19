var co = require('co');
var debug = require('debug')('v1')
const convert = require('koa-convert')

module.exports = {
  middleware :[],
  use: function (fn) {
    this.middleware.push(fn);
    return this;
  },
  callback: function () {
    const fn = convert.compose(this.middleware);
    debug('callback compose fn = ' + fn)
    
    var ctx = {
      
    }

    fn(ctx).then(function(){

    })
  }
}
