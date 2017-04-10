const _ = require("lodash");

const sorting = function (collection) {
    return _.sortBy(collection, item => -item.quantity);

    /* Also possible:
     return _.sortBy(collection,"quantity").reverse();
     */
};

module.exports = sorting;
