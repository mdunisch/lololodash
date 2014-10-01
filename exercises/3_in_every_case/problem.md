# In Every Case #
In Javascript (with newer browsers or with **nodejs**) you have
**[ECMAScript5](http://www.ecma-international.org/ecma-262/5.1/)** functions
for Objects and Arrays (for example: `Array.prototype.forEach` or `Object.keys`).
All functions in **Lo-Dash** are categorized as one of the following:

- Array Functions: useful for Arrays
- Object Functions: useful for Objects and JSON data
- Collection Functions: useful for sequences of data of various types
- Utilities Functions: we will get to this later

A lot of the ES5 functions are for either Arrays or Objects but can't be used
for both. **Lo-Dash** functions can be!
* * *
## So, Now What? ##
For this mission let me show you the `forEach` function -- a *Collection*
function. You surely know about this for Arrays, but for Objects?
```js
_.forEach(collection, [callback=identity])
```
Unlike with `sortBy`, if `callback` is specified, it must be a function. Like
with `sortBy`, it will be called as `callback(value, index|key, collection)`.
This function iterates over elements of a *collection* (either an Array or
hashtable Object) executing `callback` on each element. The callback may end
iteration early by explicitly returning `false`.

#### Example ####
```js
_.forEach(
    { 'foo': { 'int': 1 }, 'bar': { 'int': 5 } },
    function(item) {
        console.log(item.int);
    }
);

// 1
// 5
```
* * *
## Your Mission ##
We're receiving a hashtable or associative array of European towns with their
populations in millions:
```js
{ Hamburg:    { population: 1.698 },
  Strasbourg: { population: 0.272 },
  Rom:        { population: 2.753 },
  Dublin:     { population: 0.528 } }
```
We want a new `size` attribute added to every town where the value depends on
the town's its population, as follows:
```js
{ City1: {population: 1.58, size: 'big'  },
  City2: {population: 0.58, size: 'med'  },
  City3: {population: 0.28, size: 'small'} }
```
**Attention**: the list could also be a Array, so you will have to use a
collection function.

Use the following guidelines:
- All cities having a population over 1 million are "big".
- Cities having a population less than 1 million but more than 0.5 million are "med".
- All cities having a population less than 0.5 million are "small".

> #### Hint ####
> Don't know where to start? Use `forEach` to iterate through the supplied data
> and use an `if-elseif-else` condition to add a size variable.

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
