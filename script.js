jQuery(document).ready(function () {
        $('.slider').slick({
            infinite: false,
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 2,
            variableWidth: true,
            appendArrows: '.slider__arrows',
            prevArrow: '.slider__arrows__btn_prev',
            nextArrow: '.slider__arrows__btn_next',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        rows: 2,
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        rows: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1,
                        centerMode: true,
                        centerPadding: 100

                    }
                }
            ]
        });
    });