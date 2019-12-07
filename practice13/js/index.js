$(function(){
    $('button').on('click',FadeIn);
    function FadeIn() {
        $('section.top,section.about').toggleClass("on");
    }
})