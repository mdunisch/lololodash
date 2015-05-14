# To-do 템플릿 #
마지막 연습 문제를 풀었다면, 아마 "템플릿? 그냥 문자열 머지잖아!"라고 생각할 수
있습니다. 하지만 Lo-Dash의 `template` 함수는 매우 강력합니다.

* * *
## template() 깊게 살펴보기 ##
`template()`은 훨씬 할 수 있는 일이 많습니다. 어떤 종류의 JavaScript 코드도
`<% %>`로 감싸서 넣을 수 있습니다. PHP에 익숙하다면, `<% %>`는 `<? ?>`와 거의
같습니다.

#### 예제 ####
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
템플릿 구문을 배울 필요없이 템플릿을 작성할 수 있습니다. 그냥 JavaScript를
쓰면 되니까요. 멋지지 않나요?


두 번째 매개변수로, `template()`은 옵션 객체를 받을 수 있습니다. 내가 정말
좋아하는 옵션 중에 하나로 `option.imports`가 있습니다. `option.imports`를
사용하면, 템플릿 안에서 지역 변수로 가져올 수 있도록 값을 설명하는 객체를 정의할
수 있습니다.

#### 예제 ####
```js
var ucfirst = function (str) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
};

_.template('Hello <%= ucfirst(foo) %>',
    { 'imports': { 'ucfirst': ucfirst } })({foo: "mike"});
// Hello Mike
```

다시 한 번 말하지만, 멋지지 않나요?
template()에는 많은 옵션이 있습니다. 더 자세한내용을 
[Lo-Dash 문서](http://lodash.com/docs#template)를 읽으세요.


* * *
## 해야할 일 ##
다른 to-do의 JSON이 있습니다.

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
모든 to-do 아이템을 가지는 간단한 중첩된 `<ul><li>` 목록을 만들고 싶습니다.
하지만 HTML 코드를 만드는 김에, 이런 것도 하고 싶습니다.
- to-do 아이템을 날짜로 정렬(빠른 것에서 느린 것 순으로)
- 날짜가 오늘을 기준으로 2일 이내의 모든 `<li>`에 "<b>URGENT</b>" 추가

만들어진 HTML은 이렇게 보여야 합니다.


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

#### 템플릿 ####
모든 해답은 다음 템플릿을 사용합니다.
```js
// Lo-Dash 라이브러리 불러오기
var _ = require("lodash");

var worker = function(/* arguments */) {
    // 뭔가 해서 결과를 반환하기
};

// worker 함수를 nodejs 모듈로 내보내기
module.exports = worker;
```
**lololodash**가 다른 인자로 함수를 호출해 테스트할 것입니다.
