# 정렬해주세요 #
JavaScript에서 배열, JSON 데이터를 정렬하는 것은 매우 고통스럽습니다.
**Lo-Dash**로 이 고통을 덜을 수 있습니다.
* * *
## 해결 방법 ##
`sortBy` 함수를 소개합니다.
```js
_.sortBy(collection, [callback=identity])
```
`sortBy` 함수는 각 반복마다 `callback`을(배열, 함수, 객체, 문자열) 사용해
`collection` 객체(원시 형이나 객체, 양쪽 다의 배열)를 정렬합니다.

#### 예제 ####
```js
_.sortBy([1, 2, 3], function(num) { return Math.sin(num); });

// → [3, 1, 2]
```
`callback`이 함수라면, `callback(value, index|key, collection)`으로 호출합니다.
대부분의 **Lo-Dash** 함수처럼, `sortBy`도 "*.map*" 단축 콜백을 사용할 수
있습니다. (http://lodash.com/docs#map)
```js
var characters = [
  { 'name': 'barney',  'age': 36 },
  { 'name': 'fred',    'age': 40 },
  { 'name': 'barney',  'age': 26 },
  { 'name': 'fred',    'age': 30 }
];

_.sortBy(characters, 'age');

/*
[
    { name: 'barney', age: 26 },
    { name: 'fred',   age: 30 },
    { name: 'barney', age: 36 },
    { name: 'fred',   age: 40 }
]
*/
```
**주의**: `sortBy`는 항상 오름차순(작은 것에서 큰 것)으로만 정렬합니다.
* * *
## 해야할 일 ##
다음과 같은 어제 판 품목의 배열을 가지고 있습니다.
```js
[{ article: 41,   quantity: 24 },
 { article: 2323, quantity: 2  },
 { article: 655,  quantity: 23 }]
```
이 품목을 `quantity`을 기준으로 *큰 값*에서 *작은 값*으로 정렬하는 함수를 적으세요.
> #### 힌트 ####
> `sortBy`가 작은 값에서 큰 값으로만 정렬하기 때문에, 콜백 함수를 사용할 필요가 있을 것입니다.

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
