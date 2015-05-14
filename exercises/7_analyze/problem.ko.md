# 분석 #
이제 조금 깊게 들어가 봅시다...
* * *
## 밑으로 밑으로 ##
이 미션을 위해서는 `filter` 함수를 알 필요가 있습니다.
```js
_.filter(collection, [callback=identity])
```
`filter`는 컬렉션의 요소를 반복해 `callback`이 true를 반환하는 모든 요소의
배열을 반환합니다. `filter`는 "*.pluck*" 콜백 단축을 사용할 수도 있습니다.

#### 예제 ####
```js
_.filter(
    [1, 2, 3, 4, 5, 6],
    function(num) {
        return num % 2 == 0;
    }
);

// [2, 4, 6]

var characters = [
  { 'name': 'barney', 'age': 36, 'blocked': false },
  { 'name': 'fred',   'age': 40, 'blocked': true }
];
_.filter(characters, 'blocked');

// [{ 'name': 'fred', 'age': 40, 'blocked': true }]
```
첫 번째 연습 문제의 `where` 함수를 기억하시나요? `filter`는 필터링을 위한 조건
로직이 *포함되고*, `where`는 객체가 조건을 *나타내는* 것을 제외하면 꽤나
비슷합니다.
* * *
## 해야할 일 ##
프리렌서의 수입을 나타내는 객체의 배열이 있습니다.
```js
[ { name: "mike",  income: 2563 },
  { name: "kim",   income: 1587 },
  { name: "liz",   income: 3541 },
  { name: "tom",   income: 2475 },
  { name: "bello", income: 987  },
  { name: "frank", income: 2975 } ]
```
이런 함수를 작성하세요.
1. 모든 프리렌서의 평균 수입을 계산
2. 프리렌서를 두 그룹에 넣기

**underperform** 평균과 같거나 작은 수입
**overperform** 평균보다 높은 수입

3. 두 그룹 안의 프리렌서를 오름차순으로 정렬(적은 수입이 먼저)
4. 객체를 다음 형식으로 반환

```js
{
    "average": 167,
    "underperform": [
        { "name": "foobar", "income": 99 },
        { "name": "dummy", "income": 100 }
    ],
    "overperform": [
        { "name": "foo", "income": 302 }
    ]
}
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
* * *
## 시작하기 전에 ##
**lodash**가 설치되었는지 확인하세요!
```
npm install lodash
```
화이팅!
