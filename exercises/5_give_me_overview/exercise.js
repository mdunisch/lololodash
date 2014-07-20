'use strict';

var verify = require("../../lib/verify.js");
var _ = require("lodash");

var run = {

    json: [
        {
            article: 2323,
            quantity: 4
        },
        {
            article: 41,
            quantity: 1
        },
        {
            article: 2323,
            quantity: 10
        },
        {
            article: 655,
            quantity: 2
        },
        {
            article: 655,
            quantity: 4
        }
    ],
    expect: [
        {
            "article": 2323,
            "total_quantity": 14
        },
        {
            "article": 655,
            "total_quantity": 6
        },
        {
            "article": 41,
            "total_quantity": 1
        }
    ]
};


var testing = {
    'Check with Elements of "run"-Enviroment': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking with only one article': {
        input: [
            {
                article: 1,
                quantity: 4
            },
            {
                article: 1,
                quantity: 3
            },
            {
                article: 1,
                quantity: 1
            }
        ],
        shouldbe: [
            {
                "article": 1,
                "total_quantity": 8
            }
        ]
    },
    'Checking 0 quantitys': {
        input:[
            {
                article: 1,
                quantity: 0
            },
            {
                article: 1,
                quantity: 0
            }
        ],
        shouldbe: [
            {
                "article": 1,
                "total_quantity": 0
            }
        ]
    }
};

module.exports = verify(testing,run);