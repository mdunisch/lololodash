Now lets get a little bit deeper...

For this mission you need the know the function  **filter()**

````_.filter(collection, [callback])````
Iterates over elements of a **collection**, returning an array of all elements the **callback-function** returns true for. Filter also can be used with "_.pluck" callback shorthand.

##Example##

````javascript
_.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// → [2, 4, 6]

var characters = [
  { 'name': 'barney', 'age': 36, 'blocked': false },
  { 'name': 'fred',   'age': 40, 'blocked': true }
];
_.filter(characters, 'blocked');
// → [{ 'name': 'fred', 'age': 40, 'blocked': true }]
````

You remember the where()-function from the first exercies? Its pretty much the same except that the filter()-function have a callback for filtering, where() only have a properties-object.

───────────────────────────
##Your mission##
We have the income of a few freelancers in a JSON:
````javascript
[{ name: "mike", income: 2563 },
{ name: "kim", income: 1587 },
{ name: "liz", income: 3541 },
{ name: "tom", income: 2475 },
{ name: "bello", income: 987 },
{ name: "frank", income: 2975 }]
````

Please write a function that:
1.) Calculate the average-income of all freelancers
2.) Put the freelancers in 2 groups: underperform (thier income <= the average-income) and overperform (income > average-income)
3.) Sort the Freelancers in the 2 groups by their income (lowest first)
4.) Give back a JSON in the following form:
````javascript
{"average": 167,
"underperform": [{ "name": "foobar", "income": 99 },
                { "name": "dummy", "income": 100 }],
"overperform": [{ "name": "foo", "income": 302 }]
}
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