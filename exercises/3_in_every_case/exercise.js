'use strict';

var verify = require("../../lib/verify.js");
var _ = require("lodash");

var run = {
    json: {
        Hamburg: { population: 1.698 },
        Strasbourg: { population: 0.272 },
        Rom: { population: 2.753 },
        Dublin: { population: 0.528 }
    },
    expect: { Hamburg: { population: 1.698, size: 'big' },
        Strasbourg: { population: 0.272, size: 'small' },
        Rom: { population: 2.753, size: 'big' },
        Dublin: { population: 0.528, size: 'med' } }
};


var testing = {
    'Checking with standard hashtables...': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking with an Array...': {
        input: [
            {Hamburg: { population: 1.698 }},
            {Strasbourg: { population: 0.272 }},
            {Rom: { population: 2.753 }},
            {Dublin: { population: 0.528 }}
        ],
        shouldbe: [
            { "Hamburg": {
                    "population": 1.698
                },
                "size": "small"
            },{
                "Strasbourg": {
                    "population": 0.272
                },
                "size": "small"
            },{
                "Rom": {
                    "population": 2.753
                },
                "size": "small"
            },{
                "Dublin": {
                    "population": 0.528
                },
                "size": "small"
            }]
    },
    'Checking with empty Object...': {
        input:{},
        shouldbe: {}
    },
    'Checking with empty Array...': {
        input:[],
        shouldbe: []
    }
};

module.exports = verify(testing,run);
