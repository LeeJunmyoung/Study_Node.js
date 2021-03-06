# NoSQL(MongoDB)
> 몽고 디비의 특징 중 하나는 자바스크립트 문법을 사용한다는 점.   

SQL(Mysql) | NOSQL(Mongo)
-----|------
규칙에 맞는 데이터 입력 | 자유로운 데이터 입력
테이블 간 Join지원 | 컬렉션 간 Join미지원
트랜잭션 지원 | 트랜잭션 미지원(지원예정)
안정선, 일관성 | 확장성, 가용성
용어(테이블, 로우, 컬럼) | 용어(컬렉션, 다큐먼트, 필드)

## Mongodb 접속
> cd C:\Program Files\MongoDB\Server\4.0\bin  
> mongod

## DB생성
> use <db명>
> 현재 db명 확인 : db
> db 리스트 확인 : dbs

## 컬렉션 생성  
> db.createCollection('컬렉션 명')  
> 컬렉션 확인 : show collections  

## Create(생성)
> db.collection.save(json형태)  
> db.user.save({ _id : 100, item : "juice" }  

## Find(조회)
> db.collection.find()

```
> db.users.find({},{_id:0,name:1,married:1})
# 전체에서 id는 가져오지말고 name과 married값만 전체 조회하는 쿼리
```

```
> db.users.find({},{_id:0,name:1,married:1}).sort({age:-1}).limit(1).skip(1)
# sort -1은 내림차순 1은 오름차순, limit 검색할 다큐먼트 개수, skip 건너뛸 개수
```

## Update(수정)
> db.collection.update({검색},{  $set: {바꿀 필드 : 바꿀 값}  })

## Delete(삭제)
> db.collection.remove({삭제할 필드 : 값})

## mongoose
> 흔히 불르는 ORM 이 아닌 ODM(Object Document Mapping)

[mongoose](https://mongoosejs.com/)    
```
npm i mongoose 
```

1. mongodb 연결하기
```javascript
// With object options
var mongoose = require('mongoose');


const uri = 'mongodb://localhost:27017/test?poolSize=4';
mongoose.createConnection(uri);
mongoose.createConnection(uri, { poolSize: 4 });
//////////////////////////////////////////////////
const mongoose = require('mongoose');

module.exports = ()=>{
    const connect = () =>{
        const uri = 'mongodb://localhost:27017/test?poolSize=4';
        //개발 환경이 아닐때 몽구스가 생성하는 쿼리 내용을 콘솔을 통해 확인
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug',true);
        }
        //몽구스와 몽고디비를 연결하는 부분
        mongoose.connect(uri,{
            dbName:'nodejs'
        },(error)=>{
            if(error){
                console.log('몽고디비 연결에러', error);
            }else{
                console.log('연결 성공');
            }
        });
    }
    connect();
    //몽구스 커넥션에 이벤트 리스너를 달아두어, 에러발생시 에러내용을 기록하고, 연결종료시 재연결을 시도
    mongoose.connection.on('error',(error)=>{
        console.log('몽고디비 연결 에러',error);
    });
    mongoose.connection.on('disconnected',()=>{
        console.log('몽고디비 연결이 끊겼습니다');
        connect();
    });
}
```
