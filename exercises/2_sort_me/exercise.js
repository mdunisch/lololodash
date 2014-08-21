'use strict';

var verify = require("../../lib/verify.js"),
    _ = require("lodash");

var run = {
    json: [
        {
            article: 2323,
            quantity: 2
        },
        {
            article: 41,
            quantity: 24
        },
        {
            article: 655,
            quantity: 23
        }
    ],
    expect: [
        { article: 41, quantity: 24 },
        { article: 655, quantity: 23 },
        { article: 2323, quantity: 2 }
    ]
};


var testing = {
    'Checking with standard hashtables...': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking with empty Object...': {
        input: {},
        shouldbe: []
    },
    'Checking with quantity as String...': {
        input: [{ article: 41, quantity: "2" },
                { article: 655, quantity: "23" }],
        shouldbe: [{ article: 655, quantity: "23" },
            { article: 41, quantity: "2" }]
    }
};

module.exports = verify(testing, run);
