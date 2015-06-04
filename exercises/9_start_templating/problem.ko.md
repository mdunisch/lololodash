# 템플릿 시작하기 #
아까 연습 문제에서 이야기한 **유틸리티 함수**를 기억하시나요? 이제 다루어
보겠습니다.
템플릿을 약간 작성해봅시다!
* * *
## 길 안내 ##
이 미션을 위해, `template` 함수를 보여 드리겠습니다.
Lo-Dash로 \_.template()을 사용해 간단하고 강력한 마이크로 템플릿을 써보세요.

```js
_.template(text)(data)
```
`template`은 `text`-값을 템플릿으로 사용해 `data`가 삽입된 문자열을 반환합니다.
템플릿에서 변수를 출력하려면 `<%= VARNAME %>`를 사용하면 됩니다.

#### 예제 ####
```js
_.template('<b><%= value %></b>')({ value: 'attention' });

// '<b>attention</b>'

```
* * *
## 해야할 일 ##
먼저, template() 함수를 이용해 사용할 간단한 값을 삽입하세요.

```js
{ name: "Foo",
  login: [ 1407574431, 140753421 ]
}
```
이름과 사용자의 로그인 횟수(모든 타임스탬프는 로그인을 나타냅니다.)로 이루어진
간단한 문자열 인삿말을 표시하고 싶습니다. 함수는 이런 문자열을 반환해야 합니다.

```
Hello Foo (logins: 2)
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
