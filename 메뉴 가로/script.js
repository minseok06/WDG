// 메뉴 나타나게 하기
$('nav>ul>li').mouseover(function(){
    $('.m').stop().slideDown();
    $('.sub').stop().slideDown();
});
$('nav>ul>li').mouseout(function(){
    $('.m').stop().slideUp();
    $('.sub').stop().slideUp();
});

// 메뉴 배경색 유지
$('.m').mouseover(function(){
    $('.m').stop().slideDown();
    $('.sub').stop().slideDown();
});
$('.m').mouseout(function(){
    $('.m').stop().slideUp();
    $('.sub').stop().slideUp();
});
