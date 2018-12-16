# Http  
> HTTP 서버와 클라이언트를 사용하려면 반드시 사용해야합니다 require('http').    
> Node.js의 HTTP 인터페이스는 전통적으로 사용하기 어려운 프로토콜의 많은 기능을 지원하도록 설계되었습니다. 인터페이스는 전체 요청이나   응답을 절대 버퍼링하지 않도록주의하십시오. 사용자는 데이터를 스트리밍 할 수 있습니다.    

1. cookie 
> 어떠한 웹사이트를 방문할 경우 그 사이트가 사용하고 있는 서버를통해 인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일을 일컫는다.  
> 요청한 헤더에 직접 넣어주기.  

2. REST API
> REST(Representational State Transfer)는 월드 와이드 웹과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식이다.  
> URI 를 지정하는것을 제시한다. 명사를 사용할것.  
> 큰범위에서 작은 범위로.  GET /학교 GET /학교/{학교 ID}같은??  
> REST 아키텍처를 준수하지 않더라도 흔히들 REST API 라고한다. 과연 맞는걸까? HTTP API라고 구분짓는게 맞는걸까? 잘 모르겠다.   

3. http / http2 / https
> http / http2 평문 프로토콜, https 암호화 프로토콜
> http에 비해 http2 의 효율이 더 좋다. (헤더 압축(허프만 인코딩),요청 우선순위 지정 및 서버 푸시를 지원) 

[HTTP2](https://developers.google.com/web/fundamentals/performance/http2/?hl=ko)
[REF HTTP2](https://www.popit.kr/%EB%82%98%EB%A7%8C-%EB%AA%A8%EB%A5%B4%EA%B3%A0-%EC%9E%88%EB%8D%98-http2/)

4. cluster
> cluster 모듈은 싱글 스레드인 노드가 CPU 코어를 모두 사용 할 수 있게 해주는 모듈입니다.  
> 클러스터에는 마스터 프로세스와 워커 프로세스가 있습니다. 마스터 프로세스는 CPU개수 만큼 워커 프로세스를 만들고,  
> 요청이 들어오면 만들어진 워커 프로세스에 요청을 분배합니다.  
[CLUSTER](https://nodejs.org/api/cluster.html)