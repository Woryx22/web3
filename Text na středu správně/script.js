(function($){
    $(function(){
        
        /* Scroll to sections */
        $(".jq--about-towers-scroll").click(function(){
           $("html, body").animate({scrollTop: $(".jq--about-towers").offset().top}, 1000);
        });
     });
 })(jQuery);