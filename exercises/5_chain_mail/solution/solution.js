const _ = require("lodash");

var wordsmodify = function (arr) {
    return _.chain(arr)
      .map(item => item + 'Chained')
      .map(item => item.toUpperCase())
      .sortBy()
      .value();
};

module.exports = wordsmodify;
