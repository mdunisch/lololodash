'use strict';

var _ = require("lodash");

var template = function (inputvar) {

    var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(mytemplate, inputvar);
};

module.exports = template;