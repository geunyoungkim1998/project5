// function Slide() {
//   $("#bookSlide>div:nth-of-type(2)").animate({"width":"1000px"}, 1200, function () {
//     $("#bookSlide>div").animate({"margin-left": "-42px"});
//     $("#bookSlide>div:nth-of-type(1)").animate({"width":"42px"});
//     $("#bookSlide>div:first-child").insertAfter("#bookSlide>div:last-child");
//   });
// };
// setInterval(Slide, 5000);

function bookSlide(){
    $("#bookSlide>div:nth-of-type(1)").animate({"width":"44px","margin-left":"-44px"},700,function(){
        $("#bookSlide>div:nth-of-type(1)").insertAfter("#bookSlide>div:last-child");
        $("#bookSlide>div:nth-of-type(1)").animate({"margin-left":"0"});
        $("#bookSlide>div:last-child").animate({"margin-left":"6px"});
    });
    $("#bookSlide>div:nth-of-type(2)").animate({"width":"1000px"},700);
}
setInterval(bookSlide, 5000);