$(document).ready(function () {

    /* TopNav selected item */
    var pwcselectednav = "";
    pwcselectednav = $('meta[name=pwcselectednav]').attr("content");
    $('.navbar-nav > li').each(function (i) {
        if (pwcselectednav == i) {
            $(this).addClass('active');
        }
    });

    var socialitem = '';
    var socialfix = '';
    $('#socialshare a img').each(function () {
        socialitem = $(this).attr('src');
        if (socialitem.indexOf('share_facebook') !== -1) {
            socialfix = 'http://www.facebook.com/share.php?u=' + escape(window.location);
            $(this).parent().attr('href', socialfix);
        };
        if (socialitem.indexOf('share_googleplus') !== -1) {
            socialfix = 'https://plus.google.com/share?url=' + escape(window.location);
            $(this).parent().attr('href', socialfix);
        };
        if (socialitem.indexOf('share_twitter') !== -1) {
            socialfix = 'http://twitter.com/home?status=' + escape(window.location);
            $(this).parent().attr('href', socialfix);
        };
        if (socialitem.indexOf('share_linked') !== -1) {
            socialfix = 'http://www.linkedin.com/shareArticle?mini=true&url=' + escape(window.location);
            $(this).parent().attr('href', socialfix);
        };
    });
});


$(document).ready(function () {

    if ($("ul.nav.nav-tabs").length) {

        var thetab = $.urlParam('opentab');
        var tabcount = 1;

        $('.nav-tabs li').each(function () {
            if (thetab == tabcount) {
                $(this).children('a').tab('show');
            }
            tabcount++;
        });

    }

});
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
(function (e) { var t = function (t) { this.options = t; this.vendor_prefixes = ["webkit", "moz", "o", "ms"]; this.num_vendor_prefixes = this.vendor_prefixes.length; var n = function (e) { var t = ["Webkit", "Moz", "ms", "O"]; var n = t.length; var r = window.document.createElement("parallax"); if (r.style[e] !== undefined) { return true } e = e.replace(/./, function (e) { return e.toUpperCase() }); for (var i = 0; i < n; i++) { var s = t[i] + e; if (r.style[s] !== undefined) { return true } } return false }; this.has_3dtransforms = n("perspective"); if (this.has_3dtransforms && n("WebkitPerspective")) { var r = e('<div><style type="text/css">@media (transform-3d),(-webkit-transform-3d) {#parallax-3dtest {position: absolute;left: 9px;height: 5px;margin: 0;padding: 0;border: 0;}</style><div id="parallax-3dtest"></div></div>').appendTo("body"); var i = e("#parallax-3dtest"); this.has_3dtransforms = i.height() == 5 && i.offset().left == 9; r.remove() } this.has_2dtransforms = n("transform") }; e.extend(t.prototype, { init: function () { this.scroll_factor = this.options.scroll_factor; var t = this.parallax_blocks = []; var n = this.options.image_attr; var r = e("body"); var i = this.options.origins; i.each(function () { var i = e(this); var s; if (i.data(n)) { s = e('<div class="parallax-block"><img class="parallax-image" src="' + i.data(n) + '"></div>'); t.push({ origin: i, block: s, bg_ratio: i.data("width") / i.data("height") }); r.prepend(s) } else if (i.data("tile")) { s = e('<div class="parallax-block"><div class="parallax-image" style="background-image: url(' + i.data("tile") + ')"></div></div>'); t.push({ origin: i, block: s, bg_ratio: 1 }); r.prepend(s) } }); var s = this; var o = function () { s.redrawBlocks(); s.render() }; var u = e(window); u.on("load", o); u.on("resize", o); u.on("hwparallax.reconfigure", o); u.on("scroll", function () { s.render() }) }, redrawBlocks: function () { var t = e(window).width(); var n = this.window_height = e(window).height(); var r = document.body; var i = document.documentElement; var s = Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight); this.max_scrolltop = Math.max(0, s - n); var o = this.parallax_blocks.length; for (var u = 0; u < o; u++) { var a = this.parallax_blocks[u]; var f = a.block; var l = a.bg_ratio; var c = f.children(".parallax-image"); var h = a.origin; var p = h.outerHeight(); var d = n - (n - p) * this.scroll_factor; var v = t; var m = Math.ceil(v / l); var g = 0; if (m < d) { m = d; v = m * l; g = Math.floor(v - t) / 2 } c.width(v).height(m); f.width(t).height(p).css("visibility", "hidden"); e.extend(a, { origin_position: h.offset().top, origin_height: p, image: c, image_xoff: g, image_height: m }) } }, render: function () { if (!this.drawing) { this.drawing = true; var e = this; if (window.requestAnimationFrame) { window.requestAnimationFrame(function () { e.draw() }, document) } else { e.draw() } } }, draw: function () { var t = Math.min(Math.max(0, e(window).scrollTop()), this.max_scrolltop); var n = this.parallax_blocks.length; var r; for (var i = 0; i < n; i++) { r = this.parallax_blocks[i]; if (r.origin_position < t + this.window_height && r.origin_position + r.origin_height > t) { var s = Math.ceil(r.origin_position - t); var o = Math.ceil(s * (this.scroll_factor - 1)); var u = { visibility: "visible" }; var a = {}; var f, l, c; var h; if (this.has_3dtransforms) { f = u.transform = "translate3d(0px, " + s + "px, 0px)"; l = a.transform = "translate3d(-" + r.image_xoff + "px, " + o + "px, 0px)"; for (h = 0; h < this.num_vendor_prefixes; h++) { c = "-" + this.vendor_prefixes[h] + "-transform"; u[c] = f; a[c] = l } } else if (this.has_2dtransforms) { f = u.transform = "translate(0px, " + s + "px)"; l = a.transform = "translate(-" + r.image_xoff + "px, " + o + "px)"; for (h = 0; h < this.num_vendor_prefixes; h++) { c = "-" + this.vendor_prefixes[h] + "-transform"; u[c] = f; a[c] = l } } else { u.top = s + "px"; u.left = 0 + "px"; a.top = o + "px"; a.left = -r.image_xoff + "px" } r.block.css(u); r.image.css(a) } else { r.block.css("visibility", "hidden") } } this.drawing = false } }); e.extend(e.fn, { parallax: function (n) { var r = e.extend({ scroll_factor: .2, image_attr: "image" }, n, { origins: e(this) }); var i = new t(r); i.init() } }) })(jQuery)

