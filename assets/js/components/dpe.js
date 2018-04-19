/* */

$(document).ready(function() {

/* TopNav selected item */
	var pwcselectednav = "";
    pwcselectednav = $('meta[name=pwcselectednav]').attr("content");
    $('.navbar-nav > li').each(function(i){
        if (pwcselectednav == i) {
            $(this).addClass('active'); 
        } 
    });

/* START link transform fix */
/* MG: Added back for R1.04 */
var fixloc=location.hostname;
var fixlink='';

if(fixloc!='dpe-preview.pwc.com'&&fixloc!='dpe.pwc.com'&&fixloc!='dpe-stg-preview.pwc.com'&&fixloc!='dpe-stg.pwc.com'){
    $('a').each(function(){
        if ($(this).attr('href')){
            fixlink=$(this).attr('href');
        }
        if(fixlink.indexOf('/content/pwc/')!== -1 && fixlink.indexOf('/content/pwc/script/')== -1 && fixlink.indexOf('/content/pwc/userReg/')== -1) {
            $(this).attr('href',fixlink.replace('/content/pwc/','/'));
        };
    });
};

/* END */    
/* START link transform fix */    
var socialitem='';
var socialfix='';
if(fixloc!='dpe-preview.pwc.com'&&fixloc!='dpe.pwc.com'&&fixloc!='dpe-stg-preview.pwc.com'&&fixloc!='dpe-stg.pwc.com'){
    $('#socialshare a img').each(function(){
        socialitem=$(this).attr('src');
        if(socialitem.indexOf('share_facebook')!== -1) {
            socialfix = 'http://www.facebook.com/share.php?u=' + escape(window.location);
            $(this).parent().attr('href',socialfix);
        };
        if(socialitem.indexOf('share_googleplus')!== -1) {
            socialfix = 'https://plus.google.com/share?url=' + escape(window.location);
            $(this).parent().attr('href',socialfix);
        };
        if(socialitem.indexOf('share_digg')!== -1) {
            socialfix = 'http://digg.com/submit?phase=2&url=' + escape(window.location);
            $(this).parent().attr('href',socialfix);
        };
        if(socialitem.indexOf('share_twitter')!== -1) {
            socialfix = 'http://twitter.com/home?status=' + escape(window.location);
            $(this).parent().attr('href',socialfix);
        };
        if(socialitem.indexOf('share_linked')!== -1) {
            socialfix = 'http://www.linkedin.com/shareArticle?mini=true&url=' + escape(window.location);
            $(this).parent().attr('href',socialfix);
        };
        if(socialitem.indexOf('share_evernote')!== -1) {
            socialfix = 'http://www.evernote.com/clip.action?url=' + escape(window.location);
            $(this).parent().attr('href',socialfix);
        };
        if(socialitem.indexOf('share_xing')!== -1) {
            socialfix = 'http://www.xing.com/app/user?op=share;url=' + escape(window.location);
            $(this).parent().attr('href',socialfix);
        };
    });
};

	$("head link[rel=stylesheet]").each(function() {
		parseStyle($(this).attr("href"));
	});

    $('.modal').on('hidden.bs.modal', function () {
        var iframe = $(this).find('iframe'); 
        var src = iframe.attr('src');
        iframe.attr('src', '');
        iframe.attr('src', src);
    });

/* END */

    /* START MARK DEBUG */
    window.addEventListener("orientationchange", function() {
        //console.log("Orientation: " & window.orientation);
        resizepwccarousel();
    }, false);
    /*
    $(window).resize(function(){
		//console.log('resize');
        resizepwccarousel();
    });
    */

//var mobilecarousel = '<div class="items">';
//$("#pwccarousel .items .slide .feature").each(function( index ) {
//    mobilecarousel += '<div class="slide">' + $(this).outerHTML() + '</div>';
//});
//mobilecarousel += '</div><div class="pwccarouselfooter"><a class="jcarousel-prev browse" href="#" title="Previous"></a><div class="jcarousel-pagination"></div><a class="jcarousel-next browse" href="#" title="Next"></a></div>';

//    var enableautoplay = false;
//   if ($('#pwccarousel').hasClass('enableautoplay')) {
//      enableautoplay = true;
//   }
//	var homeslider = $('#pwccarousel');

//if ($('#pwccarousel').hasClass('authorfalse')) {
//   	homeslider
//    	.on('jcarousel:reload jcarousel:create', function () {
//        	var thecarousel = $(this),width = thecarousel.innerWidth();

//                if (($('#pwccarousel').hasClass('home')) && (width < 980)) {
//					homeslider.html(mobilecarousel);
//	                $('#pwccarousel').addClass('mobile');
//                    $("#pwccarousel .items .slide .feature.f100").css({"width": width + 'px'});
//	            }
//                if (($('#pwccarousel').hasClass('landing')) && (width < 768)) {
//					homeslider.html(mobilecarousel);
//	                $('#pwccarousel').addClass('mobile');
//                    $("#pwccarousel .items .slide .feature.f100").css({"width": width + 'px'});
//	            }
//	            if (width <= 450) {
//	                $('#pwccarousel').addClass('mobile2');
//	                //thecarousel.jcarousel('items').css('width', width + 'px');
//                    $("#pwccarousel .items .slide").css({"width": width + 'px'});
//	            }

//		})
//		.jcarousel({
//			wrap: 'circular'
//		})
//    	.jcarouselAutoscroll({
//			interval: 4000,
//			target: '+=1',
//			autostart: enableautoplay
//		});
//}


	//$('#pwccarousel .jcarousel-prev').jcarouselControl({
	//	target: '-=1',
	//	carousel: homeslider
	//});
	//$('#pwccarousel .jcarousel-next').jcarouselControl({
	//	target: '+=1',
	//	carousel: homeslider
	//});

	//$('#pwccarousel .jcarousel-pagination').jcarouselPagination({ carousel: homeslider });

	//$('#pwccarousel .jcarousel-pagination')
	//	.on('jcarouselpagination:active', 'a', function() {
	//		$(this).addClass('active');
	//	})
	//	.on('jcarouselpagination:inactive', 'a', function() {
	//		$(this).removeClass('active');
	//});

    //var itemcount = 0;
    //$("#pwccarousel .items .slide").each(function(index) {
    //    itemcount = index + 1;
    //});
    //if (itemcount==1) {
    //    $('#pwccarousel').jcarouselAutoscroll('stop');
    //    $("#pwccarousel").addClass("singleslide");
    //}
    //$("#pwccarousel").click(function(){ $('#pwccarousel').jcarouselAutoscroll('stop'); });
    //$("#pwccarousel > .pwccarouselfooter > a").click(function(){ $('#pwccarousel').jcarouselAutoscroll('stop'); });

    /* END MARK DEBUG */


/* Start TVH */

  	//var _slideID = jQuery.getUrlVar('slide_id');
	//	var _autoplay = true;
	//	if(typeof _slideID != 'undefined'){
	//			 _slideID = _slideID - 1;
	//			 _autoplay = false;
	//	} else _slideID = 0;

	//	var _tabID = jQuery.getUrlVar('tab_id');
	//	if(typeof _tabID != 'undefined'){
	//		_tabID = _tabID - 1;
	//	} else _tabID = 0;
  
	///* STANDARD: source-carousels-js.txt */
	//if ($(".media-carousel-content").length) { 
	//	$(".media-carousel-content").scrollable(); 
	//}

	///* STANDARD:	source-feature-example-1-head.txt */
	//if ($("#media-feature-tabs-1").length) { 
	//	$(function() {
	//		$("#media-feature-tabs-1").tabs("#media-feature-1 > .media-feature-slide", {
	//			effect: 'default', 
	//			fadeOutSpeed: 'slow', 
	//			rotate: true,
	//			initialIndex: _slideID 
	//		}).slideshow({ 
	//			autopause: true, 
	//			autoplay: _autoplay, 
	//			clickable: false, 
	//			interval: 3000 
	//		}); 
	//		$("#media-feature-tabs-1 > a").click(function(){ 
	//			$("#media-feature-tabs-1").data("slideshow").stop(); 
	//		}); 
	//		$("#media-feature-1").click(function(){ 
	//			$("#media-feature-tabs-1").data("slideshow").stop(); 
	//		}); 
	//	});  
	//}

	///* STANDARD: source-feature-example-2-head.txt */
	//if ($("#media-feature-tabs-2").length) { 
	//$("#media-feature-tabs-2").tabs("#media-feature-2 > .media-feature-slide", { 
	//	effect: 'fade', 
	//	fadeOutSpeed: 'slow', 
	//	rotate: true,
	//	initialIndex: _slideID
	// }).slideshow({ 
	//	autopause: true, 
	//	autoplay: _autoplay,
	//	clickable: false, 
	//	interval: 3000 
	//	});               
	//	$("#media-feature-tabs-2 > a").click(function(){ 
	//		$("#media-feature-tabs-2").data("slideshow").stop(); 
	//	}); 
	//	$("#media-feature-2").click(function(){ 
	//		$("#media-feature-tabs-2").data("slideshow").stop(); 
	//	});
	//}

	///* STANDARD: mediabox-component-source.txt */
	//if ($("#mediabox .media-carousel-content").length) { 
	//	$("#mediabox .media-carousel-content").scrollable({ 
	//		circular: true, 
	//		mousewheel: true,
	//		onSeek: function() {
	//			switch (this.getIndex()) {
	//				case 0:
	//					$('#media-module-bg').css("background-color","#eb8c00");
	//					break;
	//				case 1:
	//					$("#media-module-bg").css("background-color","#dc6900");
	//					break;
	//				case 2:
	//					$("#media-module-bg").css("background-color","#e0301e");
	//					break;
	//				case 3:
	//					$("#media-module-bg").css("background-color","#db536a");
	//					break;
	//				case 4:
	//					$("#media-module-bg").css("background-color","#a32020");
	//					break;
	//				case 5:
	//					$("#media-module-bg").css("background-color","#602320");
	//					break;
	//			}
	//		}
	//	}).navigator({
	//		navi: "#media-slideshow-tabs",
	//		naviItem: 'a',
	//		activeClass: 'current',
	//		history: false
	//	}).autoscroll({ 
	//		autoplay: true,
	//		interval: 5000,
	//		autopause: true
	//	});
	//	$("#media-slideshow-tabs").fadeIn();
	//	$("#media-slideshow-tabs > a").click(function(){ 
	//		$(".media-carousel-content").data("scrollable").stop(); 
	//	}); 
	//	$(".media-carousel-content > .items").click(function(){ 
	//		$(".media-carousel-content").data("scrollable").stop(); 
	//	}); 
	//}

	///* STANDARD: source-tabs-example-1.txt */
	//if ($("ul.media-tabs").length) { 
	//	$("ul.media-tabs").tabs("> .media-pane",{effect:'fade', initialIndex: _tabID});
	//}

	///* STANDARD: source-tabs-example-2.txt */
	//if ($("ul.media-tabs-doubleheight").length) { 
	//	$("ul.media-tabs-doubleheight").tabs("> .media-pane",{effect:'fade', initialIndex: _tabID});
	//}

	/* STANDARD: source-tabs-example-3.txt */
	/* Handled with above two */
/* End TVH */


/* START SliderMobile */
/* END SliderMobile */

    /* Adaptile mobile support */
    var dpecountry = $('meta[name=pwcCountry]').attr("content");
    var dpemobile = "false";
    var envs = ["ExtraSmall", "Small", "Medium", "Large"];
    var envValues = ["xs", "sm", "md", "lg"];
    var $el = $('<div>');
    $el.appendTo($('body'));
    for (var i = envValues.length - 1; i >= 0; i--) {
        var envVal = envValues[i];
        $el.addClass('hidden-'+envVal);
        if ($el.is(':hidden')) {
            $el.remove();
            if ((envValues[i] == "xs") || (envValues[i] == "sm")) {
				dpemobile = "true";
           	}
            //return envs[i]
            break
        }
    };
    if ((dpecountry == "de") || (dpecountry == "il")) {
		dpemobile = "false";
        $('meta[name="viewport"]').prop('content', '');
    }
    if (dpemobile == "true") {
        $('#pwcdesktop').attr('id','pwcmobile');
    }


}); 

