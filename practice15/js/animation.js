$(function () {
    $(window).scroll(function () {
        $('.cook-name').each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            // スクロール位置がフェードインコンテンツの高さにあるか
            if (scroll > imgPos - windowHeight + windowHeight / 10) {
                $(this).addClass('on');
            } else {
                // フェードアウトする場合記述
            }
        })
    })
})