$(function () {
	
		if(typeof parallax == 'function'){ 
		//undefined plugin fix
		$('.prlx').parallax({ scroll_factor: 0.2 });
		$('.prlx-slow').parallax({ scroll_factor: 0.5 });
		$('.prlx-fix').parallax({ scroll_factor: 0.0001 });
	
	}
		var cbpAnimatedHeader = (function () {

			var docElem = document.documentElement,
				didScroll = false,
				changeHeaderOn = $('section:first').outerHeight();

			function init() {
				if (window.addEventListener) {
					window.addEventListener('scroll', function (event) {
						if (!didScroll) {
							didScroll = true;
							setTimeout(scrollPage, 250);
						}
					}, false);
				} else {
					window.attachEvent('onscroll', function (event) {
						if (!didScroll) {
							didScroll = true;
							setTimeout(scrollPage, 250);
						}
					}, false);
				}
			}

			function scrollPage() {
				var sy = scrollY();
				if (sy >= changeHeaderOn) {
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
		$('section').each(function () {
			var id = $(this).next('section').attr('id');
			if (id != undefined) {
				$(this).append('<a href="#' + id + '" class="scroll-link">&#8744;</a>');
			}
		});

		$('.scroll-link').on('click', function (event) {
			scrollToID($(this).attr('href'), 750);
		});






}); //close main init

// scroll function
function scrollToID(id, speed) {
    var offSet = 80;
    var targetOffset = $(id).offset().top - offSet + 80;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
}

$(document).ready(function () {

    
     expandableRevealMenu.init();
});

/*  
*   JS to control global navigation menu 
*   -On mobile primary links behave like an accordion, 
*   -On tablet / large touch primary links are clicked to reveal secondary level in a side panel
*   -On desktop primary links are hovered to reveal secondary level in a side panel
*/
var expandableRevealMenu = (function () {
    var mobileBreakpoint = 768,
        navMode= 'expandable',
        $win,
        winWidth,
        $secNavPreview,
        resizeTimer;
    
    function legacyHeaderJs() {
        console.log('legacyHeaderJs() run');
        $(".menuFlyout .sh .sti-btn").each(function (index) {
            if ($(this).hasClass("sti-facebook-btn")) {
                $(this).parent().attr('href', 'http://www.facebook.com/share.php?u=' + escape(window.location));
            }
            if ($(this).hasClass("sti-twitter-btn")) {
                $(this).parent().attr('href', 'http://twitter.com/home?status=' + escape(window.location));
            }
            if ($(this).hasClass("sti-linkedin-btn")) {
                $(this).parent().attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + escape(window.location));
            }
            if ($(this).hasClass("sti-google-btn")) {
                $(this).parent().attr('href', 'https://plus.google.com/share?url=' + escape(window.location));
            }
        });
        $('.navbar-toggle').click(function () {
            console.log('toggle clicked...');
            console.log(headroom);
            console.log(headroom.tolerance);
           
            //"tolerance": { down: 20, up: 20 },
            var navBar = $('#navBar');
            var wrapper = $('#menuBarWrapper');
            var toggle = $('#menuBar .navbar-toggle');
            var $body = $('body');

            if (navBar.is(':visible')) {
                navBar.stop().slideUp(300);
                wrapper.addClass('nav--allow-hide').removeClass('nav--prevent-hide');
                toggle.removeClass('open');
                $body.removeClass('global-nav-active');
                headroom.tolerance = { down: 20, up: 20 };
                console.log(headroom.tolerance);
            }
            else {
                navBar.stop().slideDown(300);
                wrapper.addClass('nav--prevent-hide').removeClass('nav--allow-hide');
                toggle.addClass('open');
                $body.addClass('global-nav-active');
                headroom.tolerance = { down: 200, up: 200 }; //Increase  tolerance to make it harder to hide Navigation
                console.log(headroom.tolerance);
                console.log($win.width());

                if($win.width() < 768) {
                    var $scrollPane = $('#menuBarWrapper .breadcrumb-component__scroll-pane');
                    var scrollWidth= $scrollPane.children('ul').outerWidth() + 100;
                    console.log(scrollWidth);
                    $('#menuBarWrapper .breadcrumb-component__scroll-pane').scrollLeft(scrollWidth);
                }
                //headroom.destroy();
            }

        });

        // $('#menuAdditional > li > a').click(function (e) {
        $('#menuAdditional  li > a').click(function (e) {
            e.preventDefault();
            var wrapper = $(this).parents('li');
            $('#menuAdditional .open').not(wrapper).removeClass('open');


            if (!wrapper.is('.open') && wrapper.find('input').length >= 1) { setTimeout(function () { wrapper.find('input').last().trigger('focus') }, 300); }
            wrapper.toggleClass('open');
        })

        $("#searchBtn").click(function () { $(this).parent().hasClass("open") ? $("#searchField").focus() : $("#searchField").blur(); });

        //Headroom JS linked to as a separate file now...
        //var extra = !function (n, t) { "use strict"; function u(n) { this.callback = n; this.ticking = !1 } function f(n) { var t, r, i, u; if (arguments.length <= 0) throw new Error("Missing arguments in extend function"); for (i = n || {}, r = 1; r < arguments.length; r++) { u = arguments[r] || {}; for (t in u) i[t] = "object" == typeof i[t] ? f(i[t], u[t]) : i[t] || u[t] } return i } function e(n) { return n === Object(n) ? n : { down: n, up: n } } function i(n, t) { t = f(t, i.options); this.lastKnownScrollY = 0; this.elem = n; this.debouncer = new u(this.update.bind(this)); this.tolerance = e(t.tolerance); this.classes = t.classes; this.offset = t.offset; this.initialised = !1; this.onPin = t.onPin; this.onUnpin = t.onUnpin; this.onTop = t.onTop; this.onNotTop = t.onNotTop } var r = { bind: !!function () { }.bind, classList: "classList" in t.documentElement, rAF: !!(n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame) }; n.requestAnimationFrame = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame; u.prototype = { constructor: u, update: function () { this.callback && this.callback(); this.ticking = !1 }, requestTick: function () { this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0) }, handleEvent: function () { this.requestTick() } }; i.prototype = { constructor: i, init: function () { if (i.cutsTheMustard) return this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this }, destroy: function () { var t = this.classes; this.initialised = !1; n.removeEventListener("scroll", this.debouncer, !1); this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.initial) }, attachEvent: function () { this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, n.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent()) }, unpin: function () { $("#languageField_valid").hide(); var n = this.elem.classList, t = this.classes; (n.contains(t.pinned) || !n.contains(t.unpinned)) && (n.add(t.unpinned), n.remove(t.pinned), this.onUnpin && this.onUnpin.call(this)); $("#menuAdditional .open").removeClass("open"); $("#dropdownTrigger_lg.open").trigger("click") }, pin: function () { var n = this.elem.classList, t = this.classes; n.contains(t.unpinned) && (n.remove(t.unpinned), n.add(t.pinned), this.onPin && this.onPin.call(this)) }, top: function () { var n = this.elem.classList, t = this.classes; n.contains(t.top) || (n.add(t.top), n.remove(t.notTop), this.onTop && this.onTop.call(this)) }, notTop: function () { var n = this.elem.classList, t = this.classes; n.contains(t.notTop) || (n.add(t.notTop), n.remove(t.top), this.onNotTop && this.onNotTop.call(this)) }, getScrollY: function () { return void 0 !== n.pageYOffset ? n.pageYOffset : (t.documentElement || t.body.parentNode || t.body).scrollTop }, getViewportHeight: function () { return n.innerHeight || t.documentElement.clientHeight || t.body.clientHeight }, getDocumentHeight: function () { var n = t.body, i = t.documentElement; return Math.max(n.scrollHeight, i.scrollHeight, n.offsetHeight, i.offsetHeight, n.clientHeight, i.clientHeight) }, isOutOfBounds: function (n) { var t = 0 > n, i = n + this.getViewportHeight() > this.getDocumentHeight(); return t || i }, toleranceExceeded: function (n, t) { return Math.abs(n - this.lastKnownScrollY) >= this.tolerance[t] }, shouldUnpin: function (n, t) { var i = n > this.lastKnownScrollY, r = n >= this.offset; return i && r && t }, shouldPin: function (n, t) { var i = n < this.lastKnownScrollY, r = n <= this.offset; return i && t || r }, update: function () { var n = this.getScrollY(), i = n > this.lastKnownScrollY ? "down" : "up", t = this.toleranceExceeded(n, i); this.isOutOfBounds(n) || (n <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(n, t) ? this.unpin() : this.shouldPin(n, t) && this.pin(), this.lastKnownScrollY = n) } }; i.options = { tolerance: { up: 0, down: 0 }, offset: 0, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", initial: "headroom" } }; i.cutsTheMustard = "undefined" != typeof r && r.rAF && r.bind && r.classList; n.Headroom = i }(window, document);
        t = $("#menuBarWrapper")[0];
       
        var headroomOptions = {
            "offset": 100,
            "tolerance": { down: 20, up: 20 },
            "classes": {
                "initial": "slide",
                "pinned": "slide--reset",
                "unpinned": "slide--up"
            },
            onUnpin : function() {
                console.log('on un pin!');
                /* temporary */
                $('#menuAdditional .open').removeClass('open');
                $('#dropdownTrigger_lg.open').trigger('click');
            }
        };

        console.log($("#menuBarWrapper").length);
        //$("header").headroom();
        console.log(headroom);
        var headroom = new Headroom(t, headroomOptions )
        headroom.init();
        console.log(headroom);
        // console.log('headroom init run');
        // headroom.destroy();
        // console.log(headroom);

        //t.headroom('destroy');

         //console.log(headroom2);

         /*

         */
    }

    function initReveakLinks() {
        console.log('initExpandableLinks() run');
        console.log('initExpandableLinks() > ' + navMode);
        

        $('.expandable-hover-menu').on('mouseenter', '.nav-item',function(e) {
            console.log('mouseenter');
            if(navMode == 'revealPanel') {
                console.log('reveal button hovered...');
                e.preventDefault();
                //nav-item--open
                var $navItem  = $(this);
                //var $navItem = $this.parent('.nav-item');
                var childLinksHtml = $navItem.find('ul.nav-list-wrapper-l2').clone();
                console.log(childLinksHtml,' ----- HTML LINKS');
                $secNavPreview.html(childLinksHtml);
                $secNav.addClass('glb-sec-nav--preview-active');
                $navItem.on('mouseleave', function() {
                    //$secNav.removeClass('glb-sec-nav--preview-active');
                });
            }

        });

        //if(navMode == 'revealPanel') {
            //$('.expandable-hover-menu').off('click', '.nav-item__reveal').prepend('<h1>OFFF</h1>');
        //} else {

            $('.double-tap-option .expandable-hover-menu').on('click', '.nav-item a',function(e) {
                if(navMode == 'expandable') {
                    console.log('reveal button clicked...');
                    e.preventDefault();
                    //nav-item--open
                    var $this = $(this);
                    var $navItem = $this.parent('.nav-item');
                    console.log($navItem);
                    console.log($navItem.siblings('.nav-item--open'));
                    
                    //Reset any open nav items, including the parent of the clicked icon
                    // $navItem.parent().children('.nav-item--open').removeClass('nav-item--open').addClass('nav-item--closed');



                    //Open target nav item
                    if($navItem.hasClass('nav-item--open')) {
                        //$navItem.addClass('nav-item--closed').removeClass('nav-item--open');
                        console.log('navigating to > ' + $this.attr('href'));
                        window.location.href = $this.attr('href');
                    } else {
                       $navItem.removeClass('nav-item--closed').addClass('nav-item--open'); 
                    }

                    //Reset any other open nav items
                    $navItem.siblings('.nav-item--open').removeClass('nav-item--open').addClass('nav-item--closed');
                } else {
                    console.log('do nothing...');
                }
            });
            
            $('.reveal-on-left .expandable-hover-menu').on('click', '.nav-item__reveal',function(e) {
                if(navMode == 'expandable') {
                    console.log('reveal button clicked...');
                    e.preventDefault();
                    //nav-item--open
                    var $this = $(this);
                    var $navItem = $this.parent('.nav-item');
                    console.log($navItem);
                    console.log($navItem.siblings('.nav-item--open'));
                    
                    //Reset any open nav items, including the parent of the clicked icon
                    // $navItem.parent().children('.nav-item--open').removeClass('nav-item--open').addClass('nav-item--closed');



                    //Open target nav item
                    if($navItem.hasClass('nav-item--open')) {
                        $navItem.addClass('nav-item--closed').removeClass('nav-item--open');
                    } else {
                       $navItem.removeClass('nav-item--closed').addClass('nav-item--open'); 
                    }

                    //Reset any other open nav items
                    $navItem.siblings('.nav-item--open').removeClass('nav-item--open').addClass('nav-item--closed');
                } else {
                    console.log('do nothing...');
                }
            });

             $('.keyline-option .expandable-hover-menu').on('click', '.nav-item__reveal',function(e) {
                if(navMode == 'expandable') {
                    console.log('reveal button clicked...');
                    e.preventDefault();
                    //nav-item--open
                    var $this = $(this);
                    var $navItem = $this.parent('.nav-item');
                    console.log($navItem);
                    console.log($navItem.siblings('.nav-item--open'));
                    
                    //Reset any open nav items, including the parent of the clicked icon
                    // $navItem.parent().children('.nav-item--open').removeClass('nav-item--open').addClass('nav-item--closed');



                    //Open target nav item
                    if($navItem.hasClass('nav-item--open')) {
                        $navItem.addClass('nav-item--closed').removeClass('nav-item--open');
                    } else {
                       $navItem.removeClass('nav-item--closed').addClass('nav-item--open'); 
                    }

                    //Reset any other open nav items
                    $navItem.siblings('.nav-item--open').removeClass('nav-item--open').addClass('nav-item--closed');
                } else {
                    console.log('do nothing...');
                }
            });

            $('.no-keyline-option .expandable-hover-menu').on('click', '.nav-item__reveal',function(e) {
                if(navMode == 'expandable') {
                    console.log('reveal button clicked...');
                    e.preventDefault();
                    //nav-item--open
                    var $this = $(this);
                    var $navItem = $this.parent('.nav-item');
                    console.log($navItem);
                    console.log($navItem.siblings('.nav-item--open'));
                    
                    //Reset any open nav items, including the parent of the clicked icon
                    // $navItem.parent().children('.nav-item--open').removeClass('nav-item--open').addClass('nav-item--closed');



                    //Open target nav item
                    if($navItem.hasClass('nav-item--open')) {
                        $navItem.addClass('nav-item--closed').removeClass('nav-item--open');
                    } else {
                       $navItem.removeClass('nav-item--closed').addClass('nav-item--open'); 
                    }

                    //Reset any other open nav items
                    $navItem.siblings('.nav-item--open').removeClass('nav-item--open').addClass('nav-item--closed');
                } else {
                    console.log('do nothing...');
                }
            });
        //}

        
    }

    function disableExpandableLinks() {
        console.log('disableExpandableLinks() run...');
        $('.expandable-hover-menu').off('click','.nav-item__reveal');
    }
     
    function init() {
        console.log('expandableHoverMenu.init() run');
        $win = $(window);
        winWidth = $win.width();
        $secNavPreview = $('.glb-sec-nav__preview')
        $secNav = $('#glbSecondaryNavContainer');
        //glbSecondaryNavContainer  §11 
        console.log(navMode);
        
        //Initial check to decide whether to equalise button heights
        if(winWidth >= mobileBreakpoint) {
            //equaliseButtonHeights();
            navMode = 'revealPanel';
        } else {
           // $('.secondary-nav--two-column .strip-btn').css('height','');
        }

        if(navMode == 'revealPanel') {

        } else {
            
        }
        initReveakLinks();
        //Check whether to reset button heights
        $win.on('resize', function(e) {
            console.log('begin reizing');
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                console.log('resize done...now equalise');
                winWidth = $win.width();
                

                if(winWidth >= mobileBreakpoint) {
                    navMode = 'revealPanel';
                   // equaliseButtonHeights();
                } else {
                    //$('.secondary-nav--two-column .strip-btn').css('height','');
                    navMode = 'expandable';
                    //disableExpandableLinks();
                    //initExpandableLinks();
                }
                
            }, 250);

        });

        legacyHeaderJs();

    }

    return {
        init: init
    };

})();
