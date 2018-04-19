/* MG: parallax.min.js */
/*
 Copyright (C) 2013 Ziad Saab ziad(dot)saab(at)gmail(dot)com
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(e){var t=function(t){this.options=t;this.vendor_prefixes=["webkit","moz","o","ms"];this.num_vendor_prefixes=this.vendor_prefixes.length;var n=function(e){var t=["Webkit","Moz","ms","O"];var n=t.length;var r=window.document.createElement("parallax");if(r.style[e]!==undefined){return true}e=e.replace(/./,function(e){return e.toUpperCase()});for(var i=0;i<n;i++){var s=t[i]+e;if(r.style[s]!==undefined){return true}}return false};this.has_3dtransforms=n("perspective");if(this.has_3dtransforms&&n("WebkitPerspective")){var r=e('<div><style type="text/css">@media (transform-3d),(-webkit-transform-3d) {#parallax-3dtest {position: absolute;left: 9px;height: 5px;margin: 0;padding: 0;border: 0;}</style><div id="parallax-3dtest"></div></div>').appendTo("body");var i=e("#parallax-3dtest");this.has_3dtransforms=i.height()==5&&i.offset().left==9;r.remove()}this.has_2dtransforms=n("transform")};e.extend(t.prototype,{init:function(){this.scroll_factor=this.options.scroll_factor;var t=this.parallax_blocks=[];var n=this.options.image_attr;var r=e("body");var i=this.options.origins;i.each(function(){var i=e(this);var s;if(i.data(n)){s=e('<div class="parallax-block"><img class="parallax-image" src="'+i.data(n)+'"></div>');t.push({origin:i,block:s,bg_ratio:i.data("width")/i.data("height")});r.prepend(s)}else if(i.data("tile")){s=e('<div class="parallax-block"><div class="parallax-image" style="background-image: url('+i.data("tile")+')"></div></div>');t.push({origin:i,block:s,bg_ratio:1});r.prepend(s)}});var s=this;var o=function(){s.redrawBlocks();s.render()};var u=e(window);u.on("load",o);u.on("resize",o);u.on("hwparallax.reconfigure",o);u.on("scroll",function(){s.render()})},redrawBlocks:function(){var t=e(window).width();var n=this.window_height=e(window).height();var r=document.body;var i=document.documentElement;var s=Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);this.max_scrolltop=Math.max(0,s-n);var o=this.parallax_blocks.length;for(var u=0;u<o;u++){var a=this.parallax_blocks[u];var f=a.block;var l=a.bg_ratio;var c=f.children(".parallax-image");var h=a.origin;var p=h.outerHeight();var d=n-(n-p)*this.scroll_factor;var v=t;var m=Math.ceil(v/l);var g=0;if(m<d){m=d;v=m*l;g=Math.floor(v-t)/2}c.width(v).height(m);f.width(t).height(p).css("visibility","hidden");e.extend(a,{origin_position:h.offset().top,origin_height:p,image:c,image_xoff:g,image_height:m})}},render:function(){if(!this.drawing){this.drawing=true;var e=this;if(window.requestAnimationFrame){window.requestAnimationFrame(function(){e.draw()},document)}else{e.draw()}}},draw:function(){var t=Math.min(Math.max(0,e(window).scrollTop()),this.max_scrolltop);var n=this.parallax_blocks.length;var r;for(var i=0;i<n;i++){r=this.parallax_blocks[i];if(r.origin_position<t+this.window_height&&r.origin_position+r.origin_height>t){var s=Math.ceil(r.origin_position-t);var o=Math.ceil(s*(this.scroll_factor-1));var u={visibility:"visible"};var a={};var f,l,c;var h;if(this.has_3dtransforms){f=u.transform="translate3d(0px, "+s+"px, 0px)";l=a.transform="translate3d(-"+r.image_xoff+"px, "+o+"px, 0px)";for(h=0;h<this.num_vendor_prefixes;h++){c="-"+this.vendor_prefixes[h]+"-transform";u[c]=f;a[c]=l}}else if(this.has_2dtransforms){f=u.transform="translate(0px, "+s+"px)";l=a.transform="translate(-"+r.image_xoff+"px, "+o+"px)";for(h=0;h<this.num_vendor_prefixes;h++){c="-"+this.vendor_prefixes[h]+"-transform";u[c]=f;a[c]=l}}else{u.top=s+"px";u.left=0+"px";a.top=o+"px";a.left=-r.image_xoff+"px"}r.block.css(u);r.image.css(a)}else{r.block.css("visibility","hidden")}}this.drawing=false}});e.extend(e.fn,{parallax:function(n){var r=e.extend({scroll_factor:.2,image_attr:"image"},n,{origins:e(this)});var i=new t(r);i.init()}})})(jQuery)

/* MG: jquery.bxslider.min.js */
/* MG: responsive-nav.min.js */
/* MG: jquery.event.swipe.js */

