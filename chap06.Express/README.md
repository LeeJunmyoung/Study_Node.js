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

### cookie-parser
> 동봉된 쿠키를 해석해 줍니다.
> 해석된 쿠키들은 req.cookies 객체에 들어감. 

```javascript
var cookieParser=require('cookie-parser');
app.use(cookieParser('secret code'));
```

### static
> static 미들웨어는 정적인 파일들을 제공
> 내장되어 있는 미들웨어임.
```javascript
app.use(express.static(path.join(__dirname,'public')));
```

### express-session  
> 세션 관리용 미들웨어.  
> express-generator로는 설치 되지 않으므로 직접 설치해야함.  
> npm i express-session  
> 현재의 세션 아이디는 req.sessionID로 확인가능  
> 세션을 한번에 삭제하려면 req.session.destory()  
```javascript
var session = require('express-session');

app.use(cookieParser('secret code'));
app.use(session({
  resave:false,  //세션이 수정사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정
  saveUninitialized:false, //세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정. 방문자를 추적할때 쓰임
  secret:'secret code', //cookie-parser에 비밀키와 같은 역할
  cookie:{//쿠키 옵션
    httpOnly:true, 
    secure:false
  }
}));
```

