$(function () {

    $(window).scroll(ScrollAnimation)
    $('.menu-btn').on('click', OpenMenu);
    $('.high-light').on('click', OpenModal);
    $('.account-btn').on('click', OpenModal);
    $('.login-btn').on('click', OpenModal);
    $('.edit-btn').on('click', OpenModal);
    $('main').on('click', CloseMenu);
    $('.close-modal-btn, .modal').on('click', CloseModal);
    $('.form').on('click', function () {
        event.stopPropagation();
    })

    function ScrollAnimation() {
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
    }
    function OpenMenu() {
        $('.nav-wrapper').toggleClass('on');
    }
    function CloseMenu() {
        $('.nav-wrapper').removeClass('on');
    }
    function OpenModal() {
        CloseModal();
        $('.modal').addClass('on');
        $($(this).data('form-name')).addClass('on');
        $('html').css('overflow-y', 'hidden');
    }
    function CloseModal() {
        $('.modal').removeClass('on');
        $('.modal').find('.on').each(function () {
            $(this).removeClass('on');
        });
        $('html').css('overflow-y', 'auto');
    }
})