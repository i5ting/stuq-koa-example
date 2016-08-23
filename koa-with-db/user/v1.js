var mongoose = require('mongoose');

// 定义Schema
UserSchema = new mongoose.Schema({
  username: {// 真实姓名
    type: String,
    required: true
  },
  password: { // 密码
    type: String,
    required: true
  },
  id_card: {
    type: String
  },
  id_card_status: { // 0已验证，1验证中，2待验证
    type: Number,
    "default": 2
  },
  weixin_name: String,
  signature: String, //个性签名
  type: {
    type: Number,
    required: false,
    "default": 0
  },
  invite_code   : String, // 邀请码
  phone_number  : Number, // 电话号码
  address       : String, // 地址
  unionid       : String,
  openid: {// from weixin openid
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  nickname      : String,// from weixin 昵称
  sex           : String,// from weixin 性别 0->女 1->男
  language      : String,// from weixin 语言
  city          : String,// from weixin 城市
  province      : String,// from weixin 
  country       : String,// from weixin
  headimgurl    : String,// from weixin 头像路径
  privilege     : [],    // from weixin
  created_at    : {
    type: Date,
    "default": Date.now
  }
});


/**
 * 根据用户名查找
 */ 
UserSchema.statics.find_by_username = function(username, cb) {
  return this.findOne({
    username: username
  }, cb);
};

/**
 * 是否存在
 */ 
UserSchema.methods.is_exist = function() {
  if (this.username.length > 0 && this.password.length > 0) {
    var query = {
      username: this.username,
      password: this.password
    };
  
    this.model('User').findOne(query, function (err, user) {
      if (err) {
        console.log(err)
        return false;
      }
      if (user) {
        return true;
      }
      
      return false;
    });
  } else {
    console.log('keep username && password exist')
    return false;
  }
  
  return false;
};

// 定义Model
var UserModel = mongoose.model('User', UserSchema);

// 暴露接口
module.exports = UserModel;
