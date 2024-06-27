$('.main>li').mouseover(function(){
    $('.sub, .m').stop().slideDown();
});
$('.main>li').mouseout(function(){
    $('.sub, .m').stop().slideUp();
});

$('.m').mouseover(function(){
    $('.sub, .m').stop().slideDown();
});
$('.m').mouseout(function(){
    $('.sub, .m').stop().slideUp();
});

$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child').fadeOut()
    .next('a').fadeIn().end().appendTo('.imgslide')
}, 3000)