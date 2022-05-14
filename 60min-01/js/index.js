$(function () {
    Initialize();
    function Initialize() {
        var top_image = new hoverEffect({
            parent: document.querySelector('.image-wrapper'),
            intensity: 0.5,
            image1: '../images/S__15630343.jpg',
            image2: '../images/S__15630345.jpg',
            displacementImage: '../images/mask.png'
        });
    }

});