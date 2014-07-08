var _ = require("lodash");

var sorting = function(item){
    return _.sortBy(item,function(item){
        return -item.quantity;
    });
};

module.exports = sorting;