$(function () {
    $(window).scroll(function () {
        let scroll = $(this).scrollTop();

        // ========= fiv nav ==============

        if (scroll > 50) {
            $(".navbar").addClass("fix__nav");
        } else {
            $(".navbar").removeClass("fix__nav");
        }
        // ========= back to top ======
        if (scroll>500){
            // $(".back__to__top").fadeIn(300);
            $(".back__to__top").css("visibility", "visible");
            $(".back__to__top").css("opacity", 1);
            $(".back__to__top").addClass("back__btn__show");
        }else{
            $(".back__to__top").css("visibility", "hidden");
            $(".back__to__top").removeClass("back__btn__show");
            $(".back__to__top").css("opacity", 0);
            // $(".back__to__top").fadeOut(500);
        }
    });

    // ======== back to top ============
    $(".back__to__top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // ======== active nav link===========

    $(".nav-item").click(function () {
        $(this).addClass("active__nav__link").siblings().removeClass("active__nav__link");
    })
    // ======== active mixitup button===========

    $(".mixItUp_btn").click(function () {
        $(this).addClass("active__work__link").siblings().removeClass("active__work__link");
        console.log("clicked");
    })
    // =========== counter up ==============
    $('.counter').counterUp({
        delay: 100,
        time: 1500
    });

    // ==== slick slide for review section ===========
    $('.review__card__main').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        appendDots:$(".review__slide__btn"),
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                dots:false,
              }
            },
            {
                breakpoint: 991,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                dots:false,
              }
            },
            
        ]
    });
});


// =========== work section mixit up ============
var mixer = mixitup(".mixItUp", {
    selectors: {
        target: '.mixitUpItems'
    },
    animation: {
        duration: 300
    }
});