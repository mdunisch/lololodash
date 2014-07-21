All functions of Lo-Dash are very helpfull. But now let me show you one of my favorites: the **groupBy()** function

````_.groupBy(collection, [callback])````
Creates an object composed of keys generated from the results of running each element of a **collection**-Object (Array, Json, Javascript-Object) through the **callback**. The corresponding value of each key is an array of the elements responsible for generating the key.

##Example##
````javascript
_.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
// → { '4': [4.2], '6': [6.1, 6.4] }

// using "_.pluck" callback shorthand
_.groupBy([{name: 'mike', age: 23}, {name: 'mike', age: 41}, {name: 'tom', age: 19}], 'name');
// → { 'mike': [{name: 'mike', age: 23}, {name: 'mike', age: 41}], 'tom': [{name: 'tom', age: 19}] }
````

Oh and one helper i also use often: **size()**

```` _.size(collection) ````
Gets the size of the collection by returning collection.length for arrays and array-like objects or the number of own enumerable properties for objects.

##Example##
````javascript
_.size([1, 2]);
// → 2

_.size({ 'one': 1, 'two': 2, 'three': 3 });
// → 3

_.size('pebbles');
// → 7
````

───────────────────────────
##Your mission##

We have a array of comments on my website:
````javascript
[{ username: "tim", comment: "you doing a great job!" },
{ username: "tim", comment: "when you have new workshoppers?" },
{ username: "cat_lover", comment: "wtf? where are all the cats gone?" },
{ username: "max", comment: "where have you been on friday? we missed you!" },
{ username: "max", comment: "Do dont anwer anymore - why?" },
{ username: "cat_lover", comment: "MORE cats!!!" },
{ username: "max", comment: "i really love your site" }]
````

I want to know how post the most comments so please write a function that:
1.) Counts the comments by username
2.) Sort the return array by the total comments of each user

````javascript
[{ username: "foo", comment_count: 9 },
{ username: "foobar", comment_count: 2 }]
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