// Begin Secondary Navigation (Buttons) component

$(function () {

    function getSize(method) {
        return document.documentElement[method] || document.body[method];
    }

    $('.selectGrid li').on('click', '.open', function (e) {
        e.preventDefault();
        $('.selectGrid li').removeClass('selected').addClass('selectable');
        $(this).parent().removeClass('selectable').addClass('selected');
        $('.opened').removeClass('opened').addClass('open');

        $(this).removeClass('open').addClass('opened');
        var sgHeight = $(this).next().height();
        $('.selectGrid li').removeAttr('style');
        $(this).parent().height(sgHeight + 160);

        var scrolledFromTop = getSize("scrollTop");
        var nextPanelFromTop = $(this).parent().offset().top;

        if (nextPanelFromTop < scrolledFromTop) $('html,body').scrollTop(nextPanelFromTop);
    });


    $('.selectGrid li').on('click', '.opened', function (e) {
        e.preventDefault();
        $(this).removeClass('opened').addClass('open');
        $('.selectGrid li').removeClass('selected').addClass('selectable').removeAttr('style');
    });

})

// End of Secondary Navigation (Buttons) component