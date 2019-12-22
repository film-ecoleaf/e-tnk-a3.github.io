$(function () {
    luxy.init();
    var top_image = new hoverEffect({
        parent: document.querySelector('.logo'),
        intensity: 0.5,
        image1: '../images/new-top.png',
        image2: '../images/new-top.png',
        displacementImage: '../images/mask.png'
    });
    $('.end-msg p').on('click', function () {
        $('main').animate({ scrollTop: 0 }, 500);
    })
});