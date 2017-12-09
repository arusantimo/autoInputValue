# autoInputValue
input값에 대한 자동형변환 자동-입력 유틸 라이브러리입니다.
Auto hypen and Auto conversion for input value


## 설치 installation
```
npm i -S auto-hyphen
or
yarn add auto-hyphen
```

## 사용방법 how to use

### In Browser
현재 모던 브라우저에서는 CommonJS 스펙과 ES Module 스펙을 준수한 브라우저가 거의 없다.  
따라서 브라우저에서 다이렉트로 쓰려면 아래와 같이 사용해야한다. (CDN은 지원 예정)

```html
<script src="node_modules/auto-hyphen/dist/index.js"></script>
<script>
let input_value = '19880507';
console.log(autoHyphen.autoHyphenBirth(input_value)); // '1988-05-07'

input_value = '01033339999';
console.log(autoHyphen.autoHyphenPhone(input_value)); // '010-3333-9999';

input_value = '93-05-30';
console.log(autoHyphen.removedNotDigits(input_value)); // '930330';
</script>
```

### In Node.js(CommonJS)
```js
const autoHyphen = require('auto-hyphen');

let input_value = '19880507';
console.log(autoHyphen.autoHyphenBirth(input_value)); // '1988-05-07'

input_value = '01033339999';
console.log(autoHyphen.autoHyphenPhone(input_value)); // '010-3333-9999';

input_value = '93-05-30';
console.log(autoHyphen.removedNotDigits(input_value)); // '930330';
```

### In ES Module
```js
import * as autoHyphen from 'auto-hyphen';

let input_value = '19880507';
console.log(autoHyphen.autoHyphenBirth(input_value)); // '1988-05-07'

input_value = '01033339999';
console.log(autoHyphen.autoHyphenPhone(input_value)); // '010-3333-9999';

input_value = '93-05-30';
console.log(autoHyphen.removedNotDigits(input_value)); // '930330';
```

## 이벤트와 함께사용하기 event value applicate
```js
// input => Pass event values

const transValue = autoHyphen.autoHyphenBirth(event.target.value);
// 1998 => 1998
// 19991 => 1999-1
// 19994 => 1999-04
// 199911 => 1999-11
// 199955 => 1999-05-05
// 1999125 => 1999-12-05
const transValue = autoHyphen.autoHyphenPhone(event.target.value);
// 010333 => 010-333
// 0103334 => 010-3334
// 0104447777 => 010-444-7777
// 01066660000 => 010-6666-0000
```

- 생일 입력시 12월을 넘어간 값은 12로 31일을 넘어간 값은 31로 변경됩니다.
- When the birthday is entered, insert event value exceeding December is 12, and the value exceeding 31 days is changed to 31.