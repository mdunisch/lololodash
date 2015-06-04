# 사슬 편지 #
가끔, 한 유틸리티 메소드로 충분하지 않을 때도 있습니다. 메소드를 연결하면 일은 그대로 하면서 코드를 줄일 수 있습니다.
* * *
## 어떻게요? ##
`_.chain` 함수가 필요할 때입니다.
```js
_.chain(value)
```
`chain`은 여러 **Lo-Dash** 메소드를 명시적으로 컬렉션(배열, 객체)으로 연결해 모든 연산을 한 다음 값을 반환합니다.

#### 예제 ####
```js
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _.chain(users)
  .sortBy('age')
  .map(function(chr) {
    return chr.user + ' is ' + chr.age;
  })
  .first()
  .value();

// → 'pebbles is 1'
```

* * *
## 해야할 일 ##
수정해야 할 단어의 목록이 있습니다.
```js
['Test', 'Hello', 'World', 'Node', 'JavaScript']
```
각 단어에 **Chained**를 붙이도록 수정하고, 대문자로 변환한 다음, 알파벳 순으로 정렬하고 싶습니다. 결과는 이렇게 나와야 합니다.
```js
['HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED']
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
