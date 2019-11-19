$(function(){
    // Scriptが機能してない場合のコンテンツ非表示を防ぐためにこのタイミングで初期設定
    $('.fade-in').css("opacity","0");
    $('.fade-in').css("margin-top","30px");
    // スクロール監視 parallaxの仕様上、window.scrollだと効かないのでbody.scroll
    $("body").scroll(function(){
        $('.fade-in').each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $("body").scrollTop();
            var windowHeight = $("body").height();

            // スクロール位置がフェードインコンテンツの高さにあるか
            if (scroll > imgPos - windowHeight + windowHeight){
                $(this).css("opacity","1");
                $(this).css("margin-top","0");
            } else {
                // フェードアウトする場合記述
                $(this).css("opacity","0");
                $(this).css("margin-top","30px");
            }
        })
    })

    $(document).on('click', '.top-button',function(){
        $("body").animate({ scrollTop: 0 }, 500);
    });
    
})
