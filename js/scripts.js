$(function () {
    $('#nav li:has(ul)').doubleTapToGo();

    $("#slideshow").responsiveSlides({
        maxwidth: 940,
        speed: 1200
    });

    if ($(window).width() <= 1024) {
        $('#menu-toggle').click(function () {
            $(this).toggleClass('expanded').siblings('div').slideToggle();
        });

        $('#accordion').find('.accordion-toggle').click(function () {
            $(this).next().slideToggle('fast');
            $(".accordion-content").not($(this).next()).slideUp('fast');

        });
    }

    function setWindowHeight() {
        var windowHeight = window.innerHeight;
        document.body.style.height = windowHeight + "px";
    }
    window.addEventListener("resize", setWindowHeight, false);
});