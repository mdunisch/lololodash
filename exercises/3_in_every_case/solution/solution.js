var _ = require("lodash");


var addsizetyp = function(item){

    _.forEach(item,function(value,key){

        if(value.population > 1){
            item[key].size = "big";
        } else if (value.population > 0.5){
            item[key].size = "mid";
        } else {
            item[key].size = "small";
        }
    });

    return item;
};

module.exports = addsizetyp;