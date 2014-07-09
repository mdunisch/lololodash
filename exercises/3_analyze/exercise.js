'use strict';

var verify = require("../../lib/verify.js");
var _ = require("lodash");

var run = {
    json: [
        {
            name: "mike",
            income: 2563
        },
        {
            name: "kim",
            income: 1587
        },
        {
            name: "liz",
            income: 3541
        },
        {
            name: "tom",
            income: 2475
        },
        {
            name: "bello",
            income: 987
        },
        {
            name: "frank",
            income: 2975
        }
    ],
    expect: { average: 2354.6666666666665,
        underperform:
            [ { name: 'bello', income: 987 },
                { name: 'kim', income: 1587 }
            ],
        overperform:
            [ { name: 'tom', income: 2475 },
                { name: 'mike', income: 2563 },
                { name: 'frank', income: 2975 },
                { name: 'liz', income: 3541 }
            ]
    }
};


var testing = {
    'Check with Elements of "run"-Enviroment': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking with only one Person': {
        input: [{
            name: "mike",
            income: 2563
        }],
        shouldbe: {
            "average": 2563,
            "underperform": [{
                    "name": "mike",
                    "income": 2563
                }],
            "overperform": []
        }
    },
    'Checking with different sortings': {
        input:[
            { name: "mike", income: 100 },
            { name: "kim", income: 99 },
            { name: "foo", income: 101 }
        ],
        shouldbe: {"average": 100,
            "underperform": [
                { "name": "kim", "income": 99 },
                { "name": "mike", "income": 100 }
            ],
            "overperform": [
                { "name": "foo", "income": 101 }
            ]
        }
    }
};

module.exports = verify(testing,run);