$(function () {
    $('#nav li:has(ul)').doubleTapToGo();

    $("#slideshow").responsiveSlides({
        maxwidth: 940,
        speed: 1200
    });

    function setWindowHeight() {
        var windowHeight = window.innerHeight;
        document.body.style.height = windowHeight + "px";
    }
    window.addEventListener("resize", setWindowHeight, false);
});