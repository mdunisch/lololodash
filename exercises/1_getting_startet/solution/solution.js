var _ = require("lodash");

var test = function(item){
    return _.where(item, {active: true});
};

module.exports = test;