Are you tired of writing loops for Arrays? Lo-Dash gives you a lot of helper-functions for this.

For example the **every()** and **some()**-functions

````_.every(collection, [callback])````

Checks if the given **callback-function** returns true for all elements of the **collection**-Object (Array, JSON).

##Example##

````javascript
_.every([true, false, true], true);
// → false

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred',   'age': 40 }
];

// using "_.pluck" callback shorthand
_.every(characters, 'age');
// → true
````

````_.some(collection, [callback])````

The same as the every-Function except only **one** element of the **collection**-Object have to return true. The function returns as soon as it finds a passing value and does not iterate over the entire collection.


##Your mission##
We have a list of the daily average temperature of different european towns.
````javascript
{ Hamburg: [14,15,16,14,18,17,20,22,21,18,19,23],
Munic: [16,17,19,20,21,23,22,21,20,19,24,23],
Madrid: [24,23,20,24,24,23,21,22,24,20,24,22],
Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
Warsaw: [17,15,16,18,20,20,21,18,19,18,17,20] }
````

We want to sort this Towns in 2 groups: "warm" and "hot". "warm" should be towns that have at least one day with a temperature > 19, "hot" should be towns with all days have a temperature > 19.
````javascript
{ hot: [ "Hottown"],
warm: [ "Town1", "Town2","Town3" ] }
````

##Template##
All your solutions should be in the folloing template:
```javascript
var _ = require("lodash");

var myfunc = function(item){
    return "something";
};

module.exports = myfunc;
```

lololodash will call your function and test with different arguments.