#!/usr/bin/env node

const workshopper = require('workshopper');
const updateNotifier = require('update-notifier');
const packageJson = require('./package.json');

updateNotifier({pkg: packageJson}).notify();

workshopper({
    name: 'lololodash',
    appDir: __dirname,
    languages: ['en', 'fr', 'ko']
});
