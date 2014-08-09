# To-do Template #
If you finished the last exercise you would possibly think "template?
That's only another type for string-merge!". But the `template` function
in Lo-Dash is very powerful.

* * *
## Going deep into template() ##
`template()` is much more. You can add any kind of javascript-code by
escaping it with <% %> If you familiar with PHP - <% %> is almost
the same as <? ?>

#### Example ####
```js
var mytemplate = '<% _.forEach(data, function(item){ %>' +
    '<li><%= item %></li>' +
'<% }); %>';
_.template(mytemplate, {data: [1, 2, 3]});

/*
<li>1</li>
<li>2</li>
<li>3</li>
*/
```
So you can write templates without learning a template-syntax only use
Javascript - isn't that awesome?


As a third parameter `template()` accepts a options-object. One of
the options I really like and want to show you is `option.imports`.
With `options.imports` you can define an object to import into the
template as local variables.

#### Example ####
```js
var ucfirst = function (str) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
};

_.template('Hello <%= ucfirst(foo) %>', {foo: "mike"}, { 'imports': { 'ucfirst': ucfirst } });
// Hello Mike

```

Again - awesome, or?
template() have many more options, you can read more about that on
[Lo-Dash docs](http://lodash.com/docs#template).


* * *
## Your Mission ##
We have a JSON of different To-do's:

```js
{ "Tom": [
    {
      "todo": "Clean kitchen",
      "date": "2014-08-19T12:13:20.207Z"
    },
    {
      "todo": "Lean Lo-Dash",
      "date": "2014-08-10T12:13:20.210Z"
    },
    {
      "todo": "Become a Lo-Dash master",
      "date": "2014-08-12T12:13:20.210Z"
    }
  ],
  "Tim": [
    {
      "todo": "Contibute to an Open-Sorce-Project",
      "date": "2014-08-11T12:13:20.210Z"
    }
  ]
}
```
We want to create a simple nested `<ul><li>`-List of all the To-do-items.
But beside of creating HTML-Code we want you to do:
- Sort the To-do-items by date (from smallest to biggest)
- Add a "<b>URGENT</b> " to every `<li>` when the date is only 2 days or less from today.

Your HTML you give us back should look like this:


```html
<ul>
    <li>Tom
    <ul><li><b>URGENT</b> Lean Lo-Dash</li>
        <li>Become a Lo-Dash master</li>
        <li>Clean kitchen</li>
    </ul>
    </li>
    <li>Tim
    <ul><li><b>URGENT</b> Contibute to an Open-Sorce-Project</li>
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
