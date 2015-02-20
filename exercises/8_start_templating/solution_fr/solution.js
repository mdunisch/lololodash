'use strict';

var _ = require("lodash");

var template = function (inputvar) {

    var mytemplate = "Bonjour <%= name %> (connexions : <%= login.length %>)";

    return _.template(mytemplate)(inputvar);
};

module.exports = template;
