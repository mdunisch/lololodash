#!/usr/bin/env node

'use strict';

var workshopper = require('workshopper'),
    path        = require('path'),
    updateNotifier = require('update-notifier'),
    pkg = require('./package.json');

updateNotifier({packageName: pkg.name, packageVersion: pkg.version}).notify();

function fpath(f) {
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
