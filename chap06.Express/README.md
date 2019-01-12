# Express

## 설치
> npm i -g express-generator  

## 프로젝트 생성
> express <프로젝트 이름> --view=<pug,ejs>
> --view 옵션 템플릿 엔진 선택
> 프로젝트에 들어간 후 npm i <- 필요 모듈을 다운 받음

## Express 구조
1. app.js   : 서버역할 js
2. bin/www  : 서버를 실행하는 스크립트
3. public/  : 이미지, 자바스크립트, css 등 정적인 파일 넣는 집합
4. route/   : 주소별 라우터를 모아둔 곳 controller 
5. views/   : 템플릿 파일을 모아둔 곳 view
6. modles/  : 없지만 보통 db 데이터를 모아두는 폴더로 명시

## Express middleware
> app.js WAS 구동에 관한 내용이 담겨있다.  

```javascript
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); 
//위 내용은 모듈을 불러오는 부분


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// express.json , express.urlencoded , cookieParser express.static은
// 내부적으로 next()를 호출하므로 다음 미들웨어로 넘어갈 수 있다.
// next() 는 미들웨어 흐름을 제어하는 핵심적인 함수이다.

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```
1. 요청 
2. logger(morgan)    next()
3. json, urlencoded  next() 
4. cookieParser      next()
5. static            next()
6. router            next()
7. 404처리 미들웨어   next()
8. 에러핸들러         next()
9. 응답


## 미들웨어

### morgan
> GET / 200 51.267 ms -1539 같은 로그는 morgan  
> 개발시 short/dev 배포시 common이나 combined많이 사용.
```javascript
var logger.require('morgan');

app.use(logger('dev'));
```

### bodyparser
> 요청의 본문을 해석해주는 미들웨어.  
> req.body 에 본문을 해석해줌  
> 단, multipart/form-data는 다른 모듈을 사용해야함.  

```javascript
var bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
```

