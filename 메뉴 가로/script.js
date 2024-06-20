$('nav>ul>li').mouseover(function(){
    $('.main').stop().slideDown();
    $('.sub').stop().slideDown();
});
$('nav>ul>li').mouseout(function(){
    $('.main').stop().slideUp();
    $('.sub').stop().slideUp();
});

$('.sub').mouseover(function(){
    $('.main').stop().slideDown();
    $('.sub').stop().slideDown();
});
$('.sub').mouseout(function(){
    $('.main').stop().slideUp();
    $('.sub').stop().slideUp();
});