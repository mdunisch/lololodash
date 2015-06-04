# 댓글 세기 #
**Lo-Dash**의 모든 함수는 매우 유용하지만, 제가 제일 좋아하는 것 중에 하나인
`groupBy` 함수를 소개하도록 하겠습니다.
* * *
## 이리 모이세요 ##
```js
_.groupBy(collection, [callback=identity])
```
컬렉션 객체의 각 요소에 `callback`을 실행해 만든 키로 조합된 객체를 만듭니다.
각 키에 부합하는 값은 키가 생성되는 요소의 배열이 됩니다.

#### 예제 ####
```js
_.groupBy(
    [4.2, 6.1, 6.4],
    function(num)
    {
        return Math.floor(num);
    }
);

// { '4': [4.2], '6': [6.1, 6.4] }

// ".pluck" callback 단축을 사용...
_.groupBy(
    [
        {name: 'mike', age: 23},
        {name: 'mike', age: 41},
        {name: 'tom',  age: 19}
    ],
    'name'
);

/*
{
    'mike': [
        {name: 'mike', age: 23},
        {name: 'mike', age: 41}
    ],
    'tom': [
        {name: 'tom', age: 19}
    ]
}
*/
```
`size` 헬퍼 함수도 자주 사용합니다.
```js
 _.size(collection)
 ```
`size`는 배열에는 `array.length`를 반환하고, 배열 같은 객체에는 가지고 있는
나열할 수 있는 속성의 수를 반환해 `collection`의 크기를 얻을 수 있습니다.

#### 예제 ####
```js
_.size([1, 2]);
// 2

_.size({ 'one': 1, 'two': 2, 'three': 3 });
// 3

_.size('pebbles');
// 7
```
* * *
## 해야할 일 ##
웹사이트에 달린 댓글의 배열이 있습니다.
```js
[
    { username: "tim", comment: "you are doing a great job!" },
    { username: "tim", comment: "when you have new workshoppers?" },
    { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
    { username: "max", comment: "where have you been on friday? we missed you!" },
    { username: "max", comment: "You don't answer anymore - why?" },
    { username: "cat_lover", comment: "MORE cats!!!" },
    { username: "max", comment: "i really love your site" }
]
```
같은 사용자를 반복하지 않고 가장 댓글을 많이 단 사용자를 알고 싶습니다.
1. `username`으로 댓글을 세기
2. 반환된 배열을 각 사용자의 총 댓글 수로 정렬하기

```js
[ { username: "foo",    comment_count: 9 },
  { username: "foobar", comment_count: 2 } ]
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
