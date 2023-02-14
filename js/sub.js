$(function(){
    $("#sec5book>div>div").addClass("topbox");

    var search=["물고기는 존재하지 않는다","불편한 편의점","팩트풀니스","지구의 끝은 온실","미드나잇 라이브러리","우리가 빛의 속도로","별의 계승자","죽여 마땅한 사람들","꿈 백화점 2","완전한 행복"];
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