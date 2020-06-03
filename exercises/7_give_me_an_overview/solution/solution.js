const _ = require("lodash");

const overview = function (orders) {

    return _.chain(orders)
        .groupBy('article')
        .map((item, key) => {
            return {
                article: parseInt(key),
                total_orders: _.reduce(item, (result, value) => result += value.quantity, 0)
            };
        })
        .sortBy(item => -item.total_orders);
};

module.exports = overview;
