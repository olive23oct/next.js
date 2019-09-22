# server side

- Express.js, koa.js, Server.js ...
- 어떤 종류든 Next.js에서 사용가능

## Express.js
- ES6 기준으로 만들어진 웹 프레임워크

## koa.js
- Express.js에서 분리
- Express와 유사
- 쉽고 간결하게 작성 가능
- koa-router

- koaBody
    - 분기처리 간략하게

## nodemon

```bash
# 설치
yarn add nodemon
```
```js
// package.json 에 script 설정

{
  "scripts": {
    "dev": "nodemon server.js --exec"
  }
}
```