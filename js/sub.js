$(function () {
    $.get("./text/text1.txt", function (data) {
      $("#textBox1").html(data);
    });
    $.get("./text/text2.txt", function (data) {
        $("#textBox2").html(data);
    });
    $.get("./text/text3.txt", function (data) {
        $("#textBox3").html(data);
    });
    $.get("./text/text4.txt", function (data) {
        $("#textBox4").html(data);
    });
});

$(function(){
    var search=["프로젝트 헤일메리"];
for (var i=0; i<search.length; i++){
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i], size: 1},
        async: false,
        headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
    })
        .done(function (msg) {
            $("#sub3Img").eq(i).prepend("<img src="+msg.documents[0].thumbnail+">");
        });
}
});

$(function(){
    $("#sub5Down").click(function(){
        $("#sub5>.wrap,#sub5").css({"height":"auto"});
        $(this).css({"opacity":"0"});
        $("#sub5Up").css({"opacity":"1"});
    });
    $("#sub5Up").click(function(){
        $("#sub5").css({"height":"265px"});
        $("#sub5>.wrap").css({"height":"215px"});
        $(this).css({"opacity":"0"});
        $("#sub5Down").css({"opacity":"1"});
    });
    $("#sub6Down").click(function(){
        $("#sub6>.wrap,#sub6").css({"height":"auto"});
        $(this).css({"opacity":"0"});
        $("#sub6Up").css({"opacity":"1"});
    });
    $("#sub6Up").click(function(){
        $("#sub6").css({"height":"265px"});
        $("#sub6>.wrap").css({"height":"215px"});
        $(this).css({"opacity":"0"});
        $("#sub6Down").css({"opacity":"1"});
    });
    $("#sub9Down").click(function(){
        $("#sub9>.wrap,#sub9").css({"height":"auto"});
        $(this).css({"opacity":"0"});
        $("#sub9Up").css({"opacity":"1"});
    });
    $("#sub9Up").click(function(){
        $("#sub9").css({"height":"265px"});
        $("#sub9>.wrap").css({"height":"215px"});
        $(this).css({"opacity":"0"});
        $("#sub9Down").css({"opacity":"1"});
    });
    $("#sub10Down").click(function(){
        $("#sub10>.wrap,#sub10").css({"height":"auto"});
        $(this).css({"opacity":"0"});
        $("#sub10Up").css({"opacity":"1"});
    });
    $("#sub10Up").click(function(){
        $("#sub10").css({"height":"265px"});
        $("#sub10>.wrap").css({"height":"215px"});
        $(this).css({"opacity":"0"});
        $("#sub10Down").css({"opacity":"1"});
    });
});

$(function(){
    $("#sec5book>div>div").addClass("topbox");

    var search=["헤일메리","마션 스페셜","아르테미스 스페셜","체셔 크로싱"];
for (var i=0; i<search.length; i++){
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i], size: 1},
        async: false,
        headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
    })
        .done(function (msg) {
            $(".sellbox2").eq(i).append("<img src="+msg.documents[0].thumbnail+">");
            $(".sellbox2").eq(i).append("<h4 class='koPubB14'>" + '<a href="sub_book13.html">' + msg.documents[0].title + "</a>" + "</h4>");
            $(".sellbox2").eq(i).append("<div class='koPubR12'>"+"★"+parseInt(Math.random()*10/2+5)+"."+parseInt(Math.random()*10)+"&nbsp;"+"<span class='koPubB12'>"+"&nbsp;"+parseInt(Math.random()*1000)+"명"+"</span>"+"</div>");
        });
}
});
$(function(){
    $("#sec5book>div>div").addClass("topbox");

    var search=["마션 스페셜","아르테미스 스페셜"];
for (var i=0; i<search.length; i++){
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i], size: 1},
        async: false,
        headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
    })
        .done(function (msg) {
            $(".sellbox1").eq(i).append("<img src="+msg.documents[0].thumbnail+">");
            $(".sellbox1").eq(i).append("<h4 class='koPubB14'>" + '<a href="sub_book13.html">' + msg.documents[0].title + "</a>" + "</h4>");
            $(".sellbox1").eq(i).append("<h6 class='koPubB11'>" + msg.documents[0].authors + "</h6>");
        });
}
});
$(function(){
    $("#sec5book>div>div").addClass("topbox");

    var search=["물고기는 존재하지 않는다","불편한 편의점","팩트풀니스","지구의 끝은 온실","미드나잇 라이브러리","우리가 빛의 속도로","별의 계승자","죽여 마땅한 사람들","꿈 백화점 2","완전한 행복","지구끝의 온실","천 개의 파랑","물고기는 존재하지 않는다","세상의 마지막 기차역","칵테일, 러브","하얼빈","불편한 편의점","쿼런틴","내가 행복한 이유","가재가 노래하는"];
for (var i=0; i<search.length; i++){
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i], size: 1},
        async: false,
        headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021"}
    })
        .done(function (msg) {
            $(".sellbox").eq(i).append("<img src="+msg.documents[0].thumbnail+">");
            $(".sellbox").eq(i).append("<h4 class='koPubB14'>" + '<a href="sub_book13.html">' + msg.documents[0].title + "</a>" + "</h4>");
            $(".sellbox").eq(i).append("<h6 class='koPubB11'>" + msg.documents[0].authors + "</h6>");
        });
}
});

$(function(){
    $("#starone,#startwo,#starthree,#starfour,#starfive").hover(function(){
        $(this).css({"color":"tomato"});
        $(this).prevAll().css({"color":"tomato"});
    },function(){
        $(this).css({"color":"#ddd"});
        $(this).prevAll().css({"color":"#ddd"});
    });
    $("#starone").hover(function(){
        $("#mal1").css({opacity:1});
        $("#pyeong").css({opacity:0});
    },function(){
        $("#mal1").css({opacity:0});
        $("#pyeong").css({opacity:1});
    });
    $("#startwo").hover(function(){
        $("#mal2").css({opacity:1});
        $("#pyeong").css({opacity:0});
    },function(){
        $("#mal2").css({opacity:0});
        $("#pyeong").css({opacity:1});
    });
    $("#starthree").hover(function(){
        $("#mal3").css({opacity:1});
        $("#pyeong").css({opacity:0});
    },function(){
        $("#mal3").css({opacity:0});
        $("#pyeong").css({opacity:1});
    });
    $("#starfour").hover(function(){
        $("#mal4").css({opacity:1});
        $("#pyeong").css({opacity:0});
    },function(){
        $("#mal4").css({opacity:0});
        $("#pyeong").css({opacity:1});
    });
    $("#starfive").hover(function(){
        $("#mal5").css({opacity:1});
        $("#pyeong").css({opacity:0});
    },function(){
        $("#mal5").css({opacity:0});
        $("#pyeong").css({opacity:1});
    });
});