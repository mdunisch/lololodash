How many times you fought of "i need it in with total values"? Well with lodash there are lots of function to help you.

For this mission let me show you the **reduce()** function

````_.reduce(collection, [callback], [accumulator], [thisArg])````

The reduce-function goes through a **collection**-Object (Array, Json, Javascript-Object), call the **Callback-function** each time and use a global **accumulator**-variable.
In each loop of the callback function you get three arguments cb(result,item,key): **results** is your global accumulator-variable, **item** the current item and **key** the key of the item in your object.

##Example##

````javascript
_.reduce([1, 2, 3], function(sum, num) {
  return sum + num;
});
// → 6

_.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
  result[key] = num * 3;
  return result;
}, {});
// → { 'a': 3, 'b': 6, 'c': 9 }
````

───────────────────────────
##Your mission##

We have a array with orders of one day:
````javascript
[{ article: 1, quantity: 4 },
{ article: 2, quantity: 2 },
{ article: 1, quantity: 5 }]
````

As you see in this example article "1" is ordered twice. We want to have the total quantities of all orders for every article.

Please write a function that:
1.) Calculate the total quantity for each article
2.) Sort the return array so the article with the highest total quantity is on top

````javascript
[{ article: 1, total_quantity: 9 },
{ article: 2, quantity: 2 }]
````

##Template##
All your solutions should be in the following template:
```javascript
var _ = require("lodash");

var myfunc = function(item){
    return "something";
};

module.exports = myfunc;
```

lololodash will call your function and test with different arguments.