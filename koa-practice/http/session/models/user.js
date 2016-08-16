// var mongoose = require('mongoose');
// var base_user = require('mongoose-base-user-plugin')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var MyUserSchema = new mongoose.Schema({ 
  username      : {// 真实姓名
    type: String,
    required: true
  },
  password      : { // 密码
    type: String,
    required: true
  },
  _salt_bounds: {
    type: Number,
    required: false,
    default : 10
  },
  created_at    : {
    type: Date,
    "default": Date.now
  },
  created_at    : {
    type: Date,
    "default": Date.now
  }

});

MyUserSchema.statics.login = function(username, password, cb) {
  this.findOne({
    username: username
  }, function (err, user) {
    if (err || !user) {
      if (err)
        console.log(err);
    
      return cb(err, {
        code: -1,
        msg : username + ' is not exist!'
      });
    }
  
    bcrypt.compare(password, user.password, function(error, res) {
      if (error) {
        console.log(error);
        return cb(err, {
          code: -2,
          msg : 'password is incorrect, please check it again!'
        });
      }
  
      return cb(null, user);
    });
  });
};

MyUserSchema.pre('save', function (next) {
  var that = this;

  bcrypt.genSalt(this._salt_bounds, function(err, salt) {
    if (err) {
      console.log(err);
      return next();
    }
  
    bcrypt.hash(that.password, salt, function(error, hash) {
      if (error) {
        console.log(error);
      }
    
      // console.log(this.password + ' \n ' + hash);
      //生成密文
      that.password = hash;
    
      return next();
    });
  });
});

// MyUserSchema.plugin(base_user);

// 定义Model
var UserModel = mongoose.model('User', MyUserSchema);

// 暴露接口
module.exports = UserModel;