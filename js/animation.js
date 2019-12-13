$(function () {
    // Scriptが機能してない場合のコンテンツ非表示を防ぐためにこのタイミングで初期設定
    $('.fade-in').css("opacity", "0");
    $('.fade-in').css("transform", "translateY(100px)");
    $('h1::before').css('width', '0');
    // スクロール監視 parallaxの仕様上、window.scrollだと効かないのでbody.scroll
    $("body").scroll(function () {
        $('.fade-in').each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $("body").scrollTop();
            var windowHeight = $("body").height();

            // スクロール位置がフェードインコンテンツの高さにあるか
            if (scroll > (imgPos - windowHeight + windowHeight)) {
                if ($(this).prop("tagName") == 'H1') {
                    $(this).addClass("h1-active");
                }
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0px)");
            } else {
                // フェードアウトする場合記述
                if ($(this).prop("tagName") == 'H1') {
                    $(this).removeClass("h1-active");
                }
                $(this).css("opacity", "0");
                $(this).css("transform", "translateY(100px)");
            }
        })
    })

    $(document).on('click', '.top-button', function () {
        $("body").animate({ scrollTop: 0 }, 500);
    });

})
