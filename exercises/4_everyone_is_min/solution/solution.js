const _ = require("lodash");

var tempsort = function (item) {
    
    var result = {
        hot: [],
        warm: []
    };
    
    // If temp > 19
    const check_temp = (item) => item > 19;

    _.forEach(item, function (town, townname) {

        if (_.every(town, check_temp)) {
            result.hot.push(townname);
        } else if (_.some(town, check_temp)) {
            result.warm.push(townname);
        }

    });

    return result;
};

module.exports = tempsort;