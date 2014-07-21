var _ = require("lodash");

var sorting = function(item){
    return _.sortBy(item,function(item){
        return -item.quantity;
    });

    /* Also possible:
     return _.sortBy(item,"quantity").reverse();
     */
};

module.exports = sorting;