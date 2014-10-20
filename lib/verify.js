'use strict';

var path = require('path'),
    _ = require('lodash'),
    exerciser = require('workshopper-exercise'),
    filecheck = require('workshopper-exercise/filecheck'),
    execute = require('workshopper-exercise/execute'),
    jsdiff = require("diff"),
    colorsTmpl = require('workshopper/node_modules/colors-tmpl');



function stringify(obj) {
    var string = JSON.stringify(obj, null, " ");
    if (typeof string === 'undefined') string = 'undefined';

    // reduce a few linebreaks
    string = string.replace(/([^,])[\r\n]+/g, "$1");
    string = string.replace(/{  \"/g, '{ "');

    // For templating-erercises (html-code line breaks)
    string = string.replace(/\\n/g, "\n");

    return string;
}

function clean(str) {
    if (!str) {
        return void 0;
    }

    if (typeof str !== "string") {
        return str;
    }

    return str.replace(/\r?\n|\r/g, '').replace(/(\s)+/g, '$1');
}

function line(n, sep) {
    n = n || 20;
    sep = sep || '-';
    return (new Array(n)).join(sep);
}

function diffsould(shouldbe, output) {

    var diff = jsdiff.diffWords(output, shouldbe);
    var string = "";

    diff.forEach(function (part) {
        // green for additions, red for deletions, white right
        var color = part.added ? 'green' : part.removed ? 'red' : 'white';
        string = string + colorsTmpl("{" + color + "}" + part.value + "{/" + color + "}");
    });

    return string;
}

function logcompare(input, output, shouldbe) {
    console.log([
        line(),
        'Input',
        line(),
        stringify(input),
        line(),
        'Output:\n' + diffsould(stringify(output), stringify(shouldbe)),
        line(),
        'Output should be:\n' + stringify(shouldbe),
        line()
    ].join('\n'));
}


module.exports = function (tests, run) {
    var exercise = _.compose(execute, filecheck)(exerciser());

    exercise.addProcessor(function (mode, callback) {
        var isRunMode = mode === 'run', self = this, usersolution, result;

        try {
            usersolution = require(path.resolve(process.cwd(), this.args[0]));
        } catch (e) {
            var message = (e.code !== 'MODULE_NOT_FOUND' ? 'Could not find your file. Make sure the path is correct.'
                            : 'You need to install all of the dependencies you are using in your solution (e.g. lodash)');

            this.emit('fail', message);
            return callback(null, false);
        }

        if (typeof usersolution !== 'function') {
            this.emit('fail', 'You should always return a function using the module.exports object.');
            return callback(null, false);
        }

        if (isRunMode) {
            try {
                result = usersolution(run.json);
            } catch (e) { }

            logcompare(run.json, result, run.expect);

            if (!result || !_.isEqual(clean(result), clean(run.expect))) {
                this.emit('fail', 'Test');
                return callback(null, false);
            }

            this.emit('pass', 'Test');
            return callback(null, true);
        }

        var allPassed = _(tests).map(function (item, element) {
            var isCorrect;
            try {
                isCorrect = _.isEqual(clean(item.shouldbe), clean(usersolution(item.input)));
            } catch (e) { }

            if (!isCorrect) {
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