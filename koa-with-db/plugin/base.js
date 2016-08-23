/**
 * 给所有的 Model 扩展功能
 * http://mongoosejs.com/docs/plugins.html
 */

var moment = require('moment');

moment.locale('zh-cn'); // 使用中文

function formatDate(date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }
};

module.exports = function (schema) {
  schema.methods.create_at_ago = function () {
    return formatDate(this.create_at, true);
  };

  schema.methods.update_at_ago = function () {
    return formatDate(this.update_at, true);
  };
};