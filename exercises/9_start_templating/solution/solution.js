const _ = require("lodash");

const template = function (inputvar) {

    let mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(mytemplate)(inputvar);
};

module.exports = template;