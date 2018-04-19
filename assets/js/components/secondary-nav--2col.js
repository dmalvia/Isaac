var secondaryNavTwoCol = (function () {
	var minBtnHeight = 0,
		mobileBreakpoint = 768,
		$pane,
		$component,
		$contentContainer,
		$win,
		winWidth;
	
	function closePopover($component, $contentContainer,$closeButton) {
		$component.removeClass('secnav-twocol--popover-active');
		setTimeout(function() { $contentContainer.html('');},250);
		$closeButton.unbind('click');
		$pane.css('min-height','0');
	}

	function equaliseButtonHeights() {
		//Use JS to equalise height of buttons
		$('.secnav-twocol .strip-btn').each(function(){
			var $this = $(this);
			var height = $this.outerHeight();
			if (height > minBtnHeight) {
				minBtnHeight = height;
			}
		}).css('height', minBtnHeight);	
	}

	function sizeContainer($pane, $contentContainer) {
		$pane.css('min-height',$contentContainer.outerHeight());
	}

	function init() {
    	$win = $(window);
		winWidth = $win.width();
		
		$('.secnav-twocol .popover-trigger').on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			var $link = $this.parent('a');
			 $component = $this.closest('.secnav-twocol');
			 $contentContainer = $component.find('.secnav-twocol__popover-content');
			 $pane = $this.closest('.secnav-twocol__pane');//secnav-twocol__pane
			var $closeButton =  $component.find('.secnav-twocol__popover-close');
			
			//Create content
			var contentHtml = '<div class="col-sm-7 secnav-twocol__popover-copy">'+
				'<h3>'+ $link.attr("data-popover-heading") +'</h3>'+
					'<p>'+ $link.attr("data-popover-copy") +'</p>'+
					'<a href="' + $link.attr("href") + '" class="btn btn--transparent">' + $link.attr("data-popover-button") + '</a>' +
                    '</div>' +
				'<div class="col-sm-5 secnav-twocol__popover-image">'+
					'<img alt="'+ $link.attr("data-popover-image-alt") +'" class="img-responsive" src="'+ $link.attr("data-popover-image") +'" />'+
				'</div>'
			
			
			//Add to DOM and show popover
			$contentContainer.html(contentHtml);
			$component.addClass('secnav-twocol--popover-active');
			sizeContainer($pane,$contentContainer);
					
			//Setup close button
			$closeButton.on('click', function(e) {
	            e.preventDefault();
				closePopover($component, $contentContainer,$closeButton);
			});

			$win.on('resize', function(e) {
				clearTimeout(resizeTimer);
      			var resizeTimer = setTimeout(function() {
					winWidth = $win.width();
					if(winWidth < mobileBreakpoint) {
						closePopover($component, $contentContainer,$closeButton);
					}					
				}, 250);
    		});		
		});
		
		//Initial check to decide whether to equalise button heights
		if(winWidth >= mobileBreakpoint) {
			equaliseButtonHeights();
		} else {
			$('.secnav-twocol .strip-btn').css('height','');
		}

		//Check whether to reset button heights
		$win.on('resize', function(e) {
			clearTimeout(resizeTimer);
  			var resizeTimer = setTimeout(function() {
				winWidth = $win.width();
				
				if(winWidth >= mobileBreakpoint) {
					equaliseButtonHeights();
				} else {
					$('.secnav-twocol .strip-btn').css('height','');
				}
				
			}, 250);

		});

    }

    return {
        init: init
    };

})();

$(document).ready(function() {
	secondaryNavTwoCol.init();
});