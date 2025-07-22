$(function () {
    $('.header .gnb > ul > li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle(200);
        $(this).parent().siblings().find('.sub').stop().slideUp(200);
    });

    $('.mbtn').on('click', function (e) {
        e.preventDefault();
        $('.gnb').toggleClass('on');
        $('.hd_wrap h1').toggleClass('on');
        $('.header .utils').toggleClass('on');
    });

});

$(function () {
    let lastScroll = 0;
    let delta = 5;
    let headerHeight = $('.header .hd_wrap').outerHeight();

    $(window).on('scroll', function () {
        let sct = $(this).scrollTop();

        if (window.innerWidth <= 768) {
            if (sct > 60) {
                $('.header .hd_wrap').addClass('fixed');
                $('.header .user_img img').attr('src', './images/user.svg');
                $('.header .bag_img img').attr('src', './images/shopping_bag.svg');
                $('.header h1 img').attr('src', './images/Aesop_logo_2013.svg');

                if (Math.abs(lastScroll - sct) > delta) {
                    if (sct > lastScroll) {
                        // 아래로 스크롤(숨김)
                        $('.header .hd_wrap').addClass('hide');
                    } else {
                        // 위로 스크롤(노출)
                        $('.header .hd_wrap').removeClass('hide');
                    }
                }
            } else {

                $('.header .hd_wrap').removeClass('fixed hide');
                $('.header .user_img img').attr('src', './images/user.svg');
                $('.header .bag_img img').attr('src', './images/shopping_bag.svg');
                $('.header h1 img').attr('src', './images/Aesop_logo_2013.svg');
            }

            lastScroll = sct;
        }
    });
});



$(function () {

    const mbtn = document.getElementById('mbtn');
    mbtn.addEventListener('click', function () {
        this.classList.toggle('is-active');
    });

    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        speed: 1000,
        fade: true,
    });


    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .play').off('click').on('click', function () {
        var $btn = $(this);
        if ($btn.hasClass('on')) {

            $('.main_visual_slide').slick('slickPlay');
        } else {

            $('.main_visual_slide').slick('slickPause');
        }
        $btn.toggleClass('on');
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext');
    });
});


$(function () {
    const main_sec02_slide = new Swiper('.main_sec02_slide', {
        slidesPerView: 4, // 원하는 슬라이드 개수로 조정
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.main_sec02_next',
            prevEl: '.main_sec02_prev',
        },

        scrollbar: {
            el: ".main_sec02 .scrollbar",
            hide: false,
            draggable: true,
            dragSize: 80,
        },

        breakpoints: {
            1025: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },

            0: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },

        }
    });



});

$(function () {
    const MIS = new Swiper('.main_sec04_slide', {
        loop: true,
        effect: 'fade',
        pagination: {
            el: '.main_sec04 .page',
            clickable: true,
        },


        navigation: {
            nextEl: '.main_sec04 .next',
            prevEl: '.main_sec04 .prev',
        },
    });

});


$(function () {
    //부드럽게 여닫음
    $('.footer .inner .top .right strong').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });

});
