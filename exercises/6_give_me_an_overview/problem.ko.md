# 요약해 주세요 #
객체의 커다란 집합의 합을 구하기 위해 많은 시간을 사용하셨나요?
**Lo-Dash**에는 그걸 하기 위한 함수가 있습니다.
* * *
## 길 안내 ##
이 미션을 위해, `reduce` 함수를 소개하겠습니다.
```js
_.reduce(collection, [callback=identity], [accumulator])
```
`reduce`는 `collection`에 수행되어, 매번 `callback`을 호출하고 각 호출이
제공하는 `accumulator`를 가져옵니다. 각 반복에서, `callback`은
`callback(accumulator, value, index|key, collection)`으로 불려집니다.(드디어,
다른 콜백이네요!)

- `accumulator`는 반복해서 집계를 기록하는 변수입니다.
- `value`는 현재 아이템의 값입니다.
- `key`는 객체의 현재 아이템의 키입니다.

#### 예제 ####
```js
_.reduce(
    [1, 2, 3],
    function(sum, num) {
        return sum + num;
    }
);

// 6

_.reduce(
    { 'a': 1, 'b': 2, 'c': 3 },
    function(result, num, key) {
        result[key] = num * 3;
        return result;
    },
    {}
);

// { 'a': 3, 'b': 6, 'c': 9 }
```
* * *
## 해야할 일 ##
상점의 주문을 기록한 배열이 있습니다.
```js
[ { article: 1, quantity: 4 },
  { article: 2, quantity: 2 },
  { article: 1, quantity: 5 } ]
```
예제 데이터를 보시다시피, "1"이 두 번 주문되었습니다. 각 품목의 수량의 합계가
알고 싶습니다.

이런 함수를 작성하세요.
1. 각 품목의 주문의 함계를 계산
2. 결과 배열을 내림차순으로 정렬(높은 수가 제일 위)

```js
[ { article: 1, total_orders: 9 },
  { article: 2, total_orders: 2 } ]
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
