#!/usr/bin/env node
'use strict';

var workshopper = require('workshopper'),
    path        = require('path');

function fpath (f) {
    return path.join(__dirname, f);
}

workshopper({
    name        : 'lololodash',
    title       : 'Lololodash - learn LoDash',
    subtitle    : 'Learn how to create a workshopper lesson',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
});