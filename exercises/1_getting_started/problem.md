# Getting Started #
**Hello there - let's start using Lo-Dash!**
What is **[Lo-Dash](http://lodash.com/)**? It's a Javascript library that gives you
lots of help when working with Arrays, JSON and Javascript objects. **Lo-Dash** can
be used with Node.js in the back-end but also in a browser in the front-end. Have you
heard of **[underscore.js](http://underscorejs.org/)**? **Lo-Dash** is a fork of
**underscore.js** and it's simply better! If you already know **underscore.js**,
that's awesome. You definitely won't have any trouble with **Lo-Dash**!
* * *
## Down To Business ##
Let's start with a very often-used function in **Lo-Dash** called `filter`:

```js
_.filter(collection, props)
```

`filter` filters `collection` using the condition defined by `props`.
`collection` could be anything -- an Array, JSON data or a Javascript Object.

#### Example ####
```js
var characters = [
  { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
  { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
];

_.filter(characters, { 'age': 36 });

// [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
```
* * *
## Your Mission ##
We have an array of Javascript Objects representing some users in the following format:
```js
[
    { id: 22, username: "martin", active: true},
    { id: 23, username: "max",    active: false},
    { id: 24, username: "linda",  active: false}
]
```
Please write a function that takes such a list as its first argument and give back only
the *active* users (`active === true`).

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
