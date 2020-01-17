$(function () {
    Initialize();
    $('nav ul li a').on('cliick', ScrollView);
    $('button').on('click', ToggleNav);
    $('nav ul li a').on('click', CloseNav);
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
                    'data-scrolla-offset': '100'
                });
            })
        } else {
        }
    }
    function ScrollView() {
        $($(this).attr('data-scroll')).scrollIntoView({
            behaivor: "smooth",
            block: "start"
        });
    }
    function ToggleNav() {
        $('nav').toggleClass('on');
        $('button').toggleClass('on');
    }
    function CloseNav() {
        $('nav').removeClass('on');
        $('button').removeClass('on');
    }

});