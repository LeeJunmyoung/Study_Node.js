# ES6 기본문법

## const, let
> const 상수, let 변수
> 스코프는 {} 에따름 
> 기존 var 는 for,if,while 에 따른게 아닌 function scope

## 템플릿 문자열
```
기존
var a = 0;
console.log("a 는 " + a);

템플릿 문자열
console.log(`a 는 ${a}`);
```
## 객체리터럴 && 람다식
> 함수에 function 안붙여도 됌.
```
const sayNode=()=>{console.log('node')};
const newObject={
    sayJS(){
        console.log('js');
    },
    sayNode
}
``` 

## 비구조화 할당
> 객체의 배열이나 요소를 쉽게 꺼낼수 잇음
```
var array = ['node.js',{},10,true];
var [node,obj,numb,bool]=array;
```