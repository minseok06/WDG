$('.main > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(500);
});
$('.main > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(500);
});