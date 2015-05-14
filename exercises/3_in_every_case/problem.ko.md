# 모든 경우 #
JavaScript(새 브라우저나 **nodejs**)에서 객체나 배열에 대한
**[ECMAScript5](http://www.ecma-international.org/ecma-262/5.1/)** 함수가
있습니다.(예를 들어: `Array.prototype.forEach`나 `Object.keys`)
**Lo-Dash**의 모든 함수는 다음 카테고리 중 하나에 들어갑니다.

- 배열 함수: 배열에 유용
- 객체 함수: 객체나 JSON 데이터에 유용
- 컬렉션 함수: 다양한 형의 데이터 시퀀스에 유용
- 유틸리티 함수: 나중에 설명

많은 ES5 함수는 배열이나 객체를 위한 것이지만, 양쪽에 다 사용할 수 없습니다.
**Lo-Dash** 함수는 할 수 있죠!
* * *
## 그래서요? ##
이번 과제를 위해 *컬렉션* 함수 중 하나인 `forEach` 함수를 소개하겠습니다. 배열에
대한 `forEach`는 아마 아시겠지만, 객체에 대해서는 어떨까요?
```js
_.forEach(collection, [callback=identity])
```
`sortBy`와는 다르게, `callback`은 반드시 함수여야 합니다. `sortBy`처럼,
`callback(value, index|key, collection)`으로 호출됩니다. 이 함수는 *컬렉션*의
(배열이나 hashtable 객체) 요소를 반복해 각 요소마다 `callback`을 실행합니다.
이 콜백은 명시적으로 `false`를 반환함으로써 이터레이션을 빨리 끝낼 수 있습니다.

#### 예제 ####
```js
_.forEach(
    { 'foo': { 'int': 1 }, 'bar': { 'int': 5 } },
    function(item) {
        console.log(item.int);
    }
);

// 1
// 5
```
* * *
## 해야할 일 ##
유럽의 도시에 인구가 백만 단위로 들어있는 hashtable이나 연관 배열을 받는 함수를 만드세요.
```js
{ Hamburg:    { population: 1.698 },
  Strasbourg: { population: 0.272 },
  Rome:       { population: 2.753 },
  Dublin:     { population: 0.528 } }
```
모든 도시에 도시의 인구에 따른 새 `size` 속성을 추가해야 합니다.
```js
{ City1: {population: 1.58, size: 'big'  },
  City2: {population: 0.58, size: 'med'  },
  City3: {population: 0.28, size: 'small'} }
```
**주의**: 목록은 배열이기도 하므로, 컬렉션 함수를 사용해야 합니다.

밑의 가이드라인에 따르세요.
- 인구가 백만이 넘는 도시는 모두 "big"입니다.
- 인구가 50만에서 백만 사이인 도시는 모두 "med"입니다.
- 인구가 50만보다 적은 도시는 모두 "small"입니다.

> #### 힌트 ####
> 어디에서 시작할지 모르시겠나요? 주어진 데이터를 반복하는 데 `forEach`를
> 사용하고 크기 변수를 추가하는 데 `if-elseif-else` 조건문을 사용하세요.

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
