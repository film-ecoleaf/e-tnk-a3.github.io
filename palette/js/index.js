$(function () {
    Initialize();

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

});