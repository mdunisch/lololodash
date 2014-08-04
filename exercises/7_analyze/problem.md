# Analyze #
Now lets go a little bit deeper...
* * *
## Way, Way Down ##
For this mission you will need the know the function `filter`.
```js
_.filter(collection, [callback=identity])
```
`filter` iterates over elements of a collection, returning an
array of all elements for which `callback` returns true. `filter` can
also be used with "*.pluck*" callback shorthand.

#### Example ####
```js
_.filter(
    [1, 2, 3, 4, 5, 6],
    function(num) {
        return num % 2 == 0;
    }
);

// [2, 4, 6]

var characters = [
  { 'name': 'barney', 'age': 36, 'blocked': false },
  { 'name': 'fred',   'age': 40, 'blocked': true }
];
_.filter(characters, 'blocked');

// [{ 'name': 'fred', 'age': 40, 'blocked': true }]
```
You remember the `where` function from the first exercise? This
is pretty much the same except that `filter` takes a callback
that *contains* the condition logic for filtering while `where`
takes an object that *represents* the condition.
* * *
## Your Mission ##
We have the income of a few freelancers in a Array of Objects:
```js
[ { name: "mike",  income: 2563 },
  { name: "kim",   income: 1587 },
  { name: "liz",   income: 3541 },
  { name: "tom",   income: 2475 },
  { name: "bello", income: 987  },
  { name: "frank", income: 2975 } ]
```
Please write a function that:
1. Calculates the average income across all of the freelancers.
2. Puts the freelancers into two groups:

**underperform** their income is less than or equal to the average income.
**overperform** their income is greater than the average income.

3. Sorts the freelancers within the two groups by their income with the lowest first.
4. Returns an Object in the following form:  

```js
{
    "average": 167,
    "underperform": [
        { "name": "foobar", "income": 99 },
        { "name": "dummy", "income": 100 }
    ],
    "overperform": [
        { "name": "foo", "income": 302 }
    ]
}
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
* * *
## To Start ##
Make sure you have **lodash** installed!  
```
npm install lodash
```  
Good luck!
