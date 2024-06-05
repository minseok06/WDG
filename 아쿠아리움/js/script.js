$('.tabmenu>li>a').click(function(){
    $(this).parent().addClass('active')
    .siblings().removeClass('active');
    return false;
});

$('.notice li:first').click(function(){
    $('#modal').addClass('active');
});
$('.btn').click(function(){
    $('#modal').removeClass('active');
});

$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child').fadeOut()
    .next('a').fadeIn().end().appendTo('.imgslide');
}, 3000);

