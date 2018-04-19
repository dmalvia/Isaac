// Begin Explore Navigation component Collapsible tabs component

$(function () {
    $(document).ready(function () {

        $('.explore-nav').filter(function () {
            var $tabbed_content_instance = $(this),
                $tab_nav = $tabbed_content_instance.find('.explore-nav__tab a');

            // Manage expand / collapse functionality for tabs
            $tab_nav.on('click', function (e) {
				e.preventDefault();
				
				var activeTabID = $(this).prop("href");
				var activeTabHash = activeTabID.substr(activeTabID.indexOf("#"));
		
				if ($(this).parent().hasClass("explore-nav__tab--active")) {	

					$(activeTabHash).removeClass("explore-nav__tab-panel--active");
					$(this).parent("li").removeClass("explore-nav__tab--active");
					$(".explore-nav__overlay").hide();

				} else {	

					$(".explore-nav__tab-panel").removeClass("explore-nav__tab-panel--active");
					$(".explore-nav__tab").removeClass("explore-nav__tab--active");
					
					$(activeTabHash).addClass("explore-nav__tab-panel--active");
					$(this).parent("li").addClass("explore-nav__tab--active");
					
					if ($(".explore-nav__overlay").is(":visible")) {

					} else {
						$(".explore-nav__overlay").show();
					}
				}
            });

			var $wrapper = $tabbed_content_instance.find('.explore-nav__scroll-wrapper');
			var $tabList = $tabbed_content_instance.find('.explore-nav__link-list');

			var scrollWidth = $tabList[0].scrollWidth;
			var paneWidth = $tabList.innerWidth();

			// check fade on page load
			toggleFade();

			// check fade on scroll of links pane
			var scrollResizeTimer;
			$tabList.on('scroll', function (e) {
				clearTimeout(scrollResizeTimer);
				scrollResizeTimer = setTimeout(toggleFade, 150);
			});

			// check fade after window resize
			var resizeId;
			$(window).resize(function() {
				clearTimeout(resizeId);
				resizeId = setTimeout(doneResizing, 250);
			});

			function doneResizing() {
				// recalculate measurements:
				scrollWidth = $tabList[0].scrollWidth;
				paneWidth = $tabList.innerWidth();

				// hide all fades:
				$wrapper.addClass('explore-nav__scroll-wrapper--hide-fade-r');
				$wrapper.addClass('explore-nav__scroll-wrapper--hide-fade-l');

				// reapply fades if needed:
				toggleFade();
			}
			
			function toggleFade() {
				// (paneWidth + 1) is for IE 11
				if (scrollWidth === paneWidth || scrollWidth === paneWidth + 1) {
					$wrapper.addClass('explore-nav__scroll-wrapper--hide-fade-l');
					$wrapper.addClass('explore-nav__scroll-wrapper--hide-fade-r');
					return;
				}

				if ($tabList.scrollLeft() == 0) {
					$wrapper.addClass('explore-nav__scroll-wrapper--hide-fade-l');
				} else {
					$wrapper.removeClass('explore-nav__scroll-wrapper--hide-fade-l');
				}

				if (parseInt($tabList.scrollLeft() + paneWidth) == scrollWidth) {
					$wrapper.addClass('explore-nav__scroll-wrapper--hide-fade-r');
				} else {
					$wrapper.removeClass('explore-nav__scroll-wrapper--hide-fade-r');
				}
			}
        });

		//Collapse expanded panels when user clicks content area outside of panel (excluded global nav area)
		$(".explore-nav__overlay").on('click',function(e){
			$(".explore-nav__overlay").hide();
			$(".explore-nav__tab-panel").removeClass("explore-nav__tab-panel--active");
			$(".explore-nav__tab").removeClass("explore-nav__tab--active");
		});
    });
});
