// 서치 창
$(function(){
    $("#search").click(function(){
        $("#searchbox").css({"opacity":"1"});
        return false;
    });
    $(document).click(function(e){
        if(e.target.className =="#searchbox"){return false}
        $("#searchbox").css({"opacity":"0"});
    });
});

// 슬라이드
function bookSlide() {
    $("#bookSlide>div:nth-of-type(1)").stop().animate({ "width": "0px"}, 500, function () {
        $("#bookSlide>div:nth-of-type(1)").insertAfter("#bookSlide>div:last-child");
        $("#bookSlide>div:nth-of-type(1)").stop().animate({ "margin-left": "0" });
        $("#bookSlide>div:first-child .slideText").stop().animate({"opacity":"1"});
        $(this).stop().animate({ "width": "44px"}, 500);
        $("#bookSlide>div:not(:first-child) .slideText").stop().css({"opacity":"0"});
    });
    $("#bookSlide>div:nth-of-type(2)").stop().animate({ "width": "1000px" }, 500);
}
setInterval(bookSlide, 8000);

// 슬라이드버튼
$(function () {
    $("#bookSlide>div:first-child .slideText").stop().animate({"opacity":"1"});
    $("#bookSlide>div:not(:first-child) .slideText").stop().css({"opacity":"0"});
    $("#bSL").click(function () {
        $("#bookSlide>div:last-child").insertBefore("#bookSlide>div:first-child");
        $("#bookSlide>div:first-child").stop().animate({"width":"1000px"},500,function(){
            $("#bookSlide>div:first-child .slideText").stop().animate({"opacity":"1"});
            $("#bookSlide>div:not(:first-child) .slideText").stop().css({"opacity":"0"});
        });
        $("#bookSlide>div:not(:first-child)").stop().animate({"width":"44px"},500);
    });
    $("#bSR").click(function () {
        $("#bookSlide>div:nth-of-type(1)").stop().animate({ "width": "0px" }, 500, function () {
            $("#bookSlide>div:nth-of-type(1)").insertAfter("#bookSlide>div:last-child");
            $("#bookSlide>div:first-child .slideText").stop().animate({"opacity":"1"});
            $(this).stop().animate({ "width": "44px"}, 500);
            $("#bookSlide>div:not(:first-child) .slideText").stop().css({"opacity":"0"});
        });
        $("#bookSlide>div:nth-of-type(2)").stop().animate({ "width": "1000px"}, 500);
    });
});

// btn
$(function () {
    $("#sec4L,#sec5L,#sec6L,#sec7L,#sec9L").css({"opacity":"0"});
    $("#sec4L,#sec5L,#sec6L,#sec7L,#sec9L,#sec4R,#sec5R,#sec6R,#sec7R,#sec9R,#bSR,#bSL").css({"box-shadow":"2px 2px 8px 2px rgba(0,0,0,0.1)"});
    $("#sec4L").click(function () {
        $("#sec4book").stop().animate({ "margin-left": "0px" });
        $("#sec4L").stop().animate({ "opacity": "0" });
        $("#sec4R").stop().animate({ "opacity": "1" });
    });
    $("#sec4R").click(function () {
        $("#sec4book").stop().animate({ "margin-left": "-1105px" });
        $("#sec4R").stop().animate({ "opacity": "0" });
        $("#sec4L").stop().animate({ "opacity": "1" });
    });
    $("#sec5L").click(function () {
        $("#sec5book").stop().animate({ "margin-left": "0px" });
        $("#sec5L").stop().animate({ "opacity": "0" });
        $("#sec5R").stop().animate({ "opacity": "1" });
    });
    $("#sec5R").click(function () {
        $("#sec5book").stop().animate({ "margin-left": "-1100px" });
        $("#sec5R").stop().animate({ "opacity": "0" });
        $("#sec5L").stop().animate({ "opacity": "1" });
    });
    $("#sec6L").click(function () {
        $("#sec6book").stop().animate({ "margin-left": "0px" });
        $("#sec6L").stop().animate({ "opacity": "0" });
        $("#sec6R").stop().animate({ "opacity": "1" });
    });
    $("#sec6R").click(function () {
        $("#sec6book").stop().animate({ "margin-left": "-1105px" });
        $("#sec6R").stop().animate({ "opacity": "0" });
        $("#sec6L").stop().animate({ "opacity": "1" });
    });
    $("#sec7L").click(function () {
        $("#sec7book").stop().animate({ "margin-left": "0px" });
        $("#sec7L").stop().animate({ "opacity": "0" });
        $("#sec7R").stop().animate({ "opacity": "1" });
    });
    $("#sec7R").click(function () {
        $("#sec7book").stop().animate({ "margin-left": "-1100px" });
        $("#sec7R").stop().animate({ "opacity": "0" });
        $("#sec7L").stop().animate({ "opacity": "1" });
    });
    $("#sec9L").click(function () {
        $("#sec9book").stop().animate({ "margin-left": "0px" });
        $("#sec9L").stop().animate({ "opacity": "0" });
        $("#sec9R").stop().animate({ "opacity": "1" });
    });
    $("#sec9R").click(function () {
        $("#sec9book").stop().animate({ "margin-left": "-1105px" });
        $("#sec9R").stop().animate({ "opacity": "0" });
        $("#sec9L").stop().animate({ "opacity": "1" });
    });
});

