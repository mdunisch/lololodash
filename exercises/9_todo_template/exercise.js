'use strict';

var verify = require("../../lib/verify.js"),
    _ = require("lodash"),
    moment = require("moment");

var run = {

    json: {
        "Tom": [
            {
                todo: "Clean kitchen",
                date: moment().add(10, 'days')
            },
            {
                todo: "Lean Lo-Dash",
                date: moment().add(1, 'days')
            },
            {
                todo: "Become a Lo-Dash master",
                date: moment().add(3, 'days')
            }
        ],
        "Tim": [
            {
                todo: "Contibute to an Open-Sorce-Project",
                date: moment().add(2, 'days')
            }
        ]
    },
    expect: "<ul>\n<li>Tom\n<ul><li><b>URGENT</b> Lean Lo-Dash</li>\n<li>Become a Lo-Dash master</li>\n<li>Clean kitchen</li>\n</ul>\n</li>\n<li>Tim\n<ul><li><b>URGENT</b> Contibute to an Open-Sorce-Project</li>\n</ul>\n</li>\n</ul>"
};


var testing = {
    'Checking with standard dataset...': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking without elements': {
        input: {},
        shouldbe: "<ul></ul>"
    },
    'Checking without todos': {
        input: {
            Martin: [],
            Tina: [],
            Nina: []
        },
        shouldbe: "<ul>\n<li>Martin\n<ul></ul>\n</li>\n<li>Tina\n<ul></ul>\n</li>\n<li>Nina\n<ul></ul>\n</li>\n</ul>"
    },
    'Checking sorting': {
        input: {
            Martin: [
                {
                    todo: "1",
                    date: moment().add(3, 'days')
                },
                {
                    todo: "2",
                    date: moment().add(2, 'days')
                },
                {
                    todo: "3",
                    date: moment().add(1, 'days')
                },
                {
                    todo: "4",
                    date: moment().add(10, 'days')
                }
            ]
        },
        shouldbe: "<ul>\n<li>Martin\n<ul><li><b>URGENT</b> 3</li>\n<li><b>URGENT</b> 2</li>\n<li>1</li>\n<li>4</li>\n</ul>\n</li>\n</ul>"
    },
    'Checking timecalculation': {
        input: {
            Martin: [
                {
                    todo: "1",
                    date: moment().add(2, 'days').add(1, 'hours')
                },
                {
                    todo: "1",
                    date: moment().add(1, 'days').add(23, 'hours')
                }

            ]
        },
        shouldbe: "<ul>\n<li>Martin\n<ul><li><b>URGENT</b> 1</li>\n<li>1</li>\n</ul>\n</li>\n</ul>"
    }
};

module.exports = verify(testing, run);
