var LOCK_TIME, MAX_LOGIN_ATTEMPTS, SALT_WORK_FACTOR, Schema, UserSchema, bcrypt, mongoose;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

Schema = mongoose.Schema;

SALT_WORK_FACTOR = 10;

MAX_LOGIN_ATTEMPTS = 5;

LOCK_TIME = 2 * 60 * 60 * 1000;

UserSchema = new Schema({
  username: {// 真实姓名
    type: String
  },
  id_card: {
    type: String
  },
  id_card_status: { // 0已验证，1验证中，2待验证
    type: Number,
    "default": 2
  },
  stock_total: { // 库存总和
    type: Number,
    "default": 0
  },
  partner_count: { //团队成员数量
    type: Number,
    default: 0
  },
  weixin_name: String,
  signature: String, //个性签名
  password: { // 密码
    type: String,
    required: false
  },
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


var UserModel = mongoose.model('UserModel', UserSchema);

Promise.promisifyAll(UserModel);
Promise.promisifyAll(UserModel.prototype);

module.exports = UserModel;
