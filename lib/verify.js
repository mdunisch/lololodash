'use strict';

var path = require('path'),
    _ = require('lodash'),
    exerciser = require('workshopper-exercise'),
    filecheck = require('workshopper-exercise/filecheck'),
    execute = require('workshopper-exercise/execute'),
    jsdiff = require("diff"),
    colorsTmpl = require('colors-tmpl');



function stringify(obj) {
    var string = JSON.stringify(obj, null, " ");
    if (typeof string === 'undefined') {
        string = 'undefined';
    }

    // reduce a few linebreaks
    string = string.replace(/([^,])[\r\n]+/g, "$1");
    string = string.replace(/\{  "/g, '{ "');

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

    var diff = jsdiff.diffLines(output, shouldbe);
    var string = "";

    diff.forEach(function (part) {
        // green for additions, red for deletions, white right
        var color = part.added ? 'red' : 'white';
        if(!part.removed){
            string = string + colorsTmpl("{" + color + "}" + part.value + "{/" + color + "}");
        }
    });

    return string;
}

function logcompare(input, output, shouldbe, __) {
    console.log([
        line(),
        __('logcompare.input'),
        stringify(input),
        line(),
        __('logcompare.output') + '\n' + diffsould(stringify(output), stringify(shouldbe)),
        line(),
        __('logcompare.output_should_be') + '\n' + stringify(shouldbe),
        line()
    ].join('\n'));
}


module.exports = function (tests, run) {
    var exercise = _.flowRight(execute, filecheck)(exerciser());

    function i18nSafeHas(key) {
        try {
            return exercise.i18n.has(key);
        } catch (e) {
            // There's a corner case in i18n-core for keys with no '.' anywhere,
            // which can happen for us due to missing trans and parent traversal.
            return false;
        }
    }

    exercise.addProcessor(function (mode, callback) {

        var isRunMode = mode === 'run', self = this, usersolution, result;
        var __ = exercise.__.bind(exercise);

        try {
            usersolution = require(path.resolve(process.cwd(), this.args[0]));
        } catch (e) {
            var message

            if (e.code === 'MODULE_NOT_FOUND') {
                var missing = (function () {
                  if (typeof e.message !== 'string') return null

                  var match = e.message.match(/^Cannot find module '([^']*)'$/)

                  if (!match) return null

                  return match[1]
                })()

                message = __('fail.missing_deps', { missing })
            } else {
                message = e.stack
            }

            this.emit('fail', message);
            return callback(null, false);
        }

        if (typeof usersolution !== 'function') {
            this.emit('fail', __('fail.must_export_function'));
            return callback(null, false);
        }

        if (isRunMode) {
            try {
                result = usersolution(_.clone(run.json, true));
            } catch (e) { }

            var expected = run.expect;
            if ('string' === typeof expected && i18nSafeHas(expected)) {
                expected = exercise.__(expected);
            }

            logcompare(run.json, result, expected, __);

            if (!result || !_.isEqual(clean(result), clean(expected))) {
                this.emit('fail', 'Test');
                return callback(null, false);
            }

            this.emit('pass', 'Test');
            return callback(null, true);
        }

        var allPassed = _(tests).map(function (item, element) {
            var isCorrect;
            if (i18nSafeHas(element)) {
                element = exercise.__(element);
            }

            var shouldbe = item.shouldbe;
            if ('string' === typeof shouldbe && i18nSafeHas(shouldbe)) {
                shouldbe = exercise.__(shouldbe);
            }

            try {
                isCorrect = _.isEqual(clean(shouldbe), clean(usersolution(item.input)));
            } catch (e) { }

            if (!isCorrect) {
                self.emit('fail', element);
                logcompare(item.input, usersolution(item.input), shouldbe, __);
                return false;
            }

            self.emit('pass', element);
            return true;
        }).every();

        return callback(null, allPassed);
    });

    return exercise;
};
