/* -------------- Cookies -------------- */
	/* Paul Stephens' NetScape-based cookie-handling library http://web.ukonline.co.uk/paul.stephens/index.htm */
	function setCookie (name, value, lifespan, access_path) {
		var cookietext = name + "=" + escape(value)  
		if (lifespan != null) {
			var today=new Date();
			var expiredate = new Date();
			expiredate.setTime(today.getTime() + 1000*60*60*24*lifespan);
			cookietext += "; expires=" + expiredate.toGMTString();
		}
		if (access_path != null) { 
			cookietext += "; PATH="+access_path;
		}
		document.cookie = cookietext;
		return null
	}
	


	function deleteCookie(Name, Path) {
		setCookie(Name,"Deleted", -1, Path);
	}


	function getCookie(name) {
			  var dc = document.cookie;
			  var prefix = name + "=";
			  var begin = dc.indexOf("; " + prefix);
			  if (begin == -1) {
				  begin = dc.indexOf(prefix);
				  if (begin != 0) return null;
			  } else {
				  begin += 2;
				  var end = document.cookie.indexOf(";", begin);
				  if (end == -1) {
				  end = dc.length;
				  }
			  }
			return unescape(dc.substring(begin + prefix.length, end));
	}
	
	
	
	function cookieListtoArray(cookiename){
		var list = getCookie(cookiename);
		var array = list ? list.split(','): [];
		return array;	
	}

		
	function addtoCookieList(cookiename, cookievalue){
		var cookieArray = cookieListtoArray(cookiename);
		cookieArray.push(cookievalue);
		var arraylist = cookieArray.join();
		setCookie(cookiename , arraylist , 365, "/");
	}


	 function removefromArray(arr, item) {
	      for(var i = arr.length; i--;) {
	          if(arr[i] === item) {
	              arr.splice(i, 1);
	          }
	      }
	  }




	function removefromCookieList(cookiename, cookievalue){
		var cookieArray = cookieListtoArray(cookiename);
		
		removefromArray(cookieArray, cookievalue);

		setCookie(cookiename, cookieArray, 365, "/")

	}




	
var toggleTarget = (function () {

	var activeCount = 0;
	var minCount = null;

	var pageIdentifier = encodeURIComponent(location.pathname.substr(location.pathname.lastIndexOf('/')+1)); // added to make multiple pages to co-exist in the same folder without sharing the same cookie (Path set to a specific page is bugged on IE)
	
	var uniqueCookieName =  "activeDigest_" + pageIdentifier;
	
	var juicerLoaded = false;
	
	
	function initToggleTarget() {

		// Save preferences in cookies
		 //init
		 var initCookie = getCookie(uniqueCookieName);


		    if (!initCookie) {

      		  // do cookie doesn't exist stuff;
			  
			  var defaultDigestSelection = [];
			  
			  if(toggleDefaultOn) {
				  if(toggleDefaultOn=='all'){
					  $('.toggle-target__btn').each(function(){
						  defaultDigestSelection.push($(this).attr('href'));
						  $(this).addClass('toggle-target__btn--active');
						  activeCount++;
					  })
				  } else {
					  var toToggle = toggleDefaultOn.split(',');
					  $.each(toToggle,function(){
						  var linkToToggle = $('.toggle-target__btn').eq(this);
						  defaultDigestSelection.push(linkToToggle.attr('href'));
						  linkToToggle.addClass('toggle-target__btn--active');
						  activeCount++;
					  })
				  }
			  }

				 setCookie(uniqueCookieName, defaultDigestSelection, 365, "/");

      			 // set cookie then do the stuff below. 

      			 //.. do stuff 

		    }
		    else {
		        // do cookie exists stuff

				var  cookieArray = cookieListtoArray(uniqueCookieName);
				activeCount = cookieArray.length;

				for(var i = cookieArray.length; i--;) {


			 		if ( $('[href="'+ cookieArray[i] + '"]' ).hasClass('toggle-target__btn--active') ){

			 			//Active set in cookie and on page.

					}else{

						// Active set in cookie but not on the page. 
						// do stuff
						
						$('[href="'+ cookieArray[i] + '"]' ).addClass('toggle-target__btn--active');



					}


			    }



		    }



		
		$('.toggle-target__btn').each(function(){
			
			var $this = $(this);
			
			if($this.hasClass('toggle-target__btn--active')) {

				var $target = $($this.attr('href'));

				$target.show().removeClass('collapse');
				
				if($this.attr('href')=='#panelSocialMedia'){

					Juicer.initialize();
					juicerLoaded = true;
					
				}
			}

		});


		$('.toggle-target__btn').on('click',function(e) {
			e.preventDefault();
			
			var $this = $(this);
			var $target = $($this.attr('href'));

			if($this.hasClass('toggle-target__btn--active')) {

				//Hide panel if active panel count is more than min count
				if(minCount){
					// console.log('theres a min count');
					if(activeCount > minCount){
						// console.log('theres a min count and more active than min');

						$target.hide().addClass('collapse');
						$this.removeClass('toggle-target__btn--active');

						removefromCookieList(uniqueCookieName, $this.attr('href'));

						activeCount--;
						// console.log('hide it ', activeCount);


					} else {
						alert('Please select at least one subject');
					}
				} else {
					//Just hide panel
					// console.log('theres NO min count');

					$target.hide().addClass('collapse');
					$this.removeClass('toggle-target__btn--active');
					activeCount--;
					// console.log('hide it ', activeCount);
				}


			} else {


				$target.show().removeClass('collapse');
				$this.addClass('toggle-target__btn--active');
				
				addtoCookieList(uniqueCookieName, $this.attr('href'));
				
				if($target.attr('id') == "panelSocialMedia" && !juicerLoaded) {

					Juicer.initialize();
					juicerLoaded = true;
				
				}


				activeCount++;
				// console.log('show it ', activeCount);
			}

		});
	}
    

     
    function init(args) {
		// console.log(args);
		// console.log(minCount);
		minCount = args.minActiveTargets;
		toggleDefaultOn = args.defaultOn;
		// console.log(minCount);
		activeCount = $('.toggle-target__btn--active').length;
		// console.log(activeCount);
		
        initToggleTarget();


        

    }

    return {
        init: init
    };

})();
