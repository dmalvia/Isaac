$(document).ready(function() {


	var PostsToShow = 3;
	var PostsToShowMore = 1000;

	// Hide all but first 3 items
	$('.post-collection__listing-row').each(function() {
		
		// Hide "load more" if there aren't enough posts
		if($(this).children(".post-collection__item").length <= PostsToShow){
			$(this).next().find('.post-collection__item-loadmore a').hide();
		}
		
		$(this).children(".post-collection__item").slice(PostsToShow).hide();
	});


	//Click to load more / show all enteries
	$(".toggle-target").on("click", ".post-collection__item-loadmore a", function(e){


		//e.preventDefault();


		var listingcontainer = $(this).parents(".post-collection");


		var overflowpostcollection = listingcontainer.find(".post-collection__item:hidden");

		if(overflowpostcollection.length < 1){

			//console.log("no more posts to show");
			//show fewer

				$(this).find('.showLess').hide().end().find('.showMore').show();
				


				$('html,body').animate({
					scrollTop: listingcontainer.offset().top - 200
				  }, 700);

				listingcontainer.find('.post-collection__listing-row').children(".post-collection__item").slice(PostsToShow).delay(500).hide(0);


		}else{
			overflowpostcollection.slice(0,PostsToShowMore).show();

			var overflowpostcollectionEnd = listingcontainer.find(".post-collection__item:hidden");
			if (overflowpostcollectionEnd.length < 1){
				// console.log("no more hidden posts - show the button here")

				$(this).find('.showMore').hide().end().find('.showLess').show();
			}

		}


		// stopping a strange hover bug on the focus state when using e.preventDefault
		e.stopPropagation();
		return false;

	});

});