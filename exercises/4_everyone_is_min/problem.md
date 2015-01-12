# Everyone Is Min #
Are you tired of writing loops for Arrays? **Lo-Dash** gives you a lot of
helper-functions for this.
* * *
## Such As? ##
For example, the `every` and `some` functions:
```js
_.every(collection, [callback=identity])
_.some(collection, [callback=identity])
```
`every` and `some` check to see if the given `callback` returns true for *all*
of the elements and *any* of the elements of the collection Object, respectively.
The `some` function returns as soon as it finds a passing value before finishing
its iteration. This `callback` has the same signature as all of the other callback
functions we have seen.

#### Example ####
```js
_.every([true, false, true], true);

// false

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred',   'age': 40 }
];

// using the ".pluck" callback shorthand...
_.every(characters, 'age');

// true
```

* * *
## Your Mission ##
We have a list of the daily average temperatures of different European towns.
```js
{ Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
  Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
  Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
  Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
  Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] }
```
We want to sort these towns into two groups: "warm" and "hot". "warm" should
be towns that have at least one day with a temperature greater than 19. "hot"
should be towns where the temperature is greater than 19 every day. The result
should look like this:
```js
{  hot: [ "Hottown" ],
  warm: [ "Town1", "Town2", "Town3" ] }
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
