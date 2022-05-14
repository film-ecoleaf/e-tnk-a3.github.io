$(function(){
    // Scriptが機能してない場合のコンテンツ非表示を防ぐためにこのタイミングで初期設定
    $('.scroll-fade-in').css("opacity","0");
    $('.scroll-fade-in').css("margin-top","30px");
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }

        $('.scroll-fade-in').each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > imgPos - windowHeight + windowHeight / 800){
                $(this).css("opacity","1");
                $(this).css("margin-top","0");
            } else {
                $(this).css("opacity","0");
                $(this).css("margin-top","30px");
            }
        })
    })
    
})
