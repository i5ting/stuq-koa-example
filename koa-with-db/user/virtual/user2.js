const mongoose = require('mongoose');

// 定义Schema
var UserSchema = new mongoose.Schema({
  username      : {// 真实姓名
    type: String,
    required: true
  },
  password      : { // 密码
    type: String,
    required: true
  },
  invite_code   : String, // 邀请码
  phone_number  : Number, // 电话号码
  address       : String,
  created_at    : {
    type: Date,
    "default": Date.now
  }
});

UserSchema.virtual('is_valid').get(function(){
  if(this.phone_number == undefined | this.invite_code == undefined){
    return false;
  }
  return this.invite_code.length >= 2 && this.phone_number > 10000000
});

function _sp (str) {
  return str.replace(/\n/g,'').trim().split('-');
}

UserSchema.virtual('province').get(function () {
  var array = _sp(this.address);
  return array[0];
});

UserSchema.virtual('city').get(function () {
  var array = _sp(this.address);
  return array[1];
});

UserSchema.virtual('county').get(function () {
  var array = _sp(this.address);
  return array[2];
});

UserSchema.virtual('detail_address').get(function () {
  var array = _sp(this.address);
  return array[2];
});

// 定义Model
var UserModel = mongoose.model('UserAddress', UserSchema);

// 暴露接口
module.exports = UserModel;
