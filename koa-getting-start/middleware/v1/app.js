var co = require('co');
var debug = require('debug')('v0')

module.exports = {
  middleware :[],
  use: function (fn) {
    debug('use:' + fn);

    this.middleware.push(fn);
    return this;
  },
  callback: function (cb) {
    const fn = this.compose(this.middleware);
    debug('callback compose fn = ' + fn)

    co(fn).then(cb, function (err) {
      console.error(err.stack);
    });
  },
  compose: function (middleware) {
    debug('compose=' + middleware)
    return function *(next){
      if (!next) {
        next = function *(){}
      }
      
      var i = middleware.length;

      while (i--) {
        debug('compose middleware[' + i + ']=: ' + middleware[i])
        // next = co.wrap(middleware[i]).call(this);
        next = middleware[i].call(this, next);

        debug(next)
      }

      return yield *next;
    }
  } 
}