/* MG: parallax-fn.js */
$(function() {
    $('.prlx').parallax({scroll_factor: 0.2});
    $('.prlx-slow').parallax({scroll_factor: 0.5});
    $('.prlx-fix').parallax({scroll_factor: 0.0001});
    //var nav = responsiveNav(".nav-collapse");

// if you don't want to be this granular and allow for different speed options, you can use the default value 
// $('.prlx').parallax();

    var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        didScroll = false,
        changeHeaderOn = $('section:first').outerHeight();

    function init() {
        if (window.addEventListener) {
            window.addEventListener( 'scroll', function( event ) {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 250 );
                }
            }, false );
        } else {
            window.attachEvent( 'onscroll', function( event ) {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 250 );
                }
            }, false );
        }
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            $('.scrollnav').addClass('scrollnav-show');
        }
        else {
            $('.scrollnav').removeClass('scrollnav-show');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

    })();

    //add scroll links
    $('section').each(function(){
        var id = $(this).next('section').attr('id');
        if (id != undefined) {
            $(this).append('<a href="#' + id + '" class="scroll-link">&#8744;</a>');
        }
    });

    $('.scroll-link').on('click', function(event){
        scrollToID($(this).attr('href'), 750);
    });

    //initialize sliders
    /*
    $('.bxslider').bxSlider({
            slideMargin: 20,
            nextText: '&rsaquo;',
            prevText: '&lsaquo;'
    });
    */

}); //close main init

    // scroll function
    function scrollToID(id, speed){
        var offSet = 80;
        var targetOffset = $(id).offset().top - offSet + 80;
        $('html,body').animate({scrollTop:targetOffset}, speed);
    }

/* MG: R1.02 */

