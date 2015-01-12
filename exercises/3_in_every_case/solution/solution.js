'use strict';

var _ = require("lodash");

module.exports = function(collection) {
  // add a size attribute to the collection based on the item's population
  // >= 1.0 (million) is "big"
  // >= 0.5 && < 1.0 is "med"
  // < 0.5 is "small"
  return _.forEach(collection, function(item) {
    if (item.population >= 1) {
      item.size = "big";
    } else if(item.population < 0.5) {
      item.size = "small";
    } else {
      item.size = "med";
    }
  });
};
