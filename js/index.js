// 슬라이드
function bookSlide() {
    $("#bookSlide>div:nth-of-type(1)").animate({ "width": "44px", "margin-left": "-50px" }, 700, function () {
        $("#bookSlide>div:nth-of-type(1)").insertAfter("#bookSlide>div:last-child");
        $("#bookSlide>div:nth-of-type(1)").animate({ "margin-left": "0" });
        $("#bookSlide>div:last-child").animate({ "margin-left": "6px" });
    });
    $("#bookSlide>div:nth-of-type(2)").animate({ "width": "1000px" }, 700);
}
setInterval(bookSlide, 8000);

// 슬라이드버튼
$("#bSL").click(function () {
    $("#bookSlide>div:nth-of-type(1)").animate({ "width": "44px", "margin-left": "-44px" }, 700, function () {
        $("#bookSlide>div:nth-of-type(1)").insertAfter("#bookSlide>div:last-child");
        $("#bookSlide>div:nth-of-type(1)").animate({ "margin-left": "0" });
        $("#bookSlide>div:last-child").animate({ "margin-left": "6px" });
    });
    $("#bookSlide>div:nth-of-type(2)").animate({ "width": "1000px" }, 700);
});
$("#bSR").click(function () {
    $("#bookSlide>div:nth-of-type(2)").animate({ "width": "44px", "margin-left": "-44px" }, 700, function () {
        $("#bookSlide>div:nth-of-type(1)").insertAfter("#bookSlide>div:first-child");
        $("#bookSlide>div:nth-of-type(1)").animate({ "margin-left": "0" });
        $("#bookSlide>div:last-child").animate({ "margin-left": "6px" });
    });
    $("#bookSlide>div:nth-of-type(1)").animate({ "width": "1000px" }, 700);
});

// btn
$(function () {
    $("#sec4L").click(function () {
        $("#sec4book").stop().animate({ "margin-left": "0px" });
        $("#sec4L").stop().animate({ "opacity": "0.4" });
        $("#sec4R").stop().animate({ "opacity": "1" });
    });
    $("#sec4R").click(function () {
        $("#sec4book").stop().animate({ "margin-left": "-737.2px" });
        $("#sec4R").stop().animate({ "opacity": "0.4" });
        $("#sec4L").stop().animate({ "opacity": "1" });
    });
    $("#sec6L").click(function () {
        $("#sec6book").stop().animate({ "margin-left": "0px" });
        $("#sec6L").stop().animate({ "opacity": "0.4" });
        $("#sec6R").stop().animate({ "opacity": "1" });
    });
    $("#sec6R").click(function () {
        $("#sec6book").stop().animate({ "margin-left": "-737.2px" });
        $("#sec6R").stop().animate({ "opacity": "0.4" });
        $("#sec6L").stop().animate({ "opacity": "1" });
    });
    $("#sec9L").click(function () {
        $("#sec9book").stop().animate({ "margin-left": "0px" });
        $("#sec9L").stop().animate({ "opacity": "0.4" });
        $("#sec9R").stop().animate({ "opacity": "1" });
    });
    $("#sec9R").click(function () {
        $("#sec9book").stop().animate({ "margin-left": "-737.2px" });
        $("#sec9R").stop().animate({ "opacity": "0.4" });
        $("#sec9L").stop().animate({ "opacity": "1" });
    });
});

// sec4, sec6, sec9
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고양이" },
    headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName('box');
        for (var i = 0; i < boxs.length; i++) {
            $(".box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".box").eq(i).append("<h4>" + '<a href="sub_book13.html">' + msg.documents[i].title + "</a>" + "</h4>");
            $(".box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "VOGUE" },
    headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName('box1');
        for (var i = 0; i < boxs.length; i++) {
            $(".box1").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".box1").eq(i).append("<h4>" + '<a href="sub_book13.html">' + msg.documents[i].title + "</a>" + "</h4>");
            $(".box1").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "비건" },
    headers: { Authorization: "KakaoAK 87a9e903eabc646c05a3272f6c877021" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName('box2');
        for (var i = 0; i < boxs.length; i++) {
            $(".box2").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".box2").eq(i).append("<h4>" + '<a href="sub_book13.html">' + msg.documents[i].title + "</a>" + "</h4>");
            $(".box2").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
        }
    });