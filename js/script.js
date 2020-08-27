$('.wrapper').addClass('loaded')

$('.icon-menu').click(function(e){
	$(this).toggleClass('active')
	$('.menu__body').toggleClass('active')
	$('body').toggleClass('lock')
})

function ibg(){
	$.each($('.ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

if ($('.slider__body').length>0) {
	$('.slider__body').slick({
		autoplay: true,
		infinite: false,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	})
}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".header").addClass("scrolled");
    } else {
        $(".header").removeClass("scrolled");
    }
});




