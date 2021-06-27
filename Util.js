const format = require("./plugins/format.js");
const formatBr = require('./plugins/format-br')
const convertFormat = require("./plugins/convertFormat");

module.exports = class Util {
  static toFormat(num) {
    return format(num);
  }

  static toFormatBr(num) {
      return formatBr(num)
  }

  static toFormatString(num) {
    return convertFormat(num);
  }
};