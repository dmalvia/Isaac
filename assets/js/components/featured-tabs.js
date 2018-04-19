// Begin Secondary Navigation (Tabs) component

$(function () {
    $(document).ready(function () {

        var mobileBreakpoint = 768;
        $('.secnav-tabs').filter(function () {
            var $tabbed_content_instance = $(this),
                $tab_nav = $tabbed_content_instance.find('.secnav-tabs__tab a');

            function tabs_height_calculate() {
                // get height of currently active tab
                var $tabs_content = $tabbed_content_instance.find('.secnav-tabs__content-wrapper');
                var $active_tab_content = $tabbed_content_instance.find('.secnav-tabs__content-wrapper .active .secnav-tabs__content-container');
                var windInnerWidth = window.innerWidth;
                //Apply fixed height based on content, if window wider than mobile breakpoint
                if (windInnerWidth >= mobileBreakpoint) {
                    $tabs_content.css('height', $active_tab_content.outerHeight())
                } else {
                    $tabs_content.css('height', 'auto');
                }

            }
            // initiate tab height calculation on window reseze and call it when browser loads			
            $(window).resize(function () {
                tabs_height_calculate();
            }).resize();

            $tab_nav.on('click', function () {
                console.log('clicked');
                setTimeout(function () {
                    tabs_height_calculate();
                }, 200)
            });

        
        });
    });
});

// End of Secondary Navigation (Tabs) component


