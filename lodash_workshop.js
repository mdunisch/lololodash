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
    subtitle    : 'Learn Lo-Dash',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
});