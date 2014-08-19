# Start templating #
Do you remember the **Utilities Functions** I told you about a few
exercises before? Now it's time for them:
Let's do a little bit of templating!
* * *
## Lead the Way ##
For this mission, let me show you the `template` function.
_template() give you a simple and powerfull micro-templating with Lo-Dash.

```js
_.template(text, data)
```
`template` uses your `text`-var as a template and returns a interpolated
text with your `data`.
In your template you can use `<%= VARNAME %>` to print a variable.

#### Example ####
```js
_.template('<b><%= value %></b>', { value: 'attention' });

// '<b>attention</b>'

```
* * *
## Your Mission ##
Just to get started simple use the template()-function to interpolate
a simple var for us:

```js
{ name: "Foo",
  login: [ 1407574431, 140753421 ]
}
```
We want a simple string from you showing the name of the user and times,
the user had logged in (every timestamp represents one login). Your
function should return a String like this:

```
Hello Foo (logins: 2)
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
