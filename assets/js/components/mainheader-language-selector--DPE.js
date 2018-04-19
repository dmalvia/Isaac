// Initiate by calling in the page, after this file inclusion, 
// mainheaderLanguageSelector.init({'pageLanguage':'fr'});

var mainheaderLanguageSelector = (function () {
	
	var pageLanguage = false;
	
	var languageSelectorVars = [
			{'label': 'English', 'initials': 'en', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium.html', 'header': 'Navigate this page in:'},
			{'label': 'French', 'initials': 'fr', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium--FR--with-selector.html', 'header': 'Navigate this page in:'},
			{'label': 'Dutch', 'initials': 'nl', 'url':'/pwc/ui-v3/static-pages/territory-homepage--belgium--NL.html', 'header': 'Navigate this page in:'}
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
			
			var btnToAdd = '<li class="mainheader-language-selector"><a id="shareBtn" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><defs><style>.cls-2{fill:none;stroke:#404041;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.4px;}</style></defs><path class="cls-2" d="M22,20.8H11.95L6.65,24.26l0-3.46H4A3.21,3.21,0,0,1,.75,17.59V6A3.21,3.21,0,0,1,4,2.74H22A3.21,3.21,0,0,1,25.25,6V17.59A3.21,3.21,0,0,1,22,20.8Z"/></svg><span class="mainheader-language-selector__selected-initials">'+ languageSelectorVars[languageIndex].initials +'</span></a><div class="menuFlyout mainheader-language-selector__panel">'+ languagesHeader + languagesList +'</div></li>';
			
			$('#menuAdditional').append(btnToAdd);

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