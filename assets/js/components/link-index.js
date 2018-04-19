$(function(){

    $(document).ready(function() {
        $('.link-index__content').each(function () {

			var container = $(this);

	        container.isotope({
                //layoutMode: 'fitColumns',
	            itemSelector: '.link-index__group',
		        transitionDuration: '0.8s',
		        percentPosition: true,
		        masonry: {
		            columnWidth: '.link-index__group'
		        }

		    });

	    });
    });
})