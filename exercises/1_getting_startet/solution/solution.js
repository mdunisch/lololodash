var _ = require("lodash");

var filterwhere = function(item){
    return _.where(item, {active: true});
};

module.exports = filterwhere;