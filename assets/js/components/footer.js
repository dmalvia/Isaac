var footerBreadcrumb = (function () {
    var mobileBreakpoint = 768,
        $win,
        winWidth,
        resizeTimer;
    
    function init() {
        $win = $(window);
        winWidth = $win.width();
        if($win.width() < 768) {
            var $bc = $('.glb-footer .simple-breadcrumb-component');
            var $scrollPane = $bc.find('.breadcrumb-component__scroll-pane');
            if($scrollPane != null && $scrollPane != undefined && $scrollPane.length > 0){
                var scrollWidth= $scrollPane[0].scrollWidth;

                var paneWidth = $scrollPane.innerWidth();
                //Show the end of the scroll pane
                $scrollPane.scrollLeft(scrollWidth + 100);

                var scrollResizeTimer;
                $scrollPane.on('scroll', function(e) {

                    clearTimeout(scrollResizeTimer);
                    scrollResizeTimer = setTimeout(function() {
                        if($scrollPane.scrollLeft() == 0) {
                            $bc.addClass('simple-breadcrumb-component--hide-fade-l ');
                        } else {
                            $bc.removeClass('simple-breadcrumb-component--hide-fade-l ');
                        }

                        if(parseInt($scrollPane.scrollLeft() + paneWidth) == scrollWidth) {
                            $bc.addClass('simple-breadcrumb-component--hide-fade-r ');
                        } else {
                            $bc.removeClass('simple-breadcrumb-component--hide-fade-r ');
                        }
                        
                    }, 150);

                });
            }
        }  

    }

    return {
        init: init
    };

})();

$(document).ready(function() {
    footerBreadcrumb.init();
});