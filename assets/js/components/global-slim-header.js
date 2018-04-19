var globalSlimHeader = (function () {
    var mobileBreakpoint = 768,
        $win,
        winWidth,
        resizeTimer,
        headroom;
    
    function handleToolPanels(src) {
        var $this = $(src);
        var $panel = $this.closest('.glb-slim-header__tool');
  
        //Reset any open panels
        $panel.siblings('.glb-slim-header__tool--open').removeClass('glb-slim-header__tool--open').addClass('glb-slim-header__tool--closed');
        $panel.find('.pwc-inline-form__field--auto-suggest select').select2("close");
        $panel.find('.pwc-inline-form__field--dropdown select').select2("close");
       
        //Toggle open / closed state on target panel
        if($panel.hasClass('glb-slim-header__tool--open')) {
            //Close panel
            $panel.addClass('glb-slim-header__tool--closed').removeClass('glb-slim-header__tool--open');
        } else if($panel.hasClass('glb-slim-header__tool--closed')) {
            //Open panel
            $panel.addClass('glb-slim-header__tool--open').removeClass('glb-slim-header__tool--closed');

            $panel.one(' otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {

                // Try to focus certain controls
                if($panel.hasClass('glb-slim-header__tool--search')) {
                    //Focus on first form element if found
                    $panel.find('input:first-of-type').focus();
                }

                if($panel.hasClass('glb-slim-header__tool--autosuggest')) {
                    //Trigger search and dropdown after small delay
                    setTimeout(function() { 
                        $panel.find('.pwc-inline-form__field--auto-suggest select').select2("open");

                        //Detect user tabbing out of control
                        $(document).on('keyup',function(e) {
                            if ( e.which == 9 ) {
                                e.preventDefault();

                                $panel.find('.pwc-inline-form__field--auto-suggest select').focus();

                                //Tidy up event handler
                                $(document).off('keyup');
                            }
                            
                        });
                    }, 250);
                }


                if($panel.hasClass('glb-slim-header__tool--dropdown')) {
                    //Trigger dropdown after small delay
                    setTimeout(function() { 
                        $panel.find('.pwc-inline-form__field--dropdown select').select2("open"); 
                        $panel.find('.pwc-inline-form__field--dropdown .select2-selection--single').focus();
                    }, 250);
                }
            });
        }

        //Add state class to body to help with positioning on mobile
        $('body').toggleClass('gh-panel-active');

    }

    function manageToolPanels() {
        $('a[data-toggle-gh-panel="true"]').on('keyup',function(e) {
            if ( e.which == 32 ) {
                e.preventDefault();
                handleToolPanels(this);
            }    
        });

         $('a[data-toggle-gh-panel="true"],button[data-toggle-gh-panel="true"]').on('click',function(e) {
            e.preventDefault();
            handleToolPanels(this);

            //Close navigation takeover if open
            if($('body').hasClass('glb-nav-active')) {
                $('#dropdownTrigger_lg').trigger('click');
            }
        });
    }

    function applySelect2CountrySelector() {
        var $select2Control = $('.pwc-inline-form__field--auto-suggest select').select2({
            theme: "pwc select2-container--has-search",
            allowClear: false
        });

        //Handle selection
        $select2Control.on("select2:select", function (e) { 
            if(e.target.value.length) {
                location.href = e.target.value;
            }
        });       

    }

    function applySelect2LanguageSelector() {
        var $select2Control = $('.pwc-inline-form__field--dropdown select').select2({
            theme: "pwc  select2-container--dropdown",
            allowClear: false,
            minimumResultsForSearch: Infinity
        });

        //Handle selection
        $select2Control.on("select2:select", function (e) { 
            if(e.target.value.length) {
                location.href = e.target.value;
            }
        });
    }

    function manageNav() {
        //Control navigation takeover
        $('a[data-toggle-nav="true"],button[data-toggle-nav="true"]').on('click',function() {
            
            var $this = $(this);            
           
            if ($this.hasClass('glb-slim-header__navbar-toggle--active')) {    
                $this.removeClass('navbar-toggle--active glb-slim-header__navbar-toggle--active');
                //Hide nav
                $('body').removeClass('glb-nav-active');

                //Restore normal torelance
                headroom.tolerance = { down: 25, up: 15 }; 
            } else {
                $this.addClass('navbar-toggle--active glb-slim-header__navbar-toggle--active');
                
                //Increase tolerance to prevent header from hiding on scroll
                headroom.tolerance = { down: 200, up: 200 };

                //Reveal nav
                $('body').addClass('glb-nav-active');
                //Automatically expand dropdown for current section for mobile
                if(winWidth < 768) {
                    setTimeout(function() { 
                       $('#globalNav').find('.glb-nav__links-wrapper li.active.dropdown a.dropdown-toggle').trigger('click');
                    }, 100);
                } 

                handleBreadcrumbScroll();
            }


        });

        //Helpers for select2-based autosuggest
        $('.glb-nav__tools .pwc-inline-form__field--select2 label.field-label').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.closest('.pwc-inline-form__field--select2');
           
            if($panel.hasClass('pwc-inline-form__field--auto-suggest')) {
                
                //Trigger search and dropdown after small delay
                setTimeout(function() { 
                    $panel.find('select').select2("open");

                    //Detect user tabbing out of control
                    $(document).on('keyup',function(e) {
                        if ( e.which == 9 ) {
                            e.preventDefault();

                            $panel.find('select').focus();
                            //tidy uo
                            $(document).off('keyup');  
                        }
                        
                    });
                }, 250);
                
            }

            if($panel.hasClass('pwc-inline-form__field--dropdown')) {
                //Trigger dropdown after small delay
                setTimeout(function() { 
                    $panel.find('select').select2("open"); 
                    $panel.find('.select2-selection--single').focus(); 
                }, 250);
            }

        });
    }

    function manageSlimHeader() {
        var navBar = $('#navBar'); //now fullpage take over
        var $wrapper = $('#glbSlimHeaderWrapper');
        var $toggle = $('#glbSlimHeaderWrapper .navbar-toggle');
        var $body = $('body');
        
        t = $("#glbSlimHeaderWrapper")[0];
        var headroomOptions = {
            "offset": 100,
            "tolerance": { down: 30, up: 15 },
            "classes": {
                "initial": "slide",
                "pinned": "glb-slim-header-wrapper--pinned",//slide--reset
                "unpinned": "glb-slim-header-wrapper--unpinned"//slide--up 
            },
            onPin : function() {
                //Renable nav toggle 
                $toggle.removeAttr('disabled');
            },
            onUnpin : function() {
                //Disable nav toggle button when header is hidden
                $toggle.attr('disabled','disabled');
            }
        };

        headroom = new Headroom(t, headroomOptions )
        headroom.init();
    }

    function manageBreadcrumbClip() {
        if(winWidth >= mobileBreakpoint) {
            handleBreadcrumbClip()
        }

        $(window).on('resize', function(e) {
            clearTimeout(bcResizeTimer);
            var bcResizeTimer = setTimeout(function() {
                winWidth = $win.width();
                
               if(winWidth >= mobileBreakpoint) {
                     handleBreadcrumbClip();
               }                   
            }, 500);
        });

    }

    function handleBreadcrumbClip() {
        var $scrollPane = $('#slimHeaderBreadcrumbWrapper .breadcrumb-component__scroll-pane');
        var paneWidth = $scrollPane.innerWidth();
        var bcWidth= $scrollPane.children('ul.breadcrumb').outerWidth();

        
        if(bcWidth >= paneWidth) {
            //Apply clip if required
            $('.glb-slim-header__breadcrumb').addClass('glb-slim-header__breadcrumb--apply-clip glb-slim-header__breadcrumb--clipped ');
            
            //Scroll to end of breacrumb if it's wider than scroll pane
            setTimeout(function() { 
                 $scrollPane.scrollLeft(bcWidth  + 100);
            }, 100)
           
        } else {
            $('.glb-slim-header__breadcrumb').removeClass('glb-slim-header__breadcrumb--apply-clip glb-slim-header__breadcrumb--clipped ');
        }
    }

    function handleBreadcrumbScroll() {
        var $scrollPane = $('#slimHeaderBreadcrumbWrapper .breadcrumb-component__scroll-pane');
        var paneWidth = $scrollPane.innerWidth();
        var bcWidth= $scrollPane.children('ul.breadcrumb').outerWidth();

        //Scroll to end of breacrumb on mobile
        if($(window).width() < 768) {
            $scrollPane.scrollLeft(bcWidth  + 100);
        }

    }

    function manageBreadcrumb() {
        var $bcComponent = $('.glb-slim-header__breadcrumb');
        
        handleBreadcrumbScroll();

        manageBreadcrumbClip();

        $('button[data-toggle-breadcrumb-clip="true"]').on('click',function() {
            var $this = $(this);            

            if ($this.hasClass('glb-slim-header__breadcrumb-reveal--active')) {  
                $this.removeClass('glb-slim-header__breadcrumb-reveal--active');
                $bcComponent.removeClass('glb-slim-header__breadcrumb--expanded').addClass('glb-slim-header__breadcrumb--clipped');
            } else {
                $this.addClass('glb-slim-header__breadcrumb-reveal--active');
                $bcComponent.removeClass('glb-slim-header__breadcrumb--clipped').addClass('glb-slim-header__breadcrumb--expanded');
            }
        });
    }

    function init(args) {
        $win = $(window);
        winWidth = $win.width();
       

        manageSlimHeader();
        manageNav();
        manageToolPanels();
        //if(typeof args.applySelect2CountrySelector!== 'undefined' && args.applySelect2CountrySelector) {
            //select2CountrySelectorEnabled = true;
            applySelect2CountrySelector();
        //}

        //if(typeof args.applySelect2LanguageSelector!== 'undefined' && args.applySelect2LanguageSelector) {
            //select2CountrySelectorEnabled = true;
            applySelect2LanguageSelector();
        //}
        
        manageBreadcrumb();

    }

    return {
        init: init
    };

})();

