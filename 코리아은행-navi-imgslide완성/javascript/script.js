$('.navi>li').mouseover(
    function(){
        $(this).children('.submenu').stop().slideDown(500);
    }
);

$('.navi>li').mouseout(
    function(){
        $('.submenu').stop().slideUp(500);
    }
);

setInterval(
    function(){
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft:-1200});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft:-2400});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft:0});
        $('.slidelist').delay(2000);
    }
);
// 오른쪽에서 왼쪽으로

// setInterval(
//     function(){
//         $('.slidelist').delay(2000);
//         $('.slidelist').animate({marginTop:-300});
//         $('.slidelist').delay(2000);
//         $('.slidelist').animate({marginTop:-600});
//         $('.slidelist').delay(2000);
//         $('.slidelist').animate({marginTop:0});
//         $('.slidelist').delay(2000);
//     }
// );
// 위에서 아래로