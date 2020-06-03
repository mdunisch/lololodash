const _ = require("lodash");

const analyze = function (item) {

    // Sort
    let sorted = _.sortBy(array, 'income');

    // Calculate average of all incomes
    let average = _.meanBy(array, item => item.income);

    return {
        average: average,
        // Filter underperformers
        underperform: _.filter(sorted, item => item.income <= average),
        // Filter overperformers
        overperform: _.filter(sorted, item => item.income > average)
    };

};

module.exports = analyze;
