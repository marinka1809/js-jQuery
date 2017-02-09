$=jQuery;

$(document).ready(function(){

    var sliderContainer = ".mar-slider-container";
    var sliderBlock = ".mar-slider-block";
    var slide = ".mar-slide";

    var animationSpeed = 1200;
    var autoplaySpeed = 3000;
    var autoplay = true;
    var buttonNextPrev = true;
    var indicators = true;


    var height = $(slide).eq(0).height();
    $(sliderBlock).css('height', height);
    $(slide).hide().eq(0).show();
    var activeSlide = 0;
    var numberSlides = $(slide).length;

    if(buttonNextPrev){
        $(".mar-next").click(function(){
            $(slide).eq(activeSlide).fadeOut(animationSpeed);
            if (activeSlide==numberSlides-1) {
                activeSlide=0;
            }
            else {
                activeSlide+=1;
            }
            $(slide).eq(activeSlide).fadeIn(animationSpeed);
            changesActive ();
        });
        $(".mar-prev").click(function(){
            $(slide).eq(activeSlide).fadeOut(animationSpeed);
            if (activeSlide==0) {
                activeSlide=numberSlides-1;
            }
            else {
                activeSlide-=1;
            }
            $(slide).eq(activeSlide).fadeIn(animationSpeed);
            changesActive ();
        });
    }

    if (autoplay) {
       var timerId = setInterval(function () {$(".next").click()}, autoplaySpeed);

        $(sliderContainer).mouseover( function () {
            clearInterval(timerId);
        });

        $(sliderContainer).mouseout( function () {
            timerId = setInterval(function () {$(".next").click()}, autoplaySpeed);
        });
    }


    if (indicators) {
        $(".mar-nav-slider li").click(function (e) {
            if (activeSlide != parseFloat($(this).text())) {
                $(slide).eq(activeSlide).fadeOut(animationSpeed);
                activeSlide = parseFloat($(this).text());
                $(slide).eq(activeSlide).fadeIn(animationSpeed);
                changesActive();
            }
        });
    }

    function changesActive () {
        $(".mar-nav-slider .active").removeClass("active");
        $('.mar-nav-slider li').eq(activeSlide).addClass("active");
    }
});