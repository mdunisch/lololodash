'use strict';

var verify = require("../../lib/verify.js"),
    _ = require("lodash");

var run = {

    json: [{ username: "tim", comment: "you doing a great job!" },
        { username: "tim", comment: "when you have new workshoppers?" },
        { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
        { username: "max", comment: "where have you been on friday? we missed you!" },
        { username: "max", comment: "Do dont anwer anymore - why?" },
        { username: "cat_lover", comment: "MORE cats!!!" },
        { username: "max", comment: "i really love your site" }],
    expect: [
        {
            "username": "max",
            "comment_count": 3
        },
        {
            "username": "cat_lover",
            "comment_count": 2
        },
        {
            "username": "tim",
            "comment_count": 2
        }
    ]
};


var testing = {
    'Checking with standard dataset...': {
        input: run.json,
        shouldbe: run.expect
    },
    'Checking with only one comment...': {
        input: [
            {
                username: "foo",
                comment: "lalalala"
            }
        ],
        shouldbe: [
            {
                "username": "foo",
                "comment_count": 1
            }
        ]
    },
    'Testing counting right...': {
        input: [
            {
                username: "foo",
                comment: "lalalala"
            },
            {
                username: "foo",
                comment: "lalalala"
            },
            {
                username: "foo",
                comment: "lalalala"
            },
            {
                username: "foo",
                comment: "lalalala"
            }
        ],
        shouldbe: [
            {
                "username": "foo",
                "comment_count": 4
            }
        ]
    }
};

module.exports = verify(testing, run);
