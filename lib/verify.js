'use strict';
var _ = require("lodash");


function logcompare(input,output,shouldbe){
    console.log("-------------------");
    console.log("INPUT");
    console.log("-------------------");
    console.log(JSON.stringify(input, null, 2));
    console.log("-------------------");

    console.log("Output: " + JSON.stringify(output, null, 2));
    console.log("-------------------");
    console.log("Output should be: " + JSON.stringify(shouldbe, null, 2));
    console.log("-------------------");
}


module.exports = function(tests,run){
    var exercise = require('workshopper-exercise')();
    var execute = require('workshopper-exercise/execute');
    var filecheck = require('workshopper-exercise/filecheck');
    exercise = filecheck(exercise);
    exercise = execute(exercise);


    var path = require('path');

    exercise.addProcessor(function (mode, callback) {

        var passed = true;
        var self = this;

        var usersolution;

        try{
            usersolution = require(process.cwd() + "/" + this.args[0]);
        }catch(e){
            this.emit('fail', 'Cannot find your File');
            passed = false;
            return callback(null,passed);
        }

        if(typeof usersolution !== "function"){
            this.emit('fail', 'module.exports exports a function');
            passed = false;
        }

        // when run
        if(mode === "run"){

            var result = usersolution(run.json);

            logcompare(run.json,result,run.expect);

            if(!_.isEqual(result,run.expect)){
                self.emit('fail','Test');
                passed = false;
            }else{
                self.emit('pass','Test');
            }


        }else{
            _(tests).forEach(function(item,element){

                var result = _.isEqual(item.shouldbe,usersolution(item.input));

                if(result !== true){
                    self.emit('fail', element);
                    passed = false;
                    logcompare(item.input,usersolution(item.input),item.shouldbe);
                }else{
                    self.emit('pass', element);
                }

            });
        }

        return callback(null, passed);
    });


    return exercise;

};
