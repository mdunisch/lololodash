Sorting a Array or a JSON is sometimes very painfull in Javascript. Lo-Dash helps you with that.

Let me introduce you the sortBy()-Function:

````_.sortBy(collection, [callback=identity])````

The sortBy-function sorts the **collection**-Object (Array, Json, Javascript-Object) with a **Callback-function** (is called each iteration).

##Example##

````javascript
_.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
// → [3, 1, 2]
```

Like the most of the Lo-Dash-Functions sortBy() can also used with the "_.pluck" callback shorthand (http://lodash.com/docs#pluck).

````javascript

var characters = [
  { 'name': 'barney',  'age': 36 },
  { 'name': 'fred',    'age': 40 },
  { 'name': 'barney',  'age': 26 },
  { 'name': 'fred',    'age': 30 }
];

_.sortBy(characters, 'age');
// → [ { name: 'barney', age: 26 },
       { name: 'fred', age: 30 },
       { name: 'barney', age: 36 },
       { name: 'fred', age: 40 } ]
```

**Attention**: sortBy() always sort from the smallest to the bigest!

##Your mission##
We have a list of items sold yesterday like this:
````javascript
[{ article: 2323, quantity: 2 },
{ article: 41, quantity: 24 },
{ article: 655, quantity: 23 }]
```

Please write a function that sort this article-list by the quantity (from big to small).

##Hint##
Because of sortBy sort from smallest to bigest by default you may use a callback-function.

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