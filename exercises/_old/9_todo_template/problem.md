# To-do Template #
If you finished the last exercise, you might think, "Template?
That's just another word for string-merge!; but, the `template` function
in Lo-Dash is very powerful.

* * *
## Going deep into template() ##
`template()` is much more. You can add any kind of javascript code by
escaping it with `<% %>`. If you are familiar with PHP, `<% %>` is almost
the same as `<? ?>`.

#### Example ####
```js
var mytemplate = '<% _.forEach(data, function(item){ %>' +
    '<li><%= item %></li>' +
    '<% }); %>';
_.template(mytemplate)({data: [1, 2, 3]});

/*
<li>1</li>
<li>2</li>
<li>3</li>
*/
```
You can write templates without learning a template syntax -- just use
Javascript. Isn't that awesome?


As a second parameter, `template()` accepts an options object. One of
the options I really like and want to show you is `option.imports`.
With `options.imports`, you can define an object to describe values
to import into the template as local variables.

#### Example ####
```js
var ucfirst = function (str) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
};

_.template('Hello <%= ucfirst(foo) %>',
    { 'imports': { 'ucfirst': ucfirst } })({foo: "mike"});
// Hello Mike
```

Again, isn't that awesome?
template() has many more options; you can read more about them on
[Lo-Dash docs](http://lodash.com/docs#template).


* * *
## Your Mission ##
We have a JSON of different to-do's:

```js
{ "Tom": [
    {
      "todo": "Clean kitchen",
      "date": "2014-08-19T12:13:20.207Z"
    },
    {
      "todo": "Learn Lo-Dash",
      "date": "2014-08-10T12:13:20.210Z"
    },
    {
      "todo": "Become a Lo-Dash master",
      "date": "2014-08-12T12:13:20.210Z"
    }
  ],
  "Tim": [
    {
      "todo": "Contribute to an Open-Source-Project",
      "date": "2014-08-11T12:13:20.210Z"
    }
  ]
}
```
We want to create a simple nested `<ul><li>` list of all the
to-do items. But, in addition to creating HTML code, we want you to:
- Sort the to-do items by date (from earliest to latest)
- Add an "<b>URGENT</b>" to every `<li>` when the date is only 2 days or fewer from today.

The HTML produced should look like this:


```html
<ul>
    <li>Tom
    <ul><li><b>URGENT</b> Learn Lo-Dash</li>
        <li>Become a Lo-Dash master</li>
        <li>Clean kitchen</li>
    </ul>
    </li>
    <li>Tim
    <ul><li><b>URGENT</b> Contribute to an Open-Source-Project</li>
    </ul>
    </li>
</ul>
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
