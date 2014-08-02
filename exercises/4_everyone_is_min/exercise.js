'use strict';

var verify = require("../../lib/verify.js");
var _ = require("lodash");

var run = {
    json: {
        Hamburg: [14,15,16,14,18,17,20,22,21,18,19,23],
        Munic: [16,17,19,20,21,23,22,21,20,19,24,23],
        Madrid: [24,23,20,24,24,23,21,22,24,20,24,22],
        Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
        Warsaw: [17,15,16,18,20,20,21,18,19,18,17,20]
    },
    expect: {
        "hot": [ "Madrid"],
        "warm": [ "Hamburg", "Munic", "Warsaw" ]
    }
};


var testing = {
    'Checking with standard dataset...': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking with only cold...': {
        input: [
            {Foo: [0,0,0,0,0,2,4,2,1,4,5,2]}
        ],
        shouldbe: {
            "hot": [],
            "warm": []
        }
    },
    'Checking with one temp each...': {
        input:{
            "foo": [2],"bar": [16],"tool": [24]
        },
        shouldbe: {
            "hot": ["tool"],
            "warm": []
        }
    },
    'Checking with empty Object...': {
        input:{},
        shouldbe: {
            "hot": [],
            "warm": []
        }
    }
};

module.exports = verify(testing,run);
