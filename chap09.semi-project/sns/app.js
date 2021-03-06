const express = require('express');
const cookieParser = require('cookie-parser'); 
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport'); // npm i passport passport-local passport-kakao bcrypt
require('dotenv').config();

const pageRoute = require('./routes/page');
const { sequelize } = require('./models');
const passportConfig = require('./passport')

const app = express();
sequelize.sync();
passportConfig(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port',process.env.PORT||8001);
console.log(process.env.COOKIE_SECRET);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:process.env.COOKIE_SECRET,
  cookie:{
    httpOnly:true,
    secure:false
  }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', pageRoute);

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
