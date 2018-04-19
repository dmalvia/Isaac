$(document).ready(function () {
    $('.image-share').click(function () {
        var el = $(this);
        // var wrapper = el.find('.image-wrapper');
        var shareOption = el.next('.image-share-options');


        if (shareOption.is(':visible')) {
            shareOption.stop(true, false).fadeTo(300, 0, function () { $(this).css('display', 'none') });
        } else {
            shareOption.stop(true, false).show().fadeTo(300, 1);
        }
        $(this).toggleClass('open');
    });

    $(function () {
        var $win = $(window);
        var winWidth = $win.width();
        var mobileBreakpoint = 768;
        if (('ontouchstart' in window) ||
             (navigator.maxTouchPoints > 0) ||
             (navigator.msMaxTouchPoints > 0)) {
            /* browser with either Touch Events of Pointer Events
               running on touch-capable device */
            $('html').addClass('touch');
        } else {
            $('html').addClass('no-touch');
        }

        if ($('html').hasClass('touch')) {

            $('.image-wrapper').click(function () {
                $(this).toggleClass('touch-share');
            });
        }
    });
});

