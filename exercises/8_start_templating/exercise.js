'use strict';

var verify = require("../../lib/verify.js"),
    _ = require("lodash");

var run = {
    json: {
        name: "Tom",
        login: [
            1407574431, 140753421, 140715429
        ]
    },
    expect: "Hello Tom (logins: 3)"
};


var testing = {
    'Checking with standard dataset...': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking without logins': {
        input: {
            name: "Tom",
            login: []
        },
        shouldbe: "Hello Tom (logins: 0)"
    }
};

module.exports = verify(testing, run);