function resizepwccarousel() {

    if ($("#pwccarousel").length) {
    	window.location.reload(false);
    }
}

/* TEMP media fix */
/* 101-698 */
(function($){   
jQuery.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return jQuery.getUrlVars()[name];
  }
});

	

  $.fn.embedMedia = function(t) {  
	var _mob = false;
	/*
	var jsdevice = '';
	jsdevice = $('body').attr('id');
	(jsdevice == 'pwcmobile' ) ? _mob = true : _mob = false;
	*/
	
	//(jQuery.getUrlVar('mobiletvh') == '1' ) ? _mob = true : _mob = false;
	
  //Determine if media should use UK's servers
	var _mediaPageURL = window.location.href.toString();
	var _mediaURLPrefix = "download.pwc.com";
	if (_mediaPageURL.search(".co.uk") >=0 				|| 
		_mediaPageURL.search("/uk/en") >=0 				||
		_mediaPageURL.search("/en_UK/uk") >=0 			||
		_mediaPageURL.search("/en_uk/uk") >=0 )
	{
		_mediaURLPrefix = "pwc-uk.edgesuite.net/pwc";
	}
	if (_mediaPageURL.search(".co.uk/careers") >=0 				|| 
		_mediaPageURL.search("/uk/en/careers") >=0 				||
		_mediaPageURL.search("/en_UK/uk/careers") >=0 			||
		_mediaPageURL.search("/en_uk/uk/careers") >=0 )
	{
		_mediaURLPrefix = "download.pwc.com";
	}
  
  	//PATH TO ASSETS
	//var mediaSwfPath 	= "";
	//var imagePath		= "";
	var mediaSwfPath 	= "/content/pwc/script/network/media/";
	var imagePath		= "/etc/designs/pwc/css_common/image/";
	
	
  	
		//START each media-embed
			
		//DEFAULT VALUES DO NOT EDIT
		var mediaFlashObjectId		= "flash_"+t;		//The identifier if this is a flash object
		var mediaSrc 				= ""; 		//relative source of media (audio/video/image)
		var mediaTitle 				= ""; 		//Basic title to display below overlay
		var mediaWidth				= "540"; 	//width of media
		var mediaHeight				= "300"; 	//height of media 		
		var mediaTrack				= "true"; 	//webtrends
		var mediaHd					= "false";	//HD video - string gets passed to flash player
		var mediaMobile				= false;	//mobile backup video
		var mediaPoster				= "";		//Still image for audio and HTML5 player
		var mediaFlashvars			= "";		//Used for regular flash movies 
		var mediaStreaming 			 = "false";   //Override default streaming behavior
		var mediaColor				= "orange"; //one of eight choices
		var mediaAltFlashID			= null; 		//a div section used for alternate content in case no flash
		var mediaActivateNow		= false;			//start video immediately or not
		var mediaCuepoints			= "";		//relative path to a cuepoints xml file
		
		if ($(this).attr("media-objectid"))		{ 	mediaFlashObjectId 		= $(this).attr("media-objectid"); 		} 	
		if ($(this).attr("media-title")) 		{ 	mediaTitle 		= $(this).attr("media-title"); 		} 		
		if ($(this).attr("media-src"))			{	mediaSrc 		= $(this).attr("media-src");		} 
		if ($(this).attr("media-width")) 		{	mediaWidth 		= $(this).attr("media-width");		}
		if ($(this).attr("media-height"))	 	{	mediaHeight 	= $(this).attr("media-height");		}
		if ($(this).attr("media-track")) 		{	mediaTrack 		= $(this).attr("media-track");		}
		if ($(this).attr("media-poster")) 		{	mediaPoster 	= $(this).attr("media-poster");		} 
		if ($(this).attr("media-hd")) 			{	mediaHd 		= $(this).attr("media-hd"); 		} 
		if ( ($(this).attr("media-mobile")) &&  ($(this).attr("media-mobile") == "true") ) {	mediaMobile	= true;	} 
		if ( ($(this).attr("media-mobile")) &&  ($(this).attr("media-mobile") == "mobile mobileformat") ) {	mediaMobile	= true;	} 
		if ($(this).attr("media-flashvars")) 	{ 	mediaFlashvars	= "?" + $(this).attr("media-flashvars"); 	} 
		if ($(this).attr("media-streaming")) 	{ 	mediaStreaming	= $(this).attr("media-streaming"); 	} 
		if ($(this).attr("media-color")) 		{ 	mediaColor		= $(this).attr("media-color"); 	} 
		if ($(this).attr("media-alternate-id")) { 	mediaAltFlashID	= $(this).attr("media-alternate-id"); 	} 
		if ( ($(this).attr("media-activatenow")) && ($(this).attr("media-activatenow") == "true") ) 	{ 	mediaActivateNow	= true; 	} 
		if ($(this).attr("media-cuepoints")) 	{ 	mediaCuepoints	= $(this).attr("media-cuepoints"); 	} 
		
		//resize for mobile
		if (_mob) {
			var mw = parseInt(mediaWidth);
			var mh = parseInt(mediaHeight);
			var aspectratio = mw / mh;
			mh = 310 / aspectratio;
			mediaWidth = "310";
			mediaHeight = String(mh);
		}
			
		
		
		//reformat mediatitle
		var reformattedMediaTitle = mediaTitle.replace(/[\'\?]/g, "");
		//hide the alternate-id
		(mediaAltFlashID) ? $(mediaAltFlashID).css("display", "none") : undefined;
		
			
		//check for file extension
		var mediaType 		= "";
		var fileExtension 	= "";
		var buttonSrc		= null; 
		fileExtension		= mediaSrc.substring(mediaSrc.lastIndexOf(".") + 1,mediaSrc.length).toLowerCase();
		if ( (fileExtension == "jpeg") || (fileExtension == "jpg") || (fileExtension == "gif") || (fileExtension == "png")) {
			mediaType 		= "image";
		} else if ( fileExtension == "mp3" ) {
			buttonSrc		= "media-audio-button.jpg";
			mediaType 		= "audio";
			
		} else if ( fileExtension == "swf" ) {
			mediaType		= "flash";
		} else {
			mediaType	 	= "video";
			buttonSrc 		= "media-play-button.jpg";
		}
		
		//Set mobile version flag
		var showmobileVersion = false;
		if ((mediaType == "audio") && (flashembed.isSupported([10,0]) == false)) {
			showmobileVersion = true;
		} else if ( (mediaType == "video") && (flashembed.isSupported([10,0]) == false) && (mediaMobile)) {
			showmobileVersion = true;
		}
					 
		if ((showmobileVersion == true)) {  //START mobile
			
			var newHtml = "";
			//Create HTML5 player with plain video link as fallback
			switch (mediaType) {
				case "video":
					newHtml 	= "<video poster='"+mediaPoster+"' media-playbutton='"+imagePath+buttonSrc+"' src='http://"+_mediaURLPrefix + mediaSrc+".mp4' controls height='"+mediaHeight+"' width='"+mediaWidth+"' onerror='ShowThumb($(this),false);'><a href='http://" + _mediaURLPrefix + mediaSrc+".mp4'><img style='background-color: rgb(0,0,0)' src='"+mediaPoster+"' width='"+mediaWidth+"' height='"+mediaHeight+"' alt='Play media' /><img style='position:relative;top:-24px;left:0px;' src='"+imagePath+buttonSrc+"' alt='Play button' /></a></video>"
				break;
				
				case "audio":
					newHtml	= "<a href='http://" + _mediaURLPrefix + mediaSrc+"'><img style='background-color: rgb(0,0,0)' src='"+mediaPoster+"' width='"+mediaWidth+"' height='"+mediaHeight+"' alt='Play media' /><img style='position:relative;top:0px;left:-"+mediaWidth+"px;' src='"+imagePath+buttonSrc+"' alt='Play button' /></a>"
		
					
				break;
					
			}
			$(this).html(newHtml);
			
		} else {
			//START Can show flash
			if (flashembed.isSupported([10,0])){ 
			
				//START flashembed generic flash
				if ( mediaType == "flash" ){
					
					$(this).flashembed({
						//params
						src					: mediaSrc + mediaFlashvars, 
						version				: [10, 60], //requires version 10.1
						wmode				: 'transparent',
						allowscriptaccess	: 'always',
						allowfullscreen		: 'true',
						bgcolor				: '#FFFFFF',
						expressInstall		: mediaSwfPath+'expressinstall.swf',
						width				: mediaWidth,
						height				: mediaHeight,
						id					: mediaFlashObjectId
						});
						
						 //END flashembed generic player
					//$(this).html(regularFlashHtml);
					
				}  else {
					
					$(this).flashembed({
						//params
						src					: mediaSwfPath+'pwcmedia.swf', 
						
						version				: [10, 60], //requires version 10.1
						expressInstall		: mediaSwfPath+'expressinstall.swf',
						wmode				: 'transparent',
						allowscriptaccess	: 'always',
						allowfullscreen		: 'true',
						width				: mediaWidth,
						height				: mediaHeight,
						id					: mediaFlashObjectId
						}, {
						media				: mediaSrc,
						color				: mediaColor,
						player				: mediaSwfPath+'pwcmediaplayer.swf',
						instantplay			: mediaActivateNow,
						hd					: mediaHd,
						videowidth			: mediaWidth,
						videoheight			: mediaHeight,
						webtrends			: mediaTrack,
						title				: reformattedMediaTitle,
						poster				: mediaPoster,
						stream 				: mediaStreaming,
						cuepoints			: mediaCuepoints,
						mediadomain			: _mediaURLPrefix
					}); //END flashembed media player
					
				//	$(this).html(flashMediaPlayerHtml);
					
				} //END flashembed generic flash ELSE
				
				
			} else //END flash is supported
			
			{	//BEGIN alternate flash content
				if (mediaAltFlashID) {
					
					$(this).html($("#"+mediaAltFlashID).html());
				} else {
					var altmediacontent = "<div align='center' style='padding:10px;' ><p>You need Adobe Flash to view this.</p><a href='http://get.adobe.com/flashplayer/' target='_blank' ><img src='"+imagePath+"media-get-flash.jpg' /></a></div>";
					$(this).html(altmediacontent);
				}
				
			}  //END alternate flash content
					
		} //END mobile or flash
	  
		
  };
})(jQuery);

 
 
 
 
 
 
 
 //Overlay method
  (function($){  
  $.fn.overlayMedia = function(p) { 


  	var $this = $(this);
  
  	var _mob = false;
	/*
	var jsdevice = '';
	jsdevice = $('body').attr('id');
	(jsdevice == 'pwcmobile' ) ? _mob = true : _mob = false;
	*/
	
	//(jQuery.getUrlVar('mobiletvh') == '1' ) ? _mob = true : _mob = false;
  
  //Determine if media should use UK's servers
	var _mediaPageURL = window.location.href.toString();
	var _mediaURLPrefix = "download.pwc.com";
	if (_mediaPageURL.search(".co.uk") >=0 				|| 
		_mediaPageURL.search("/uk/en") >=0 				||
		_mediaPageURL.search("/en_UK/uk") >=0 			||
		_mediaPageURL.search("/en_uk/uk") >=0 )
	{
		_mediaURLPrefix = "pwc-uk.edgesuite.net/pwc";
	}
	if (_mediaPageURL.search(".co.uk/careers") >=0 				|| 
		_mediaPageURL.search("/uk/en/careers") >=0 				||
		_mediaPageURL.search("/en_UK/uk/careers") >=0 			||
		_mediaPageURL.search("/en_uk/uk/careers") >=0 )
	{
		_mediaURLPrefix = "download.pwc.com";
	}
  
  	 //PATH TO ASSETS
	//var mediaSwfPath 	= "";
	//var imagePath		= "";
	var mediaSwfPath 	= "/content/pwc/script/network/media/";
	var imagePath		= "/etc/designs/pwc/css_common/image/";
	
		//START each media-overlay
		if ($("#pwc-media-overlay").length){ } else	
		{
			$("<div class='expanding_overlay' id='pwc-media-overlay'><div id='media-player'> </div><div id='media-details' style='font-size:small' ></div></div>").appendTo('body'); 
		}
		
		
		//DEFAULT VALUES DO NOT EDIT
		var mediaFlashObjectId		= "flash_"+p;		//The identifier if this is a flash object
		var mediaSrc 				= ""; 		//relative source of media (audio/video/image)
		var mediaTitle 				= ""; 		//Basic title to display below overlay
		var mediaWidth				= "540"; 	//width of media
		var mediaHeight				= "300"; 	//height of media 		
		var mediaTrack				= "true"; 	//webtrends
		var mediaDetailsId			= null;		//Div ID for raw HTML content in lieu of title
		var mediaHd					= "false";	//HD video - string gets passed to flash player
		var mediaMobile				= false;	//mobile backup video
		var mediaPoster				= "";		//Still image for audio and HTML5 player
		var mediaFlashvars			= "";		//Used for regular flash movies 
		var mediaStreaming  		= "false";   //Override default streaming behavior
		var mediaActivateNow		= false;	//Immediately open the modal or not (when created dynamically)
		var mediaColor				= "orange"; //Color family (8 choices)
		var mediaAltFlashID			= null; 		//a div section used for alternate content in case no flash
		var mediaCuepoints			= "";		//relative path to a cuepoints xml file
		var mediaType				= "";		//added Oct 17 2011- force a media type (helpful with external ajax)
		
		if ($(this).attr("media-objectid"))		{ 	mediaFlashObjectId 		= $(this).attr("media-objectid"); 		} 	
		if ($(this).attr("media-title")) 		{ 	mediaTitle 		= $(this).attr("media-title"); 		} 		
		if ($(this).attr("media-src"))			{	mediaSrc 		= $(this).attr("media-src");		} 
		if ($(this).attr("media-width")) 		{	mediaWidth 		= $(this).attr("media-width");		}
		if ($(this).attr("media-height"))	 	{	mediaHeight 	= $(this).attr("media-height");		}
		if ($(this).attr("media-track")) 		{	mediaTrack 		= $(this).attr("media-track");		}
		if ($(this).attr("media-poster")) 		{	mediaPoster 	= $(this).attr("media-poster");		} 		
		if ($(this).attr("media-details-id")) 	{	mediaDetailsId 	= $(this).attr("media-details-id");	}
		if ($(this).attr("media-hd")) 			{	mediaHd 		= $(this).attr("media-hd"); 		} 
		if ( ($(this).attr("media-mobile")) &&  ($(this).attr("media-mobile") == "true") ) {	mediaMobile	= true;	} 
		if ( ($(this).attr("media-mobile")) &&  ($(this).attr("media-mobile") == "mobile mobileformat") ) {	mediaMobile	= true;	} 
		if ($(this).attr("media-flashvars")) 	{ 	mediaFlashvars	= "?" + $(this).attr("media-flashvars"); 	} 
		if ($(this).attr("media-streaming")) 	{ 	mediaStreaming	= $(this).attr("media-streaming"); 	} 
		if ($(this).attr("media-color")) 		{ 	mediaColor		= $(this).attr("media-color"); 	} 
		if ( ($(this).attr("media-activatenow")) && ($(this).attr("media-activatenow") == "true") ) 	{ 	mediaActivateNow	= true; 	} 
		if ($(this).attr("media-alternate-id")) { 	mediaAltFlashID	= $(this).attr("media-alternate-id"); 	} 
		if ($(this).attr("media-cuepoints")) 	{ 	mediaCuepoints	= $(this).attr("media-cuepoints"); 	} 
		if ($(this).attr("media-type")) 		{ 	mediaType		= $(this).attr("media-type"); 		} 
		
		//resize for mobile
		if (_mob) {
			var mw = parseInt(mediaWidth);
			var mh = parseInt(mediaHeight);
			var aspectratio = mw / mh;
			mh = 310 / aspectratio;
			mediaWidth = "310";
			mediaHeight = String(mh);
		}
		
		//reformat mediatitle
		var reformattedMediaTitle = mediaTitle.replace(/[\'\?]/g, "");
		//hide the alternate-id
		(mediaAltFlashID) ? $("#"+mediaAltFlashID).css("display", "none") : undefined;
		//hide details ID if it exists
		(mediaDetailsId) ? $("#"+mediaDetailsId).css("display", "none") : undefined;
		
  		
				
		//check for file extension
		var fileExtension 	= "";
		fileExtension		= mediaSrc.substring(mediaSrc.lastIndexOf(".") + 1,mediaSrc.length).toLowerCase();
		if (mediaType != "") {
			//use the user-assigned mediaType
		} else if (mediaSrc.charAt(0) == "#") {
			mediaType 		= "html";
		} else if ( (fileExtension == "jhtml") || (fileExtension == "html") || (fileExtension == "htm") ) {
			mediaType 		= "external";
		}else if ( (fileExtension == "jpeg") || (fileExtension == "jpg") || (fileExtension == "gif") || (fileExtension == "png")) {
			mediaType 		= "image";
		} else if ( fileExtension == "mp3" ) {
			mediaType 		= "audio";					
		} else if ( fileExtension == "swf" ) {
			mediaType		= "flash";
		} else {
			mediaType 	= "video";
		}
		
		
		//Set mobile version flag
		var showmobileVersion = false;
		if ((mediaType == "audio") && (flashembed.isSupported([10,0]) == false)) {
			showmobileVersion = true;
		} else if ( (mediaType == "video") && (flashembed.isSupported([10,0]) == false) && (mediaMobile)) {
			showmobileVersion = true;
		}
		
		if ((showmobileVersion) && (mediaType == "audio")) { //if audio - jump right to audio
			
			$(this).click(function(){
				//redirect to media
				document.location = "http://" + _mediaURLPrefix + mediaSrc;

			});
	
		} else { //create standard overlay
		
			$(this).overlay({  //START overlay
			
				target					: '#pwc-media-overlay',
				//effect 					: 'apple',
				speed					: 1,
				closeOnClick 			: true,
				closeonEscape			: true,
				fadeInSpeed				: 0,
				fadeOutSpeed			: 0,
				zIndex					: 20000,	
				fixed					: false,
				top						: '8%',						
				mask					: {
					color				: '#ffffff',
					loadSpeed			: 0,
					opacity				: 0.85
				},
				load					: mediaActivateNow,
				onClose					: function() {
						//reset some styles 
						if (mediaType == "html") {
							//if it's inline we move the div back to body DOM and hide it
							$(mediaSrc).css('display','none');
							$(mediaSrc).appendTo("body");
							
						}
						$("#media-player").css("background-color","");
						$("#media-player").css("border","");
						
						$("#media-player").empty();
										},
				onLoad					: function() {
						//hide the background image for odd sizes
 
						if ( (mediaType == "external") || (mediaType == "html") || (mediaType == "image") || (mediaType == "flash") || (mediaHeight == "45" ) ) {
							$("img[src*=media-transparent]").attr("id","media-transparent-background"); //assign ID to transparent background
							$("#media-transparent-background").fadeOut('fast');
							
						}
						
						//for new multiplayer, wait for modal to finish before building multiplayer HTML
						//$modalAOK = true;
						$("#pwc-media-overlay").trigger("modalready");
						
					
										},
				onBeforeClose			: function() {

					
										},
				onBeforeLoad			: function() { //START onBeforeLoad of overlay
					
          				$mediaTrigger = $this;
						this.getOverlay().appendTo('body'); //IE7 fix for z-index issue
						var formattedtitle = "<h3>"+mediaTitle+"</h3>";
						$("#media-details").css("width", (mediaWidth+"px"));
						$("#media-details").css("z-index", "20020");
						//use the title or inline content div for details
						(mediaDetailsId) ? $("#media-details").html($("#"+mediaDetailsId).html()) : $("#media-details").html(formattedtitle);
						
						//no poster image for non-audio media
						(mediaType != "audio" ) ? mediaPoster = "" : undefined;
						 
						//START file extension conditional
						switch (mediaType) {
							
							case "external":
								
								$("#media-player").css("background-color","#FFFFFF");
								$("#media-player").css("border","1px solid #968c6d");
								
								var externalHtml = "<iframe type='text/html' width='"+mediaWidth+"' height='"+mediaHeight+"' src='"+mediaSrc+"' frameborder='0' style='overflow-x:hidden;overflow-y:scroll;' scrolling='yes'></iframe>";
								$("#media-player").html(externalHtml);
								

								break;
							
							case "image":
								//image
								
								var imageHtml = "<img src=\""+mediaSrc+ "\" alt=\""+mediaTitle+"\" width=\""+ mediaWidth +"\" height=\""+ mediaHeight +"\" />";
							
								$("#media-player").html(imageHtml);
								break;
								
							case "html":
								
								var tempContentDiv = "";
								if (mediaSrc.search('youtube') >= 0) { //remove padding for overlay youtube vids and create youtube iframe embed
									var ytheight = 394;
									var ytwidth = 700;
									var ytid = "yt-"+p;
									if ($(mediaSrc).attr('height') != undefined) {
										ytheight = $(mediaSrc).attr('height');
									}
									if ($(mediaSrc).attr('width') != undefined) {
										ytwidth = $(mediaSrc).attr('width');
									}
									if ($(mediaSrc).attr('id') != undefined) {
										ytid = $(mediaSrc).attr('id');
									}
									
									tempContentDiv = "<div id='media-inline-html-div' style='overflow-y:auto;width:"+mediaWidth+"px;height:"+mediaHeight+"px;padding:0;'><iframe id='"+ ytid +"' frameborder='0' height='" + ytheight + "' src='"+ $(mediaSrc).attr('src') +"' width='" + ytwidth + "'></iframe></div>";
									$("#media-player").append(tempContentDiv);
									$("#media-inline-html-div").css('padding','0');
									$("#media-player").css("background-color","#000000");
									$("#media-player").css("border","1px solid #000000");
									
									
									
									
								} else {
									tempContentDiv = "<div id='media-inline-html-div' style='overflow-y:auto;width:"+mediaWidth+"px;height:"+mediaHeight+"px;padding:0px 10px 10px 10px;'></div>";
									$("#media-player").append(tempContentDiv);
									$("#media-player").css("background-color","#FFFFFF");
									$("#media-player").css("border","1px solid #cccccc");
									$(mediaSrc).appendTo("#media-inline-html-div");
									$(mediaSrc).css('display','block'); 
								}

								
								
								//
								//set some styles 
								
								
								break;
							
								
								
							default:
							//START Can show flash
							if (flashembed.isSupported([10,0])){ 
								
								//START flashembed generic flash
								if ( mediaType == "flash" ){
									//set some styles 
									$("#media-player").css("background-color","#FFFFFF");
									$("#media-player").css("border","1px solid #968c6d");
									//START flashembed generic player
									flashembed("media-player", {
										//params
										src					: mediaSrc + mediaFlashvars, 
										version				: [10, 60], //requires version 10.1
										wmode				: 'transparent',
										allowscriptaccess	: 'always',
										allowfullscreen		: 'true',
										bgcolor				: '#FFFFFF',
										expressInstall		: mediaSwfPath+'expressinstall.swf',
										width				: mediaWidth,
										height				: mediaHeight,
										id					: mediaFlashObjectId
										}); //END flashembed generic player
									
								}  else {
									$("#media-player").css("border","1px solid #968c6d");
									$("#media-player").css("border-bottom","none");
																		
									//START flashembed media player
									flashembed("media-player", {
										//params
										src					: mediaSwfPath+'pwcmedia.swf', 
										expressInstall		: mediaSwfPath+'expressinstall.swf',
										version				: [10, 60], //requires version 10.1
										wmode				: 'transparent',
										allowscriptaccess	: 'always',
										allowfullscreen		: 'true',
										width				: mediaWidth,
										height				: mediaHeight,
										id					: mediaFlashObjectId
										}, {
										media				: mediaSrc,
										color				: mediaColor,
										player				: mediaSwfPath+'pwcmediaplayer.swf',
										instantplay			: 'true',
										hd					: mediaHd,
										videowidth			: mediaWidth,
										videoheight			: mediaHeight,
										webtrends			: mediaTrack,
										title				: reformattedMediaTitle,
										poster				: mediaPoster,
										stream				: mediaStreaming,
										cuepoints			: mediaCuepoints,
										mediadomain			: _mediaURLPrefix
									}); //END flashembed media player
								} //END flashembed generic flash
										
									
							} else {
								
								//show mobile content if activated, and if it's a video
								if ((showmobileVersion) && (mediaType == "video")) { 
									//HTML5
									
									var newHtml 	= "<video poster='"+mediaPoster+"' autoplay src='http://" + _mediaURLPrefix + mediaSrc+".mp4' controls height='"+mediaHeight+"' width='"+mediaWidth+"' onerror='ShowThumb($(this),true);'>You need Adobe Flash or HTML5 to view this content</video>"
									$("#media-player").html(newHtml);
								
								} else {
									
									if (mediaAltFlashID) {
										$("#media-player").html("<div align='center' style='padding:10px;background-color:#ffffff' >"+$("#"+mediaAltFlashID).html()+"</div>");
									} else {
										var altmediacontent = "<div align='center' style='padding:10px;background-color:#ffffff' ><p>You need Adobe Flash to view this.</p><a href='http://get.adobe.com/flashplayer/' target='_blank' ><img src='"+imagePath+"media-get-flash.jpg' /></a></div>";
										$("#media-player").html(altmediacontent);
									}
								}
							} //END Can show flash
							
						}
							
						
		
		
						 
				
				} //END onBeforeLoad of overlay
							
		
			}) //END overlay

		} //END mobile redirect OR overlay 





  }
 })(jQuery); 


function appendStyleSheet(url) {
	$('head').append('<link rel="stylesheet" type="text/css" href="' + url + '">');
}

function parseStyle(url) {
    var logic = {
        "css_common/css/tangerine.css": function(color) { appendStyleSheet("/content/pwc/script/network/colour/" + color); },
        "css_common/css/orange.css": function(color) { appendStyleSheet("/content/pwc/script/network/colour/" + color); },
        "css_common/css/red.css": function(color) { appendStyleSheet("/content/pwc/script/network/colour/" + color); },
        "css_common/css/rose.css": function(color) { appendStyleSheet("/content/pwc/script/network/colour/" + color); },
        "css_common/css/burgundy.css": function(color) { appendStyleSheet("/content/pwc/script/network/colour/" + color); },
        "css_common/css/maroon.css": function(color) { appendStyleSheet("/content/pwc/script/network/colour/" + color); },
        "css_common/css/black.css": function(color) { appendStyleSheet("/content/pwc/script/network/colour/" + color); }
    }

    for(var k in logic) {
        if(url.indexOf(k) !== -1) {
            logic[k](k.substring(k.lastIndexOf('/') + 1));
            return;
        }
    }
}

/* MG: PR-1130 */
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
$(document).ready(function() {

	if ($("ul.nav.nav-tabs").length) {

		var thetab = $.urlParam('opentab');
		var tabcount = 1;

		$('.nav-tabs li').each(function(){
			if(thetab == tabcount) {
				$(this).children('a').tab('show');
			}
			tabcount ++;
		});

	}

});
