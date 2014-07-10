In Javascript (with the newer browsers or nodejs) you have ES5-Functions for Objects and Arrays (for example ```Array.prototype.forEach```` or ````Object.keys````).
All functions in Lo-Dash are categorize in 4 pars:
- Array-Functions (usefull for Arrays)
- Object-Functions (usefull for JSONs)
- Colletion-Functions (usefull for Arrays and JSONs)
- Utilities-Functions - we get to this later

A lot of the ES5-Functions are for Arrays or Objects but can't be used for both. With Lo-Dash you can!

For this mission let me show you the **forEach()**-Function, a Collection-Function. You surely know this for Arrays - but for a Object?

````_.forEach(collection, [callback)````

Iterates over elements of a **collection** (Array or Json), executing the callback for each element. The **callback-function** have three arguments (value, index|key, collection). Callbacks may exit iteration early by explicitly returning false.

##Example##

````javascript
_.forEach({'foo': {'int': 1}, 'bar': {'int': 5}}, function(item) {
  console.log(item.int);
});
// → logs "1" "5"
````

##Your mission##
You get a list of european towns with population (millions):
````javascript
{ Hamburg: { population: 1.698 },
  Strasbourg: { population: 0.272 },
  Rom: { population: 2.753 },
  Dublin: { population: 0.528 } }
````

We want a new "size"-attribute on every town depents on the population of each town like this:
````javascript
{ City1: {population: 1.58, size: 'big'},
  City2: {population: 0.58, size: 'mid'},
  City3: {population: 0.28, size: 'small'} }
````

But be aware: the list can also be a Array - so you have to use a Collection-Function.

Use the following rules:
- All cities having a population over 1 million are "big"
- Cities with a population less than 1 million and more than 0.5 million a "mid"
- All cities with a population less than 0.5 million are "small"

##Hint##
Don't know how to start? Use a forEach to go through the given json and use a if()/if else()-condition to add a size-variable.

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