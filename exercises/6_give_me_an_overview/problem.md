# Give Me an Overview #
How many times you fought with having to find a total across
a big collection of Objects? Well with **Lo-Dash**, there's a
function for that.
* * *
## Lead the Way ##
For this mission, let me show you the `reduce` function.
```js
_.reduce(collection, [callback=identity], [accumulator])
```
`reduce` goes through `collection`, calls `callback` each time
and takes a rolling `accumulator` that it will provide to each call.
Each iteration, `callback` will be called as `callback(accumulator,
value, index|key, collection)` (Finally, a different callback!).  
- `accumulator` is the rolling tally-keeping variable.
- `value` is the current item's value.
- `key` is the key of the current item in the Object.

#### Example ####
```js
_.reduce(
    [1, 2, 3],
    function(sum, num) {
        return sum + num;
    }
);

// 6

_.reduce(
    { 'a': 1, 'b': 2, 'c': 3 },
    function(result, num, key) {
        result[key] = num * 3;
        return result;
    },
    {}
);

// { 'a': 3, 'b': 6, 'c': 9 }
```
* * *
## Your Mission ##
We have an Array recording orders made at a store.
```js
[ { article: 1, quantity: 4 },
  { article: 2, quantity: 2 },
  { article: 1, quantity: 5 } ]
```
As you can see in this example data, "1" was ordered twice. We want
to know the total quantities ordered for each article.

Please write a function that:
1. Calculates the total number of orders for each article.
2. Sorts the resulting array so that the articles with the highest
number of orders are on top
```js
[ { article: 1, total_orders: 9 },
  { article: 2, total_orders: 2 } ]
```

#### Template ####
All of your solutions should follow this template:
```js
// include the Lo-Dash library
var _ = require("lodash");

var worker = function(/* arguments */) {
    // do work; return stuff
};

// export the worker function as a nodejs module
module.exports = worker;
```
**lololodash** will call your function and test it with different arguments.
