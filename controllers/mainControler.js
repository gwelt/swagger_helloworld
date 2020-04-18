'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/mainServices');

module.exports.sayHello = function sayHello (req, res, next) {
  Default.getBlabla()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
