'use strict';

var _ = require("lodash");

var filterwhere = function (item) {
    return _.filter(item, {active: true});
};

module.exports = filterwhere;
