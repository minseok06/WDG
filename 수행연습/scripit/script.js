$(".main > li").mouseover(function () {
    // $('.sub').stop().slideDown();
    $(this).children('.sub').stop().slideDown();
});
$(".main > li").mouseout(function () {
    // $('.sub').stop().slideUp();
    $(this).children('.sub').stop().slideUp();

});

setInterval(function(){
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft: -1200});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft: -2400});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft: 0});
});

$(function(){
    $('.tab>li>a').click(function(){
        $(this).parent().addClass("active")
        .siblings().removeClass("active");
        return false;
    });
});