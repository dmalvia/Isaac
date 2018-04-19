/**
* plugin: featuredItemListing.js
**/

(function($){
  $.fn.featuredItemListing = function(options) {
    var pluginDefaults = {
      equaliseElem: '.equaliseElem',
      minWidth: 768,
      resizeTimeout: 250
  	};
	  var opts = $.extend({}, pluginDefaults, options),
        initElem = this,
        win = $(window);

    equaliseElems(initElem);

    function equaliseElems(elem){
      if ($(window).width() < opts.minWidth) {
        $(opts.equaliseElem, elem).removeAttr('style');
      } else {
        if ($('html').hasClass('no-flexbox')) {
          currentHeight = 0;
          $(opts.equaliseElem, elem).removeAttr('style');
          elem.each(function() {
            var height = $(opts.equaliseElem, this).height();
            currentHeight = height > currentHeight ? height : currentHeight;
          });
          $(opts.equaliseElem, elem).height(currentHeight);
        }
      }
    }

    win.resize(function() {
      clearTimeout(resizedFinished);
      var resizedFinished = setTimeout(function(){
        equaliseElems(initElem);
      }, opts.resizeTimeout);
    });
  };

  if (typeof multiFeaturedItem == 'function') {

      $(function () {
          $('.multi-featured-item > .multi-featured-item__block').featuredItemListing({
              equaliseElem: '.multi-featured-item__content',
              minWidth: 768,
              resizeTimeout: 100
          });
      })

  } else {
      //console.log("multiFeaturedItem() failed  : multiFeaturedItem not init yet")
  }
})(jQuery);
