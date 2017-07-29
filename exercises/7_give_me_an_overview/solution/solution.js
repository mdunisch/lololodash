const _ = require("lodash");

const overview = function (orders) {

    // Group by article
    orders = _.groupBy(orders, 'article');

    var overviewarray = _.map(orders, function (items, key) {
        key = parseInt(key);
        var total = _.sumBy(items, 'quantity');

        return {
            article: key,
            total_orders: total
        };
    });

    // Order
    overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

    return overviewarray;
};

module.exports = overview;
