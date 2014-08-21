'use strict';

var _ = require("lodash");

var commentcount = function (comments) {

    var counted = [];

    // Group by article
    comments = _.groupBy(comments, 'username');

    _.forEach(comments, function (item, name) {

        counted.push({
            username: name,
            comment_count: _.size(item)
        });
    });

    return _.sortBy(counted, "comment_count").reverse();

};

module.exports = commentcount;