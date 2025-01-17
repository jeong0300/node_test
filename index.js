const express = require("express"); // express 모듈 셋팅
const ejs = require("ejs"); // 페이지 로딩을 위해 필수
const app = express();

// view 엔진을 ejs를 쓰겠다는 설정
app.set("view engine", "ejs");

app.use(express.static("public"));

// 페이지 로딩 함수
app.get("/", function (req, res){
    //console.log(res);
    res.render("test", {}); // view 폴더 밑에 있는 파일을 참조함
});

app.get("/test", function (req, res){
    //console.log(res);
    res.render("test2", {}); // view 폴더 밑에 있는 파일을 참조함
});

app.get("/main", function (req, res){
    res.render("main", {});
});

app.get("/next", function (req, res){
    res.render("next", {});
});

app.get("/alert", function (req, res){
    res.render("alert", {});
});

app.get("/num", function (req, res){
    res.render("num", {});
});

// 서버 띄울 대 포트 정보 셋팅 및 처음 실행 시 필요한 기능 수행 가능
app.listen(3000, function(){
    console.log("server running");
});