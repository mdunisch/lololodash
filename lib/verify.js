'use strict';

var path = require('path');

var _ = require('lodash');
var exerciser = require('workshopper-exercise');
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');

var cleanAndStringify = _.compose(clean, stringify);

module.exports = function (tests, run) {
    var exercise = _.compose(execute, filecheck)(exerciser());

    exercise.addProcessor(function (mode, callback) {
        var isRunMode = mode === 'run', self = this, usersolution, result;

        try {
            usersolution = require(path.resolve(process.cwd(), this.args[0]));
        } catch (e) {
            var message = (e.code !== 'MODULE_NOT_FOUND'
                            ? 'Could not find your file. Make sure the path is correct.'
                            : 'You need to install all of the dependencies you are using in your solution (e.g. lodash)');

            this.emit('fail', message);
            return callback(null, false);
        }

        if (typeof usersolution !== 'function'){
            this.emit('fail', 'You should always return a function using the module.exports object.');
            return callback(null, false);
        }

        if (isRunMode) {
            try {
                result = usersolution(run.json);
            } catch (e) { }

            logcompare(run.json, result, run.expect);

            if (!result || !_.isEqual(result, run.expect)) {
                this.emit('fail', 'Test');
                return callback(null, false);
            }

            this.emit('pass', 'Test');
            return callback(null, true);
        }

        var allPassed = _(tests).map(function(item, element){
            var isCorrect;
            try {
                isCorrect = _.isEqual(item.shouldbe, usersolution(item.input));
            } catch (e) { }

            if(!isCorrect) {
                self.emit('fail', element);
                logcompare(item.input, usersolution(item.input), item.shouldbe);
                return false;
            }

            self.emit('pass', element);
            return true;
        }).every();

        return callback(null, allPassed);
    });

    return exercise;
};

function logcompare(input, output, shouldbe){
    console.log([
        line(),
        'Input',
        line(),
        stringify(input),
        line(),
        'Output: ' + cleanAndStringify(output),
        line(),
        'Output should be: ' + cleanAndStringify(shouldbe),
        line()
    ].join('\n'));
}

function stringify(obj) {
    return JSON.stringify(obj, null, 2);
}

function clean(str) {
    if (!str) return void 0;
    return str.replace(/\r?\n|\r/g, '').replace(/(\s)+/g, '$1');
}

function line(n, sep) {
    n = n || 20;
    sep = sep || '-';
    return (new Array(n)).join(sep);
}