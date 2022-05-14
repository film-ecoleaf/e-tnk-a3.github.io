$(function () {
    Initialize();
    $('button').on('click', OpenDP);
    var top_image = new hoverEffect({
        parent: document.querySelector('.logo'),
        intensity: 0.5,
        image1: './images/new-top.png',
        image2: './images/new-top.png',
        displacementImage: './images/mask.png'
    });
    $('.end-msg p').on('click', function () {
        $(window).animate({ scrollTop: 0 }, 500);
    });

    function Initialize() {
        $('.animate').scrolla({
            mobile: true,
            once: true
        });
        var ua = navigator.userAgent;
        if (
            ua.indexOf('iPhone') > 0 ||
            ua.indexOf('iPad') > 0 ||
            ua.indexOf('Android') > 0
        ) {
            $('.animate').each(function () {
                $(this).attr({
                    'data-durations': '1s',
                    'data-scrolla-offset': '-100'
                });
            })
            $('.photos').attr('data-scrolla-offset', '300')
            $('.about > .luxy-el').attr({
                'data-horizontal': 0,
                'data-speed-x': 0
            });
            $('.about > .luxy-el').removeClass('luxy-el');
            $('.designs').attr({
                'data-horizontal': 0,
                'data-speed-x': 0
            });
            $('.photos').attr({
                'data-horizontal': 0,
                'data-speed-x': 0
            });
            $('.skill').attr({
                'data-horizontal': 0,
                'data-speed-x': 0
            });
            $('.skill .luxy-el').each(function () {
                $(this).removeClass('luxy-el');
            })
        } else {
            luxy.init();
        }
    }
    function OpenDP() {
        window.open('./web-designs.html');
    }
});