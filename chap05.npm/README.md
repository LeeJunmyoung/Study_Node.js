# NPM
>npm (노드 패키지 매니저/Node Package Manager)은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자이다. 명령 줄 클라이언트(npm), 그리고 공개 패키지와 지불 방식의 개인 패키지의 온라인 데이터베이스(npm 레지스트리)로 이루어져 있다. 이 레지스트리는 클라이언트를 통해 접근되며 사용 가능한 패키지들은 npm 웹사이트를 통해 찾아보고 검색할 수 있다. 패키지 관리자와 레지스트리는 npm사에 의해 관리된다.  

## package.json
> 서비스가 필요한 패키지를 고유한 버전을 기록해둠
[NPM-package.json](https://docs.npmjs.com/files/package.json)

## package-lock.json
> 패키지들간의 내부 의존관계를 저장하는 파일

## npm init && npm install  
1. package name : 패키지 이름  
2. version : 패키지의 버전   
3. entry point : 자바스크립트 실행 파일 진입점. (index.js)  
4. test command : 코드를 테스트할때 입력할 명령어를 의미함.  
5. git repository : 코드를 저장해둔 Git 저장소 주소를 의미.  
6. keywords : 키워드는 npm공식 홈페이지 에서 패키지를 쉽게 찾을 수 있게 해준다.  
7. license 해당 패키지의 라이센스  

* 패키지 설치 : npm install 패키지명  
* --save 옵션은 npm@5 부터 기본값으로 설정 되어 있음.  
* --save-dev ,-D 옵션은 개발용 패키지에 만 사용(npm install --save-dev nodemon)  

## global
> npm 에는 전역 설치라는 옵션이 있다. 전역 설치한 패키지는 콘솔의 커맨드로 사용할 수 있다.

* --global,-g 옵션 (ex. npm install --global rimraf)
* npx 명령어를 통해 해당 로컬에서 콘솔 커맨드를 사용할수 있다. 
    1. npm install --save-dev rimraf
    2. npx rimraf 삭제할거
