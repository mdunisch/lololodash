'use strict';

var _ = require("lodash");

module.exports = function (arr) {
    return _.chain(arr)
      .map(function (item) {
        return item + 'Chained';
      })
      .map(function (item) {
        return item.toUpperCase();
      })
      .sortBy()
      .value();
};
