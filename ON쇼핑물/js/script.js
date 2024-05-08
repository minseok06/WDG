// 슬라이드 다운 슬라이드 업
$('.navi > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});
$('.navi > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});

// 페이드 인 페이드 아웃
$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.imgslide');
}, 3000);

// 공지사항 갤러리 탭 메뉴
$(function(){
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active')
         .siblings().removeClass('active');
        return false;
    });
});

// 팝업창
$('.c1 li:first').click(function(){
    $('#modal').addClass('active');
});
$('.btn').click(function(){
    $('#modal').removeClass('active');
});