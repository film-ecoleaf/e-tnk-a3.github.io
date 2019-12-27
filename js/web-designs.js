$(function () {
    Initialize();
    $('img').on('click', ChoseImg);
    $('button').on('click', ViewPage);

    function Initialize() {
        var ua = navigator.userAgent;
        var defaultImg = $('.right-container img:first-child');
        if (
            ua.indexOf('iPhone') > 0 ||
            ua.indexOf('iPad') > 0 ||
            ua.indexOf('Android') > 0
        ) {
        } else {
        }
        SetProps(defaultImg);
        window.setTimeout(Animation, 2000);
    }
    function ChoseImg() {
        ResetAnimation();
        $('.on').each(function () {
            $(this).removeClass('on');
        });
        SetProps(this)
        window.setTimeout(Animation, 100);
    }

    function SetProps(image) {
        $(image).addClass('on');
        $('.theme-title').text($(image).attr('data-theme-title'));
        $('.prev').text($('#' + $(image).attr('data-msg-id')).text());
        $('button').attr('data-dirname', $(image).attr('data-dirname'))
    }
    function ResetAnimation() {
        $('.theme-title,.prev, button').css('transition', 'unset');
        $('.theme-title,.prev').removeClass('fade-in');
        $('button').css('opacity', '0');
    }
    function Animation() {
        $('.theme-title,.prev, button').css('transition', '.7s');
        $('button').css('opacity', '1');
        $('.theme-title,.prev').addClass('fade-in');
    }
    function ViewPage() {
        window.open('./' + $(this).attr('data-dirname') + '/html/index.html');
    }
})