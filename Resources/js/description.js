/* Preloader */
$(window).on('load', function() {
    var preloaderFadeOutTime = 1000;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        setTimeout(function() {
            preloader.fadeOut(preloaderFadeOutTime);
        }, 1000);
    }
    hidePreloader();
});