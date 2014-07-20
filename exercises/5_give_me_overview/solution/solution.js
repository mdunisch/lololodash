var _ = require("lodash");


var overview = function(orders) {

    var overviewarray = [];

    // Group by article
    orders = _.groupBy(orders, 'article');

    _.forEach(orders, function (item, key) {

        key = parseInt(key);
        var total = 0;

        // If only one article
        if(item.length === 1){
            total = item[0].quantity;

        // Else make sum of all orders
        }else{

            total = _.reduce(item, function(sum, item) {
                return sum + item.quantity;
            },0);
        }

        overviewarray.push({
            article: key,
            total_quantity: total
        });

    });

    // Order
    overviewarray = _.sortBy(overviewarray, "total_quantity").reverse();

    return overviewarray;
};

module.exports = overview;