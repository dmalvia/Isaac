var mainheaderLanguageSelector = (function () {
	
	var pageLanguage = false;
	
	var languageSelectorVars = [
			{'label': 'English', 'initials': 'en', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium.html', 'header': 'View this content in:'},
			{'label': 'French', 'initials': 'fr', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium--FR.html', 'header': 'Affichez le content en:'},
			{'label': 'Dutch', 'initials': 'nl', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium--NL.html', 'header': 'Lees deze pagina in het:'}
	];
	
	function initLanguageSelector(){
		
		var languageIndex = false;
		
		$.each(languageSelectorVars,function(i,ln){
			if(ln.initials === pageLanguage){
				languageIndex = i;
			}
		})
		
		if(languageIndex===false) {
			
			console.log('Language Selector error: data missing for the page language "'+pageLanguage+'"');
			
		} else {
		
			var languagesList = "<ul>";
			
			$.each(languageSelectorVars,function(i,el){			
				languagesList += '<li><a href="'+el.url+'" data-initials="'+el.initials+'"'+((languageIndex===i)?' class="selected"':'')+'>'+el.label+'</a></li>';
			})
			languagesList += "</ul>";
			
			console.log(languagesList)

			var languagesHeader = "<div class=\"mainheader-language-selector__panel-header serif\">"+ languageSelectorVars[languageIndex].header +"</div>";
			
			var languageBtn = '<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><defs><style>.cls-2{fill:none;stroke:#404041;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.4px;}</style></defs><path class="cls-2" d="M22,20.8H11.95L6.65,24.26l0-3.46H4A3.21,3.21,0,0,1,.75,17.59V6A3.21,3.21,0,0,1,4,2.74H22A3.21,3.21,0,0,1,25.25,6V17.59A3.21,3.21,0,0,1,22,20.8Z"/></svg><span class="mainheader-language-selector__selected-initials">'+ languageSelectorVars[languageIndex].initials +'</span></a>';
			var languageSubMenu = '<div class="menuFlyout mainheader-language-selector__panel">'+ languagesHeader + languagesList +'</div>';
			

			$('<ul id="mobileMenuAdditional"><li class="mainheader-language-selector">'+ languageBtn +'<li></ul>').prependTo('#topBarRight');
			// append languageSubMenu
			$('#menuBarWrapper').append($('<div id="mobileLanguageSubmenu">'+languageSubMenu+'</div>'));
			
			$('#menuAdditional').append('<li class="mainheader-language-selector ">'+ languageBtn + languageSubMenu +'</li>');

			$('#mobileMenuAdditional .mainheader-language-selector').bind('click',function(e){
				e.preventDefault();
				
				var btn=$(this);
				var target = $('#mobileLanguageSubmenu');
				
				if(btn.is('.open')) {
					btn.removeClass('open');
					target.removeClass('open');
				}
				else {
					btn.addClass('open');
					target.addClass('open');
				}
				
			});
		}
		
	};
	
	function init(args) {
		
		pageLanguage = args.pageLanguage;

		if(args.languageSelectorVars) languageSelectorVars = args.languageSelectorVars;
		
        initLanguageSelector();
    }

    return {
        init: init
    };
	
})();


// mainheaderLanguageSelector.init({'pageLanguage':'fr'});