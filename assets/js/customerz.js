//Owl carousel
$('.owl-theme').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navigation : true,
    navText: ["<i class='btnCarousel fa fa-chevron-circle-left' aria-hidden='true'></i>","<i class='btnCarousel fa fa-chevron-circle-right' aria-hidden='true'></i>"],

    responsive:{
        1920:{
            items:6
        },
        1200:{
            items:6
        },
        1024:{
            items:4
        },
        640:{
            items:2
        },
        480:{
            items:2
        },
        0:{
            items:1
        }
    }
});

$('.owl-blogs').owlCarousel({
    item:3,
    loop:true,
    margin:30,
    nav:true,
    navigation : true,
    responsive:{
        1920:{
            items:3
        },
        1200:{
            items:3
        },
        1024:{
            items:3
        },
        640:{
            items:2
        },
        480:{
            items:2
        },
        0:{
            items:1
        }
    }
});

jQuery(document).ready(function($) {
	$('.navbar').click( function () {
		$('.nav-overlay').animate({right: '0px'}, 200);
		$('.nav-overlay').css('display','block');
	});
	$('.menu-close').click( function () {
		$('.nav-overlay').animate({right: '-300px'}, 200);
        $('.nav-overlay').css('display','none');
	});
});