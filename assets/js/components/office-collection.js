
	
var officeCollection = (function () {
	var listingId,
	filterOnElem,
	winWidth,
	$win,
	mobileBreakpoint = 768
	minItemHeight = 0;
	
	function equaliseHeights() {
		if(winWidth > mobileBreakpoint) {
			$('.office-collection__item', listingId).each(function(){
				var $this = $(this);
				var height = $this.outerHeight();
				if (height > minItemHeight) {
					minItemHeight = height;
				}
			}).css('height', minItemHeight);
		}else {
			$('.office-collection__item', listingId).css('height','');
		}
	}
    
    function initFilters() {
    	//Display filter panel
		$('.office-collection').addClass('office-collection--reveal-filters'); 
	
    	//Manage filter field
    	var $filterElem = $('.listing-filters__select', listingId);
		$filterElem.on('change', function(e) {
    		var $this = this;
    		var selectedVal = $filterElem.find('option:selected').val();
    		var matchedCount = 0;
    		var targetRegion = selectedVal.replace('region--','');
    		var isMobile = $(window).width() < mobileBreakpoint;
 
    		if(targetRegion == '*') {
    			/*
					Display full listing
    			*/
    	
    			//First hide all visible items items, moving them out of viewport
    			if(isMobile) {
    				$(filterOnElem, listingId).show();
    			} else {
    				$(filterOnElem, listingId).velocity({ opacity: 0.25 },{duration: 250}).velocity({translateY: "-25%", opacity: 0 },{ display: "none",  duration: 150,
					    complete: function() { 
					    	//Reveal all items
	    					$(filterOnElem, listingId).velocity({translateY: 0, opacity: 1}, { display: "block", duration: 300 });
	    				}  
					});
    			}
    			
    		} else {
    			/*
					Filter listing
    			*/
    			if(isMobile) {
    				//Check each item for match and do a basic show / hide toggle
    				$(filterOnElem, listingId).each(function() {
	    				$item = $(this);
	    				if($item.attr('data-region') && $item.attr('data-region') == targetRegion) {
	    					//Reveal if matched
	    					$item.show();
	    				} else {
	    					$item.hide();
	    				}	
    				});
    			} else {
    				//First hide all items, moving them out of viewport
	    			$(filterOnElem, listingId).velocity({ opacity: 0.25 },{duration: 250}).velocity({translateY: "-25%", opacity: 0 },{ display: "none",  duration: 150,    
					    complete: function() { 
							//Now check each item for match
		    				$(filterOnElem, listingId).each(function() {
			    				$item = $(this);
			    				if($item.attr('data-region') && $item.attr('data-region') == targetRegion) {
			    					//Reveal if matched
			    					$item.velocity({translateY: 0, opacity: 1}, {display: "block", duration: 300});
			    				}  			
		    				});
					    }  
					});
				}
    		}

    	});
	}
     
    function init(args) {
		listingId = args.elem;
		filterOnElem = args.filterOnElem;
		$win = $(window);
		//Run JS-fallback to equalise height if browser does not support CSS Flexbox
		var hasFlex = Modernizr.flexbox;
		if(!hasFlex) {
			equaliseHeights();
			$win.on('resize', function(e) {
				clearTimeout(resizeTimer);
      			var resizeTimer = setTimeout(function() {
					winWidth = $win.width();
					equaliseHeights();		
				}, 250);
    		});	
		}
		
		//Setup filters
		initFilters();
		$('.office-collection').addClass('office-collection--has-js');
    }

    return {
        init: init
    };

})();

$(document).ready(function () {
    officeCollection.init({ elem: '#textOfficeListing1', filterOnElem: '.office-collection__item' });//todo: build to support multiple instances...???
});