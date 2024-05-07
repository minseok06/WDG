$('.navi > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});
$('.navi > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});