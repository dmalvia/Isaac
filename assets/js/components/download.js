$(function(){
    $('body').on('click', '.cta-download__additional-trigger', function (e) {
        e.preventDefault();
        var target = $(this).parents('.cta-download').find('.cta-download_additional-wrapper');
		
		if(target.length===1){		
			if(target.is(':visible')) {
				target.stop(true,false).slideUp(300);
				$('.cta-download__additional-trigger-text').text($(this).data('openText'));
				$('.cta-download__additional-trigger').find('.css-arrow--down').removeClass('css-arrow--down-rotate');
                console.log(this)
			}
			else {
				target.stop(true,false).slideDown(300);
				$('.cta-download__additional-trigger-text').text($(this).data('closeText'));
				$('.cta-download__additional-trigger').find('.css-arrow--down').addClass('css-arrow--down-rotate');
			}
		}
	})
});