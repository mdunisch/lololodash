'use strict';

var _ = require("lodash");

var addsizetyp = function (item) {

    _.forEach(item, function (value, key) {

        if (value.population > 1) {
            value.size = "big";
        } else if (value.population > 0.5) {
            value.size = "med";
        } else {
            value.size = "small";
        }
    });

    return item;
};

module.exports = addsizetyp;
