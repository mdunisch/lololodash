# Everyone Is Min #
배열을 반복하기 지겨우신가요? **Lo-Dash**는 이런 일에 도움이 되는 많은 헬퍼
함수를 제공합니다.
* * *
## 어떤 거요? ##
예를 들어, `every`와 `some` 함수가 있습니다.
```js
_.every(collection, [callback=identity])
_.some(collection, [callback=identity])
```
`every`와 `some`은 각각 주어진 `callback`의 결과가 *모든* 요소가 true인지,
*적어도 하나*의 요소가 true인지 확인합니다. `some` 함수는 반복을 전부 수행하지
않고 넘겨진 값을 찾는 즉시 반환합니다. 이 `callback`은 여태까지 보았던 다른
콜백과 같은 사용법을 가지고 있습니다.

#### 예제 ####
```js
_.every([true, false, true], true);

// false

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred',   'age': 40 }
];

// ".pluck" 콜백 단축을 사용...
_.every(characters, 'age');

// true
```

* * *
## 해야할 일 ##
여기 다른 유럽 도시의 일 평균 기온의 목록이 있습니다.
```js
{ Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
  Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
  Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
  Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
  Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] }
```
이 도시들을 "warm", "hot" 두개의 그룹으로 나누어 정렬하고 싶습니다. "warm"에
있는 도시는 19도 보다 높은 기온이 적어도 하루는 있어야 합니다. "hot"에 있는
도시는 매일 19도 이상의 기온이어야 합니다. 결과는 이런 형식이어야 합니다.
```js
{  hot: [ "Hottown" ],
  warm: [ "Town1", "Town2", "Town3" ] }
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
