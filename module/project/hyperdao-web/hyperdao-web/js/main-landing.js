(function ($) {
    $(window).scroll(function () {
        var $header = $(".nav-main");
        var $headerLogo = $(".nav-logo");
        var $captionLogo = $(".banner-logo");

        $header.toggleClass('scrolled', $(this).scrollTop() > 40);
        $headerLogo.toggleClass('showLogo', $(this).scrollTop() > 40);
        $captionLogo.toggleClass('hideLogo', $(this).scrollTop() > 40);
    });
})(jQuery);

