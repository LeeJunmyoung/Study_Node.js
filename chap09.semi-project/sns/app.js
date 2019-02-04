const express = require('express');
const cookieParser = require('cookie-parser'); 
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const pageRoute = require('./routes/page');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port',process.env.PORT||8001);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('nodebirdsecret'));
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:'nodebirdsecret',
  cookie:{
    httpOnly:true,
    secure:false
  }
}));
app.use(flash());

app.use('/', pageRouter);

// catch 404 and forward to error handler
app.use((req,res,next)=>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err,req,res)=>{
  res.locals.message = err.message;
  res.locals.error =req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.sender('error');
});

app.listen(app.get('port'),()=>{
  console.log(app.get('port'),'번 포트에서 대기 중');
});