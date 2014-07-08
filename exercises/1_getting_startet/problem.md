**Hello there - let us start using Lo-Dash!**
You know Lo-Dash? It's a Javascript-Library that give you lots of helper to work with Arrays, JSON- and Javascript-Objects. Lo-Dash can be used with Node.js but also in your Browser for your frontend.
You heard of underscore.js? Lo-Dash is a fork from underscore.js - but simple better! If you already know underscore.js - awesome than you sure don't have trouble with Lo-Dash!
Let's start with a very often used function in Lo-Dash called "where":

````_.where(collection, props)````

The where-function filters the **collection**-Object (Array, Json, Javascript-Object) by the **props**-conditiuon.

##Example##

````javascript
var characters = [
  { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
  { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
];

_.where(characters, { 'age': 36 });
// → [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
```

##Your mission##
We have a userlist in the following format:
````javascript
[{ id: 22, username: "martin", active: true
},
{ id: 23, username: "max", active: false
},
{ id: 24, username: "linda", active: false
}]
```

Please write a Function that takes a Userlist-Object as first argument and give back only the active users (active = true)

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

##To Start##
Make sure, you have lodash installed (npm install lodash)