// 슬라이드
$(function(){
    $("#bookSlide>div").addClass("slidebox");

    var search=["아주 작은 시작","AI 2041","말의 트렌드","빅 도어 프라이즈","낙원1","영화를 빨리감기로 보는","스티븐 킹 중편집","13.67","만일 내가 인생을 다시","인요가 가이드"];
for (var i=0; i<search.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i], size: 1},
        async: false,
        headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
    })
        .done(function (msg) {
            $(".slidebox").eq(i).prepend("<img src="+msg.documents[0].thumbnail+">");
        });
}
});

// sec4, sec6, sec9
$(function(){
        $("#sec5book>div>div").addClass("topbox");
    
        var search=["처음 20시간의","잃어버린 시간을 찾아서 13","서울 카타콤","오늘 하지 않아도 되는 걱정을","혹시 MBTI가","만지고 싶은 기분","12가지의 인생법칙","인스타 브레인","역행자","원씽","백만장자","내가 틀릴수도"];
    for (var i=0; i<search.length; i++){
        
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i], size: 1},
            async: false,
            headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
        })
            .done(function (msg) {
                $(".box").eq(i).append("<img src="+msg.documents[0].thumbnail+">");
                $(".box").eq(i).append("<div class='koPubB14'>"+msg.documents[0].title+"<div class='koPubG12'>"+msg.documents[0].authors.slice(0,2)+"</div>");
            });
    }
    });
$(function(){
        $("#sec5book>div>div").addClass("topbox");
    
        var search=["바람을 사랑하다","기대의 발견","프로이트","시간이 있었으면","MBC 14층","오늘도 별일 없었어요","큇","미국인 사용빈도 다반사","마음가면","머니 스토리","더 바이브","메이드"];
    for (var i=0; i<search.length; i++){
        
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i], size: 1},
            async: false,
            headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
        })
            .done(function (msg) {
                $(".box1").eq(i).append("<img src="+msg.documents[0].thumbnail+">");
                $(".box1").eq(i).append("<h4>" + '<a href="sub_book13.html">' + msg.documents[0].title + "</a>" + "</h4>");
                $(".box1").eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");
                $(".box1").eq(i).append("<div class='koPubR12'>"+"<span class='tenada'>"+"★"+"</span>"+parseInt(Math.random()*10/2+5)+"."+parseInt(Math.random()*10)+"&nbsp;"+"<span class='koPubB12'>"+"("+parseInt(Math.random()*1000)+")"+"</span>"+"</div>");
            });
    }
});
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "운동", size: 12 },
    headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName('box2');
        for (var i = 0; i < boxs.length; i++) {
            $(".box2").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".box2").eq(i).append("<h4>" + '<a href="sub_book13.html">' + msg.documents[i].title + "</a>" + "</h4>");
            $(".box2").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
            $(".box2").eq(i).append("<div class='koPubR12'>"+"<span class='tenada'>"+"★"+"</span>"+parseInt(Math.random()*10/2+5)+"."+parseInt(Math.random()*10)+"&nbsp;"+"<span class='koPubB12'>"+"("+parseInt(Math.random()*1000)+")"+"</span>"+"</div>");
        }
    });

// sec5, sec7
$(function(){
    $("#sec5book>div>div").addClass("topbox");

    var search=["해리포터 마법사의 돌","희망의 끈","사피엔스","만일 내가 인생을","프로젝트 헤일메리","물고기는 존재하지","12가지의 인생법칙","돈의 속성","역행자","자기관리론","거인의 어깨","백만장자 시크릿","불편한 편의점","인간관계론","트렌드 코리아 2023","그릿","허상의 어릿광대","슬램덩크"];
for (var i=0; i<search.length; i++){
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i], size: 1},
        async: false,
        headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
    })
        .done(function (msg) {
            $(".topbox").eq(i).append("<img src="+msg.documents[0].thumbnail+">");
            $(".topbox").eq(i).append("<div class='koPubB14'>"+(i+1)+"</div>");
            $(".topbox").eq(i).append("<div class='koPubB14'>"+msg.documents[0].title+"<div class='koPubG12'>"+msg.documents[0].authors.slice(0,2)+"</div>"+"<div class='koPubR12'>"+"<span class='tenada'>"+"★"+"</span>"+parseInt(Math.random()*10/2+5)+"."+parseInt(Math.random()*10)+"&nbsp;"+"<span class='koPubB12'>"+"("+parseInt(Math.random()*1000)+")"+"</span>"+"</div>"+"</div>");
        });
}
});
$(function(){
    $("#sec7book>div>div").addClass("bestbox");

    var search=["당신도 느리게 나이 들 수","쿼런틴","세계에서 이 사랑이","세이노의 가르침","구의증명","슬램덩크 리소스","백은의 언덕 검은 달","아버지의 해방일지","김미경의 마흔","우리는 모두 죽는다는 것을","생에 감사해","원씽","새벽의 연화","음식중독","이토록 평범한 미래","권력과 안보","미스터 프레지던트","내가 틀릴 수도 있습니다"];
for (var i=0; i<search.length; i++){
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i], size: 1},
        async: false,
        headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
    })
        .done(function (msg) {
            $(".bestbox").eq(i).append("<img src="+msg.documents[0].thumbnail+">");
            $(".bestbox").eq(i).append("<div class='koPubB14'>"+(i+1)+"</div>");
            $(".bestbox").eq(i).append("<div class='koPubB14'>"+msg.documents[0].title+"<div class='koPubG12'>"+msg.documents[0].authors.slice(0,2)+"</div>"+"<div class='koPubR12'>"+"<span class='tenada'>"+"★"+"</span>"+parseInt(Math.random()*10/2+5)+"."+parseInt(Math.random()*10)+"&nbsp;"+"<span class='koPubB12'>"+"("+parseInt(Math.random()*1000)+")"+"</span>"+"</div>"+"</div>");
        });
}
});