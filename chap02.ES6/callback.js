///////////////////////////
//call back////////////////
///////////////////////////
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 10);
}
console.log("완료");

//////////////////////////


repeatConsoleLog = function(i, callback) {
  setTimeout(function() {
    console.log(i);
    if (i >= 5) {
      callback();
    } else {
      repeatConsoleLog(i + 1, callback);
    }
  }, 10);
};

// 함수 실행
repeatConsoleLog(0, function() {
  // 함수의 실행이 모두 끝난 뒤에 이곳에 있는 코드가 실행된다.
  console.log("완료");
});
