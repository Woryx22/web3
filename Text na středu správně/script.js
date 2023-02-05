(function ($) {
    $(function () {

        /* Scroll to sections */
        $(".jq--about-towers-scroll").click(function () {
            $("html, body").animate({ scrollTop: $(".jq--about-towers").offset().top }, 800);
        });

        $(".jq--our-towers-scroll").click(function () {
            $("html, body").animate({ scrollTop: $(".jq--our-towers").offset().top }, 1000);
        });

        $(".jq--references-scroll").click(function () {
            $("html, body").animate({ scrollTop: $(".jq--references").offset().top }, 1000);
        });

        $(".jq--gellery-scroll").click(function () {
            $("html, body").animate({ scrollTop: $(".jq--gellery").offset().top }, 1000);
        });

        $(".jq--form-scroll").click(function () {
            $("html, body").animate({ scrollTop: $(".jq--form").offset().top }, 1000);
        });

        /***** Mobile navigation *****/
        $(".jq--nav-icon").click(function(){

            $(".nav-background").fadeToggle(200)
            $(".mobile-nav-backgorund").slideToggle(200)
            $("nav ul").fadeToggle(200)

        });

    });
})(jQuery);