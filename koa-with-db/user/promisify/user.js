var mongoose = require('mongoose');
var Promise = require("bluebird");

// 定义Schema
UserSchema = new mongoose.Schema({
  username: {// 真实姓名
    type: String,
    required: true
  },
  password: { // 密码
    type: String,
    required: true
  }
});

// 定义Model
var UserModel = mongoose.model('User', UserSchema);

// Promisify
Promise.promisifyAll(UserModel);
Promise.promisifyAll(UserModel.prototype);

// 暴露接口
module.exports = UserModel;
