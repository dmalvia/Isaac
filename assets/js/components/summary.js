$(function () {
    var mobileBreakpoint = '767';
    function summaryExplorer() {
        var $win = $(window);
        $('.summary-explorer').on('click', '.summary-explorer__link-listing li a', function (e) {
            var $this = $(this),
                $servicesWrapper = $this.parents('.summary-explorer'),
                $serviceContent = $servicesWrapper.find('.summary-explorer__preview-panel');


            //If device is large enough show content panel, otherwise just navigate to page
            if (window.innerWidth > mobileBreakpoint) {
                e.preventDefault();

                $servicesWrapper.find('li a').removeClass('serviceOpen active');

                $(this).addClass('serviceOpen active');
                $('.accordion-content-wrapper.active').removeClass('active');
                $('[data-accordion-section="' + $(this).attr('data-accordion-section-target') + '"]').addClass('active');
            }
        });
    }

    function resizeHeight($this) {
        if (window.innerWidth < mobileBreakpoint) {
            var $accContentWrapper = $('[data-accordion-section="' + $this.attr('data-accordion-expand-target') + '"]'),
               $accContentHolder = $accContentWrapper.find('.accordion-content-holder');

            if (typeof $accContentWrapper.height() != null && $accContentWrapper.height() <= 200) {
                // Shows hyperlinks when content is collapsed on mobile
                $accContentWrapper.find('a').removeClass('hide-link');

                $accContentWrapper.css('height', $accContentHolder.height());
                $accContentWrapper.addClass('hide-shadow');

                $this.text('Show less');
            } else {
                // Hides hyperlinks when content is collapsed on mobile
                $accContentWrapper.find('a').addClass('hide-link');

                $accContentWrapper.css('height', '200px');
                $accContentWrapper.removeClass('hide-shadow');
                $this.text('Show more');
            }
        } else {
            // Hides hyperlinks when content is collapsed on mobile
            $accContentWrapper.find('a').addClass('hide-link');

            $('.accordion-content-wrapper').css('height', 'auto');
            $('.accordion-content-wrapper').addClass('hide-shadow');
        }
    }

    $('.hide-link').click(function (e) {
        // Ensures hidden hyperlinks in collapsed content is not clickable
        e.preventDefault();
    });

    $(window).on('load resize', function (e) {
        // Hides images within tab content for mobile / tablet
        if (window.innerWidth < mobileBreakpoint) {
            $('.accordion-content-wrapper').find('a').addClass('hide-link');
        }
    });

    function showMoreClickAction() {
        $('[data-accordion-expand-target]').click(function (e) {
            var $this = $(this);
            e.preventDefault();
            resizeHeight($this);
            return false
        });
    }

    var resizeTimer;

    $(window).on('resize', function (e) {

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {

            // Run code here, resizing has "stopped"
            var $openSections = $('[data-accordion-section]');
            $openSections.each(function () {
                var $currentOpenSection = $(this),
                $currentOpenSectionContentLink = $currentOpenSection.find('.accordion-content-show-more'),
                $currentOpenSectionContentHolder = $currentOpenSection.find('.accordion-content-holder');
                //resizeHeight($currentOpenSectionContentLink);

                if (window.innerWidth < mobileBreakpoint) {
                    //Reset hide-shadow class - this will be re-applied for items shorter than 200px             
                    $('.accordion-content-wrapper').removeClass('hide-shadow');

                    if ($currentOpenSection.height() && $currentOpenSection.height() <= 200) {
                        $currentOpenSection.css('height', '');
                        $currentOpenSection.addClass('hide-shadow');
                        $currentOpenSectionContentLink.text('Show less');
                    } else {
                        $currentOpenSection.css('height', '200px');
                        $currentOpenSectionContentLink.text('Show more');
                    }
                } else {
                    $('.accordion-content-wrapper').css('height', '');

                    $('.accordion-content-wrapper').find('a').removeClass('hide-link');

                    $('.accordion-content-wrapper').addClass('hide-shadow');
                    $('.accordion-content-show-more').text('Show more');
                }
            });

        }, 250);

    });

    summaryExplorer();
    showMoreClickAction();
});