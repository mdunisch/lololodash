# 시작하기 #
**안녕하세요. Lo-Dash를 사용해봅시다!**
**[Lo-Dash](http://lodash.com/)**란 배열, JSON, JavaScript 객체를 사용할 때 많은
도움이 되는 JavaScript 라이브러리입니다. **Lo-Dash**는 Node.js와 함께 백엔드에서
사용될 뿐만 아니라 프로트엔드 브라우저에서도 사용할 수 있습니다. 혹시
**[underscore.js](http://underscorejs.org/)**라는 이름을 들어본 적이 있나요?
**Lo-Dash**는 **underscore.js**의 포크이고 그냥 더 좋습니다! 이미
**underscore.js**를 안다면, 훌륭합니다. **Lo-Dash**를 사용하실 때 전혀 문제가
없으실 거예요.
* * *
## 해봅시다 ##
**Lo-Dash**에서 아주 자주 사용하는 `where` 함수로 시작해보죠.

```js
_.where(collection, props)
```

`where`는 `props`에 정의된 조건을 사용해 `collection`을 필터링 합니다.
`collection`은 배열, JSON 데이터, JavaScript 객체 등이 될 수 있습니다.

#### 예제 ####
```js
var characters = [
  { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
  { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
];

_.where(characters, { 'age': 36 });

// [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
```
* * *
## 해야할 일 ##
다음 형식으로 사용자를 나타내는 JavaScript 객체의 배열이 있습니다.
```js
[
    { id: 22, username: "martin", active: true},
    { id: 23, username: "max",    active: false},
    { id: 24, username: "linda",  active: false}
]
```
첫 번째 인자로 목록을 받아 *active*인 사용자들(`active === true`)만 반환하는
함수를 작성하세요.

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
