jQuery(document).ready(function ($) {

  //--------- Menubar -------------//

	$(".menu-icon").click(function(){
		$(".right-menu").addClass("active");
	});

	$(".right-menu").click(function(){
		$(".right-menu").removeClass("active");
	});


	$('.product-slider-first').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
		arrows: false,
		speed: 1000,
	});

	var $slider = $('.product-slider-first');
	var $progressBar = $('.slider-first-progress');
	var $progressBarLabel = $( '.slider__label' );
	
	$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
		var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
		
		$progressBar
		.css('background-size', calc + '% 100%')
		.attr('aria-valuenow', calc );
		
		$progressBarLabel.text( calc + '% completed' );
	});

	$slider.on("init reInit afterChange", function(event, slick) {
		$(".current-items span").text(slick.slickCurrentSlide() + 1 );
		$(".total-items span").text( slick.slideCount);
	});

	
	// new-img-slider-section
	$('.new-img-slider-section').slick({
		infinite: false,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 2000,
		fade: true,
		speed: 500,
	});

	var $newSlider = $('.new-img-slider-section');
	var $newProgressBar = $('.new-progress');
	var $newProgressBarLabel = $( '.new-slider__label' );
	
	$newSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
		var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
		
		$newProgressBar
		.css('background-size', calc + '% 100%')
		.attr('aria-valuenow', calc );
		
		$newProgressBarLabel.text( calc + '% completed' );
	});

	$newSlider.on("init reInit afterChange", function(event, slick) {
		$(".new-current-items span").text(slick.slickCurrentSlide() + 1 );
		$(".new-total-items span").text( slick.slideCount);
	});

	

  	



  // --------- animation  --------//

  AOS.init({
    duration: 1200,
  });







});


// Header ProgressBar
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};


(function($) { "use strict";
	$(document).ready(function(){"use strict";
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 900;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
    });
    				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
		
	});
	
})(jQuery); 
