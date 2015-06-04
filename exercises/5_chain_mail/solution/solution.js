'use strict';

var _ = require("lodash");

var wordsmodify = function (arr) {
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

module.exports = wordsmodify;
