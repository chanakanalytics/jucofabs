jQuery(document).ready(function ($) {
    //--------- Menubar -------------//

    $(".menu-icon").click(function () {
        $(".right-menu").addClass("active");
    });

    $(".right-menu").click(function () {
        $(".right-menu").removeClass("active");
    });

    $(".product-slider-first").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        asNavFor: ".product-slider-box-text-slide",
        speed: 1000,
    });

    $(".product-slider-box-text-slide").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        asNavFor: ".product-slider-first",
    });

    var $slider = $(".product-slider-first");
    var $progressBar = $(".slider-first-progress");
    var $progressBarLabel = $(".slider__label");

    $slider.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
            var calc = (nextSlide / (slick.slideCount - 1)) * 100;

            $progressBar
                .css("background-size", calc + "% 100%")
                .attr("aria-valuenow", calc);

            $progressBarLabel.text(calc + "% completed");
        }
    );

    $slider.on("init reInit afterChange", function (event, slick) {
        $(".current-items span").text(slick.slickCurrentSlide() + 1);
        $(".total-items span").text(slick.slideCount);
    });

    // new-img-slider-section
    $(".new-img-slider-section").slick({
        infinite: false,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        asNavFor: ".new-img-slider-section-text-slide",
    });

    $(".new-img-slider-section-text-slide").slick({
        infinite: false,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        asNavFor: ".new-img-slider-section",
    });

    var $newSlider = $(".new-img-slider-section");
    var $newProgressBar = $(".new-progress");
    var $newProgressBarLabel = $(".new-slider__label");

    $newSlider.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
            var calc = (nextSlide / (slick.slideCount - 1)) * 100;

            $newProgressBar
                .css("background-size", calc + "% 100%")
                .attr("aria-valuenow", calc);

            $newProgressBarLabel.text(calc + "% completed");
        }
    );

    $newSlider.on("init reInit afterChange", function (event, slick) {
        $(".new-current-items span").text(slick.slickCurrentSlide() + 1);
        $(".new-total-items span").text(slick.slideCount);
    });

    $(".friendly-products-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        variableWidth: true,
        dots: true,
    });

    $(".video-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    // const sliderList = [
    //     ".product-slider-first",
    //     ".product-slider-box-text-slide",
    //     ".new-img-slider-section",
    //     ".new-img-slider-section-text-slide",
    //     ".friendly-products-slider",
    //     ".video-slider",
    // ];
    // sliderList.forEach((slider) => {
    //     const slider = document.querySelector(slidername)
    //     console.log(slider);
    //     $(slider).on("mouseover", (e) => {
    //         $(slider).slick("slickPause");
    //     });
    //     $(slider).on("mouseout", (e) => {
    //         $(slider).slick("slickPlay");
    //     });
    // });


    // Product-page-slider
    $(".product-page-slider").slick({
        infinite: true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
    });

    var $sliderProduct = $(".product-page-slider");
    var $progressBarProduct = $(".slider-first-progress-product");
    var $progressBarLabelProduct = $(".slider__label-product");

    $sliderProduct.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
            var calc = (nextSlide / (slick.slideCount - 1)) * 100;

            $progressBarProduct
                .css("background-size", calc + "% 100%")
                .attr("aria-valuenow", calc);

            $progressBarLabelProduct.text(calc + "% completed");
        }
    );

    $sliderProduct.on("init reInit afterChange", function (event, slick) {
        $(".current-items-product span").text(slick.slickCurrentSlide() + 1);
        $(".total-items-product span").text(slick.slideCount);
    });

    $(".product-details-slider-img-part-slide").slick({
        infinite: true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        speed: 1000,
        asNavFor: ".product-details-slider-img-part-slide-main",
    });

    $(".product-details-slider-img-part-slide-main").slick({
        infinite: true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        asNavFor: ".product-details-slider-img-part-slide",
    });

    var $sliderProductDetails = $(".product-details-slider-img-part-slide-main");
    var $progressBarProductDetails = $(".slider-product-details-progress");
    var $progressBarLabelProductDetails = $(".slider__label-product-details");

    $sliderProductDetails.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
            var calc = (nextSlide / (slick.slideCount - 1)) * 100;

            $progressBarProductDetails
                .css("background-size", calc + "% 100%")
                .attr("aria-valuenow", calc);

            $progressBarLabelProductDetails.text(calc + "% completed");
        }
    );

    $sliderProductDetails.on("init reInit afterChange", function (event, slick) {
        $(".current-product-details-items span").text(slick.slickCurrentSlide() + 1);
        $(".total-product-details-items span").text(slick.slideCount);
    });

   





    $('.tab-itemsA').on('click', function() {
        $('.tab-itemsB, .gallery').removeClass('active');
        $(this).addClass('active');
        $('.product-des-content').addClass('active');

    })
    $('.tab-itemsB').on('click', function() {
        $(this).addClass('active');
        $('.gallery').addClass('active');
        $('.tab-itemsA, .product-des-content').removeClass('active');
    })


    // --------- animation  --------//

    AOS.init({
        duration: 1200,
    });
});

// Header ProgressBar
function progressBarScroll() {
    let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop,
        height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";
}

window.onscroll = function () {
    progressBarScroll();
};

(function ($) {
    "use strict";
    $(document).ready(function () {
        "use strict";
        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 900;
        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".progress-wrap").addClass("active-progress");
            } else {
                jQuery(".progress-wrap").removeClass("active-progress");
            }
        });

        jQuery(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });
    });
})(jQuery);
