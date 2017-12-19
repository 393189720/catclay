/**
 * 给所有的 Model 扩展功能
 * http://mongoosejs.com/docs/plugins.html
 */
var tools = require('../utils/tools');

module.exports = function (schema) {
  schema.methods.createTimeAgo = function () {
    return tools.formatDate(this.createTime, true);
  };

  schema.methods.updateTimeAgo = function () {
    return tools.formatDate(this.updateTime, true);
  };
};
