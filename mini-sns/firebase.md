# firebase 

- 프로젝트 생성
- 앱/웹 모두 지원하나 앱 관련하여 지원하는 부분이 많음
- Hosting 
	- 단순 파일을 이용하여 코딩(서버사이드 사용x)
- Database 
	- Cloud Firestor(상위 버전)
	- Realtime Database
	
## Realtime Database
- 테스트 모드로 생성
- 리전 설정 : asia-northeast1
- project overview -> 웹 플랫폼 추가
- 제공되는 코드는 설정에서 다시 확인 가능
- 1. src 이용 2. npm 저장소 이용	

## 설치
```
yarn add firebase
```

## dotenv
- file load : 서버사이드에서 

## Authentication
- 익명 로그인 
	- uid : 익명사용자의 고유키 hash 형태, 시크릿모드에서는 다른 키
			재방문 시 같은 키 
	- 최소한의 사용자 정보로 활동기록 추적
	- signInAnnoymously()
	- 여행관련 예약사이트에서 많이 사용
	- 최근에는 계정을 생성하지 않고 사이트 이용이 가능. 결제 등의 활동을 위해 계정이 필요할 때 이전의 활동을 추적해 계정을 연결할 때 이용됨
	- 세션 기반일 경우 브라우저 종료 시 동일한 사용자인지 확인이 어려움
	- IP -> 모바일로 이용 시 이동마다 기지국이 바뀌면 추적이 어려움