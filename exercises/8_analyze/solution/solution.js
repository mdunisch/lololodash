const _ = require("lodash");

const analyze = function (item) {

    let average;
    let underperform;
    let overperform;

    // Sort
    item = _.sortBy(item, "income");

    // Sum of all incomes
    average = _.reduce(item, function(sum, num) {
        return sum + num.income;
    }, 0);

    // calculate average
    average = average / item.length;

    // filter underperformer
    underperform = _.filter(item, function (num) {
        return num.income <= average;
    });

    // filter overperformer
    overperform = _.filter(item, function (num) {
        return num.income > average;
    });

    return {
        average: average,
        underperform: underperform,
        overperform: overperform
    };

};

module.exports = analyze;