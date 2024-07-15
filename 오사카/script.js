$(".navi > li").mouseover(function(){
//    $('.submenu').stop().slideDown(200);
    $(this).children('.submenu').stop().slideDown();
});
$(".navi > li").mouseout(function(){
    // $('.submenu').stop().slideUp(200);
    $(this).children('.submenu').stop().slideUp();
});

setInterval(
    function(){
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft: -800});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft: -1600});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft: 0});
    }
);

$(".notice li:first").click(function(){
    $(".modal").addClass("active");
});
$(".btn").click(function(){
    $(".modal").removeClass("active");
});