$(document).ready(function(){

	$(".menuFlyout .sh .sti-btn").each(function( index ) {
		if($(this).hasClass("sti-facebook-btn")) {
			$(this).parent().attr('href','http://www.facebook.com/share.php?u=' + escape(window.location));
		}
		if($(this).hasClass("sti-twitter-btn")) {
			$(this).parent().attr('href','http://twitter.com/home?status=' + escape(window.location));
		}
		if($(this).hasClass("sti-linkedin-btn")) {
			$(this).parent().attr('href','http://www.linkedin.com/shareArticle?mini=true&url=' + escape(window.location));
		}
		if($(this).hasClass("sti-google-btn")) {
			$(this).parent().attr('href','https://plus.google.com/share?url=' + escape(window.location));
		}
	});

	/* The Tin - old removed and new added */
    //$(".navbar-toggle").click(function(){var n=$("#navBar"),t=$("#menuBarWrapper"),i=$("#menuBar .navbar-toggle");n.is(":visible")?(n.stop().slideUp(300),i.removeClass("open"),t.removeClass("open"),$("#intlsites").hide()):(n.stop().slideDown(300),i.addClass("open"),t.addClass("open"))});
	$('.navbar-toggle').click(function () {

        var navBar = $('#navBar');
        var wrapper = $('#menuBarWrapper');
        var toggle = $('#menuBar .navbar-toggle');

        if (navBar.is(':visible')) {
            navBar.stop().slideUp(300);
            toggle.removeClass('open');
            // wrapper.removeClass('open');
        }
        else {
            navBar.stop().slideDown(300);
            toggle.addClass('open');
            // wrapper.addClass('open');

            //ga('send', 'event', 'Expand menu', 'Expanded');
        }

	});

	$(".videowrapper button.close").click(function() {
        var iframe = $(this).parents().find('iframe'); 
        var src = iframe.attr('src');
        iframe.attr('src', '');
        iframe.attr('src', src);
    });

    /*
	$("#menuAdditional li > a").click(function(n){n.preventDefault();var t=$(this).parents("li");
	$("#menuAdditional .open").not(t).removeClass("open");
	t.is(".open")||t.find("input").length!=1||setTimeout(function(){t.find("input").trigger("focus")},300);
	t.toggleClass("open");});
    */

	$('#menuAdditional > li > a').click(function (e) {
	    e.preventDefault();
	    var wrapper = $(this).parents('li');
	    $('#menuAdditional .open').not(wrapper).removeClass('open');


	    if (!wrapper.is('.open') && wrapper.find('input').length >= 1) { setTimeout(function () { wrapper.find('input').last().trigger('focus') }, 300);}
	    wrapper.toggleClass('open');
	})

	/*
    $("#territoryBtn").click(function(){$(this).parent().hasClass("open") ? $("#intlsites").show() : $("#intlsites").hide();});
	$("#intlsites .intlclose").click(function(){$("#intlsites").hide();});
    */
	$("#searchBtn").click(function(){ $(this).parent().hasClass("open") ? $("#searchField").focus() : $("#searchField").blur(); }); 

    var extra = !function(n,t){"use strict";function u(n){this.callback=n;this.ticking=!1}function f(n){var t,r,i,u;if(arguments.length<=0)throw new Error("Missing arguments in extend function");for(i=n||{},r=1;r<arguments.length;r++){u=arguments[r]||{};for(t in u)i[t]="object"==typeof i[t]?f(i[t],u[t]):i[t]||u[t]}return i}function e(n){return n===Object(n)?n:{down:n,up:n}}function i(n,t){t=f(t,i.options);this.lastKnownScrollY=0;this.elem=n;this.debouncer=new u(this.update.bind(this));this.tolerance=e(t.tolerance);this.classes=t.classes;this.offset=t.offset;this.initialised=!1;this.onPin=t.onPin;this.onUnpin=t.onUnpin;this.onTop=t.onTop;this.onNotTop=t.onNotTop}var r={bind:!!function(){}.bind,classList:"classList"in t.documentElement,rAF:!!(n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame)};n.requestAnimationFrame=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame;u.prototype={constructor:u,update:function(){this.callback&&this.callback();this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}};i.prototype={constructor:i,init:function(){if(i.cutsTheMustard)return this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;this.initialised=!1;n.removeEventListener("scroll",this.debouncer,!1);this.elem.classList.remove(t.unpinned,t.pinned,t.top,t.initial)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,n.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){$("#languageField_valid").hide();var n=this.elem.classList,t=this.classes;(n.contains(t.pinned)||!n.contains(t.unpinned))&&(n.add(t.unpinned),n.remove(t.pinned),this.onUnpin&&this.onUnpin.call(this));$("#menuAdditional .open").removeClass("open");$("#dropdownTrigger_lg.open").trigger("click")},pin:function(){var n=this.elem.classList,t=this.classes;n.contains(t.unpinned)&&(n.remove(t.unpinned),n.add(t.pinned),this.onPin&&this.onPin.call(this))},top:function(){var n=this.elem.classList,t=this.classes;n.contains(t.top)||(n.add(t.top),n.remove(t.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var n=this.elem.classList,t=this.classes;n.contains(t.notTop)||(n.add(t.notTop),n.remove(t.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==n.pageYOffset?n.pageYOffset:(t.documentElement||t.body.parentNode||t.body).scrollTop},getViewportHeight:function(){return n.innerHeight||t.documentElement.clientHeight||t.body.clientHeight},getDocumentHeight:function(){var n=t.body,i=t.documentElement;return Math.max(n.scrollHeight,i.scrollHeight,n.offsetHeight,i.offsetHeight,n.clientHeight,i.clientHeight)},isOutOfBounds:function(n){var t=0>n,i=n+this.getViewportHeight()>this.getDocumentHeight();return t||i},toleranceExceeded:function(n,t){return Math.abs(n-this.lastKnownScrollY)>=this.tolerance[t]},shouldUnpin:function(n,t){var i=n>this.lastKnownScrollY,r=n>=this.offset;return i&&r&&t},shouldPin:function(n,t){var i=n<this.lastKnownScrollY,r=n<=this.offset;return i&&t||r},update:function(){var n=this.getScrollY(),i=n>this.lastKnownScrollY?"down":"up",t=this.toleranceExceeded(n,i);this.isOutOfBounds(n)||(n<=this.offset?this.top():this.notTop(),this.shouldUnpin(n,t)?this.unpin():this.shouldPin(n,t)&&this.pin(),this.lastKnownScrollY=n)}};i.options={tolerance:{up:0,down:0},offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}};i.cutsTheMustard="undefined"!=typeof r&&r.rAF&&r.bind&&r.classList;n.Headroom=i}(window,document);
	t=$("#menuBarWrapper")[0];
	new Headroom(t,{tolerance:{down:20,up:20},offset:100,classes:{initial:"slide",pinned:"slide--reset",unpinned:"slide--up"}}).init();

/* MG: New territory selector */
$.ajax({
	type: "GET",
	url: "/content/pwc/script/network/parallax/countries.xml",
	cache: true,
	dataType: "xml",
	success: function(xml) {
		$(xml).find("country").each(function(){
			var name = "";
			var url = "";
			$(this).find("name").each(function(){
					name = $(this).text();
			});
			$(this).find("url").each(function(){
					url = $(this).text();
			});
            $("#PwC_countries").append("<a href=\"" + url + "\" title=\"" + name + "\">" + name + "</a>");
		});
		$("#PwC_countries").hide();
		$("#PwC_countries a").hide();
	}
});

$(window).scroll(function() {
	$("#PwC_countries").hide();
});

$("html").click(function() {
	$("#PwC_countries").hide();
});

$("#PwC_countries").parent().click(function(event){
	event.stopPropagation();
});

$("#languageField").keyup(function(e) {
	var inputVal = $(this).val();
	var found = false;
	var url = null;
	var limit = 
	$("#PwC_countries a").each(function(){
		if($(this).attr("title").toLowerCase().indexOf(inputVal.toLowerCase()) > -1) {
			if(url == null) {
				url = $(this).attr("href");
			}			
			var query = new RegExp("(" + inputVal + ")", "gim");
			$(this).html($(this).attr("title").replace(query, "<strong>$1</strong>"));
			$(this).show();
			found = true;
		}
		else {
			$(this).hide();
		}
	});
	
	if(!found) {
		$("#PwC_countries").hide();
		$("#languageField_valid").show();
	}
	else {
		$("#PwC_countries").show();
	}
	
	if(e.which == 13 && url != null) {
		window.location.href = url;
	}
});
$("#languageField").on('input', function() {
	$("#languageField_valid").hide();
});

});

/* MG: Component Pinning Shared */

!function(a,b){function c(){y=D=z=A=B=C=K}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(){F={top:b.pageYOffset,left:b.pageXOffset}}function g(){return b.pageXOffset!=F.left?(f(),void z()):void(b.pageYOffset!=F.top&&(f(),i()))}function h(){setTimeout(function(){b.pageYOffset!=F.top&&(F.top=b.pageYOffset,i())},0)}function i(){for(var a=H.length-1;a>=0;a--)j(H[a])}function j(a){if(a.inited){var b=F.top<=a.limit.start?0:F.top>=a.limit.end?2:1;a.mode!=b&&p(a,b)}}function k(){for(var a=H.length-1;a>=0;a--)if(H[a].inited){var b=Math.abs(t(H[a].clone)-H[a].docOffsetTop),c=Math.abs(H[a].parent.node.offsetHeight-H[a].parent.height);if(b>=2||c>=2)return!1}return!0}function l(a){isNaN(parseFloat(a.computed.top))||a.isCell||"none"==a.computed.display||(a.inited=!0,a.clone||q(a),"absolute"!=a.parent.computed.position&&"relative"!=a.parent.computed.position&&(a.parent.node.style.position="relative"),j(a),a.parent.height=a.parent.node.offsetHeight,a.docOffsetTop=t(a.clone))}function m(a){var b=!0;a.clone&&r(a),d(a.node.style,a.css);for(var c=H.length-1;c>=0;c--)if(H[c].node!==a.node&&H[c].parent.node===a.parent.node){b=!1;break}b&&(a.parent.node.style.position=a.parent.css.position),a.mode=-1}function n(){for(var a=H.length-1;a>=0;a--)l(H[a])}function o(){for(var a=H.length-1;a>=0;a--)m(H[a])}function p(a,b){var c=a.node.style;switch(b){case 0:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top=a.offset.top+"px",c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 1:c.position="fixed",c.left=a.box.left+"px",c.right=a.box.right+"px",c.top=a.css.top,c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 2:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top="auto",c.bottom=0,c.width="auto",c.marginLeft=0,c.marginRight=0}a.mode=b}function q(a){a.clone=document.createElement("div");var b=a.node.nextSibling||a.node,c=a.clone.style;c.height=a.height+"px",c.width=a.width+"px",c.marginTop=a.computed.marginTop,c.marginBottom=a.computed.marginBottom,c.marginLeft=a.computed.marginLeft,c.marginRight=a.computed.marginRight,c.padding=c.border=c.borderSpacing=0,c.fontSize="1em",c.position="static",c.cssFloat=a.computed.cssFloat,a.node.parentNode.insertBefore(a.clone,b)}function r(a){a.clone.parentNode.removeChild(a.clone),a.clone=void 0}function s(a){var b=getComputedStyle(a),c=a.parentNode,d=getComputedStyle(c),f=a.style.position;a.style.position="relative";var g={top:b.top,marginTop:b.marginTop,marginBottom:b.marginBottom,marginLeft:b.marginLeft,marginRight:b.marginRight,cssFloat:b.cssFloat,display:b.display},h={top:e(b.top),marginBottom:e(b.marginBottom),paddingLeft:e(b.paddingLeft),paddingRight:e(b.paddingRight),borderLeftWidth:e(b.borderLeftWidth),borderRightWidth:e(b.borderRightWidth)};a.style.position=f;var i={position:a.style.position,top:a.style.top,bottom:a.style.bottom,left:a.style.left,right:a.style.right,width:a.style.width,marginTop:a.style.marginTop,marginLeft:a.style.marginLeft,marginRight:a.style.marginRight},j=u(a),k=u(c),l={node:c,css:{position:c.style.position},computed:{position:d.position},numeric:{borderLeftWidth:e(d.borderLeftWidth),borderRightWidth:e(d.borderRightWidth),borderTopWidth:e(d.borderTopWidth),borderBottomWidth:e(d.borderBottomWidth)}},m={node:a,box:{left:j.win.left,right:J.clientWidth-j.win.right},offset:{top:j.win.top-k.win.top-l.numeric.borderTopWidth,left:j.win.left-k.win.left-l.numeric.borderLeftWidth,right:-j.win.right+k.win.right-l.numeric.borderRightWidth},css:i,isCell:"table-cell"==b.display,computed:g,numeric:h,width:j.win.right-j.win.left,height:j.win.bottom-j.win.top,mode:-1,inited:!1,parent:l,limit:{start:j.doc.top-h.top,end:k.doc.top+c.offsetHeight-l.numeric.borderBottomWidth-a.offsetHeight-h.top-h.marginBottom}};return m}function t(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function u(a){var c=a.getBoundingClientRect();return{doc:{top:c.top+b.pageYOffset,left:c.left+b.pageXOffset},win:c}}function v(){G=setInterval(function(){!k()&&z()},500)}function w(){clearInterval(G)}function x(){I&&(document[L]?w():v())}function y(){I||(f(),n(),b.addEventListener("scroll",g),b.addEventListener("wheel",h),b.addEventListener("resize",z),b.addEventListener("orientationchange",z),a.addEventListener(M,x),v(),I=!0)}function z(){if(I){o();for(var a=H.length-1;a>=0;a--)H[a]=s(H[a].node);n()}}function A(){b.removeEventListener("scroll",g),b.removeEventListener("wheel",h),b.removeEventListener("resize",z),b.removeEventListener("orientationchange",z),a.removeEventListener(M,x),w(),I=!1}function B(){A(),o()}function C(){for(B();H.length;)H.pop()}function D(a){for(var b=H.length-1;b>=0;b--)if(H[b].node===a)return;var c=s(a);H.push(c),I?l(c):y()}function E(a){for(var b=H.length-1;b>=0;b--)H[b].node===a&&(m(H[b]),H.splice(b,1))}var F,G,H=[],I=!1,J=a.documentElement,K=function(){},L="hidden",M="visibilitychange";void 0!==a.webkitHidden&&(L="webkitHidden",M="webkitvisibilitychange"),b.getComputedStyle||c();for(var N=["","-webkit-","-moz-","-ms-"],O=document.createElement("div"),P=N.length-1;P>=0;P--){try{O.style.position=N[P]+"sticky"}catch(Q){}""!=O.style.position&&c()}f(),b.Stickyfill={stickies:H,add:D,remove:E,init:y,rebuild:z,pause:A,stop:B,kill:C}}(document,window),window.jQuery&&!function($){$.fn.Stickyfill=function(){return this.each(function(){Stickyfill.add(this)}),this}}(window.jQuery);

/* MG: Component Pinning Component */

	$(document).ready(function(){

		/* Component Pinning */
        $('.pwccol1-longform-pinleft div.pinnedcontent').not('.pwccol1-longform-pinleft div.pinnedcontent:first').addClass('hideme');
        $('.pwccol1-longform-pinleft div.pinnedcontent').Stickyfill();
		$('.pwccol1-longform-pinright div.pinnedcontent').not('.pwccol1-longform-pinright div.pinnedcontent:first').addClass('hideme');
        $('.pwccol1-longform-pinright div.pinnedcontent').Stickyfill();
        $('.pwccol1-longform-pinleft').each(function() {
			$(this).find('div.pinnedcontent:first').addClass('showme');
        });
        $('.pwccol1-longform-pinright').each(function() {
			$(this).find('div.pinnedcontent:first').addClass('showme');
        });

        /* HTML Pinning */
        $(".pinthis").parents(".html").next().addClass("pinnedcomponent");
        $('.pwccol1-longform-pinleft .pinnedcomponent').not('.pwccol1-longform-pinleft .pinnedcomponent:first').addClass('hideme');
        $('.pwccol1-longform-pinleft .pinnedcomponent').Stickyfill();
		$('.pwccol1-longform-pinright .pinnedcomponent').not('.pwccol1-longform-pinright .pinnedcomponent:first').addClass('hideme');
        $('.pwccol1-longform-pinright .pinnedcomponent').Stickyfill();
        $('.pwccol1-longform-pinleft').each(function() {
			$(this).find('.pinnedcomponent:first').addClass('showme');
        });
        $('.pwccol1-longform-pinright').each(function() {
			$(this).find('.pinnedcomponent:first').addClass('showme');
        });

	});

	$(document).scroll(function(){

        /* Component Pinning */
		$('.pwccol1-longform-pinleft div.pinnedcontent').not('.pwccol1-longform-pinleft div.pinnedcontent:first').each(function() {
			var top = $(this).offset().top - $(document).scrollTop();
			if (!$(this).hasClass("showme") && top < 150){
				$(this).removeClass('hideme animated fadeOut').addClass('showme animated fadeIn');
			}
			else if (!$(this).hasClass("hideme") && top >= 100){
				$(this).removeClass('showme animated fadeIn').addClass('animated fadeOut').addClass('hideme');
			}  
		});
		$('.pwccol1-longform-pinright div.pinnedcontent').not('.pwccol1-longform-pinright div.pinnedcontent:first').each(function() {
			var top = $(this).offset().top - $(document).scrollTop();
			if (!$(this).hasClass("showme") && top < 150){
				$(this).removeClass('hideme animated fadeOut').addClass('showme animated fadeIn');
			}
			else if (!$(this).hasClass("hideme") && top >= 100){
				$(this).removeClass('showme animated fadeIn').addClass('animated fadeOut').addClass('hideme');
			}  
		});

        /* HTNL Pinning */
		$('.pwccol1-longform-pinleft .pinnedcomponent').not('.pwccol1-longform-pinleft .pinnedcomponent:first').each(function() {
			var top = $(this).offset().top - $(document).scrollTop();
			if (!$(this).hasClass("showme") && top < 150){
				$(this).removeClass('hideme animated fadeOut').addClass('showme animated fadeIn');
			}
			else if (!$(this).hasClass("hideme") && top >= 100){
				$(this).removeClass('showme animated fadeIn').addClass('animated fadeOut').addClass('hideme');
			}  
		});
		$('.pwccol1-longform-pinright .pinnedcomponent').not('.pwccol1-longform-pinright .pinnedcomponent:first').each(function() {
			var top = $(this).offset().top - $(document).scrollTop();
			if (!$(this).hasClass("showme") && top < 150){
				$(this).removeClass('hideme animated fadeOut').addClass('showme animated fadeIn');
			}
			else if (!$(this).hasClass("hideme") && top >= 100){
				$(this).removeClass('showme animated fadeIn').addClass('animated fadeOut').addClass('hideme');
			}  
		});

		
	});

/* MG: Secondary nav from The Tin */

	$(function(){  
		var $win = $(window);
		var winWidth = $win.width();
		var mobileBreakpoint = 768;
		if (('ontouchstart' in window) ||
			 (navigator.maxTouchPoints > 0) ||
			 (navigator.msMaxTouchPoints > 0)) {
			  /* browser with either Touch Events of Pointer Events
				 running on touch-capable device */
			$('html').addClass('touch');
		} else {
			$('html').addClass('no-touch');
		}
		
		
		$('.secondary-nav .popover-trigger').on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			var $link = $this.parent('a');
			var $component = $this.closest('.secondary-nav');
			var $contentContainer = $component.find('.secondary-nav__popover-content');
			var $closeButton =  $component.find('.secondary-nav__popover-close');
			
			//Create content
			var contentHtml = '<div class="col-sm-7 secondary-nav__popover-copy">'+
				'<h3>'+ $link.attr("data-popover-heading") +'</h3>'+
					'<p>'+ $link.attr("data-popover-copy") +'</p>'+
					'<a href="'+ $link.attr("href") +'" class="more">Find out more</a>'+
				'</div>'+
				'<div class="col-sm-5 secondary-nav__popover-image">'+
					'<img alt="'+ $link.attr("data-popover-heading") +'" class="img-responsive" src="'+ $link.attr("data-popover-image") +'" />'+
				'</div>'
			
			
			//Add to DOM and show popover
			$contentContainer.html(contentHtml);
			$component.addClass('secondary-nav--popover-active');
			//setTimeout(function() {$component.addClass('secondary-nav--popover-active'); }, 100);
						
			//Setup close button
			$closeButton.on('click', function(e) {
                e.preventDefault();
				closePopover($component, $contentContainer,$closeButton);
			});

			//Hide popover if device width gets too small
			$(window).resize(function(){
				var winWidth = $win.width();
				if(winWidth < mobileBreakpoint) {
					closePopover($component, $contentContainer,$closeButton);
				}
			}).resize();
			
		});
		
		
			
		function closePopover($component, $contentContainer,$closeButton) {
			$component.removeClass('secondary-nav--popover-active');
			setTimeout(function() { $contentContainer.html('');},450);
			$closeButton.unbind('click');
		}
		
	})
