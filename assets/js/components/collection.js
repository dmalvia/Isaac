$(function(){

	/* Helper */
    $.extend({
        getQueryString: function (name) {
            function parseParams() {
                var params = {},
                    e,
                    a = /\+/g,
                    r = /([^&=]+)=?([^&]*)/g,
                    d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
                    q = window.location.search.substring(1);

                while (e = r.exec(q))
                    params[d(e[1])] = d(e[2]);

                return params;
            }

            if (!this.queryStringParams)
                this.queryStringParams = parseParams();

            return this.queryStringParams[name];
        }
    });
    $(document).ready(function() {
		$('.collection__content').each(function(){

			var container = $(this);

	        container.isotope({

		        itemSelector: '.collection__item',
		        transitionDuration: '0.8s',
		        percentPosition: true,
		        masonry: {
		            columnWidth: '.collection__item'
		        }

		    });

			container.imagesLoaded( function() {
				container.isotope('layout');
			});

	    });
    });


    $('.collection__filter-reset').bind('click', function (e) {
		e.preventDefault();
		var thisFilterContainer = $(this).parents('.collection__filter');
		thisFilterContainer.find('select').val('*').trigger('change');
	})

    $('.collection__filter').each(function () {

	    $(this).on('change', 'select', function(){

			var thisFilter = $(this),
				thisFilterContainer = thisFilter.parents('.collection__filter'),
				thisFeedContent = thisFilterContainer.parents('.collection-component').find('.collection__content'),
				atLeastOneSelected = false;

			var isoOptions = {};
			var key = thisFilter.parent().attr('data-isotope-key');

			isoOptions[key] = thisFilter.val();

			thisFeedContent.isotope(isoOptions);

			thisFilterContainer.find('select').each(function(){

				if(thisFilter.data('filterType')=="exclusive" && this!=thisFilter[0]) {
					this.selectedIndex=0;
				}

				if(this.selectedIndex != 0) atLeastOneSelected = true;
			})


			var resetEl = thisFilterContainer.find('.collection__filter-reset');

			if (resetEl.length) {
				if(atLeastOneSelected) resetEl.show();
				else resetEl.hide();
			}

		});

    });

	if($.getQueryString('feedFilter')){
		$($.getQueryString('feedFilter')).val($.getQueryString('feedFilterValue')).trigger('change');
	}
})