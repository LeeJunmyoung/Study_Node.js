# Module

## REPL
> The repl module exports the repl.REPLServer class. While running, instances of repl.REPLServer will accept individual lines of user input, evaluate those according to a user-defined evaluation function, then output the result. Input and output may be from stdin and stdout, respectively, or may be connected to any Node.js stream.

> REPL서버는 사용자 입력의 개별 라인을 node.js 스트림에 연결하여 input , output 한다.   
[REPL](https://nodejs.org/api/repl.html)  


## 모듈화

1. module.exports
```
const odd = () => '홀수';
module.exports={
    odd,
    ... < variable
}
```

2. exports
```
exports.odd = ()=> "홀수";

```

3. exports와 module.exports 관계
```
var module = {
	exports: {}
};
var exports = module.exports;

return module.exports;
```
* module.exports 에는 어떤값을 대입해도 되지만, exports에는 반드시 객체처럼 속성명과 속성값을 대입해야 합니다.

4. ES6에서의 모듈
```
export default variable;

```
* [ESM](https://nodejs.org/api/esm.html)

## URL [URL](https://nodejs.org/api/url.html)

1. searchParams
> URLSearchParams인터페이스와 querystring모듈은 비슷한 목적을 가지고 있지만 querystring구분 문자 ( &및 =)를 사용자 정의 할 수 있으므로 모듈 의 목적 이 더 일반적 입니다. 반면에이 API는 URL 쿼리 문자열 용으로 설계되었습니다

```
get -> 가지고 있는값
has -> 가지고 있는지 확인 (true/false)
set(key,value) -> 값 세팅
toString -> 문자열로
```

2. querystring
> url의 쿼리 부분을 자바스크립트 객체로 분리한다.

## 파일 시스템 접근 [fs](https://nodejs.org/api/fs.html)

1. 파일 시스템 입출력
> 비동기 - 논블로킹에 유의하자.

