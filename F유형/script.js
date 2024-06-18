$('.main>li').mouseover(function(){
    $('.sub').stop().slideDown();
    $('.menu_f').stop().slideDown();
});
$('.main>li').mouseout(function(){
    $('.sub').stop().slideUp();
    $('.menu_f').stop().slideUp();
});

setInterval(function(){
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop: -350});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop: -700});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop: 0});
});

$('.tabmenu>li>a').click(function(){
    $(this).parent().addClass('active')
    .siblings().removeClass('active');
    return false;
});

// 팝업창
$('.notice li:first').click(function(){
    $('#modal').addClass('active');
});
$('.btn').click(function(){
    $('#modal').removeClass('active');
});