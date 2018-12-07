# Module

## REPL
> The repl module exports the repl.REPLServer class. While running, instances of repl.REPLServer will accept individual lines of user input, evaluate those according to a user-defined evaluation function, then output the result. Input and output may be from stdin and stdout, respectively, or may be connected to any Node.js stream.

> REPL서버는 사용자 입력의 개별 라인을 node.js 스트림에 연결하여 input , output 한다.   
[REPL](https://nodejs.org/api/repl.html)  


## 모듈화

1. module.exports
```javascript
const odd = () => '홀수';
module.exports={
    odd,
    ... < variable
}
```

2. exports
```javascript
exports.odd = ()=> "홀수";

```

3. exports와 module.exports 관계
```javascript
var module = {
	exports: {}
};
var exports = module.exports;

return module.exports;
```

4. ES6에서의 모듈  [ESM](https://nodejs.org/api/esm.html)
```javascript
export default variable;

```
