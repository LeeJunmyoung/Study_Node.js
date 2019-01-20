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
