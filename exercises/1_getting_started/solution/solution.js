const _ = require("lodash");

const filterwhere = function (item) {
    return _.filter(item, {active: true});
};

module.exports = filterwhere;
