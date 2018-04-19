Handlebars.registerHelper('capitalize', function(string) {
	var capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
	return capitalizedString;
});

Handlebars.registerHelper('capitalizeReadable', function(string) {
	// var capitalizedString = string.replace(/([A-Z])/g, function(str){ return ' '+str.toLowerCase(); }).replace(/^./, function(str){ return str.toUpperCase(); });
	// return capitalizedString;
	
	// temporary patch
	
	console.log(string)
	
	var foundTag = false;
	var capitalizedString = string;

	$.map(territoryDigest.PostCollection,function(el){
		if(!foundTag) {
			$.each(el.tags,function(i,tag){
				
				var key = Object.keys(tag)[0];
				
				console.log(key);
				
				if(key===string) {
					
					foundTag=true;
					capitalizedString = this[key].replace(/^\s/,''); // some of the tags start with a space
					return false
				}
			})
		}
	});
	
	return capitalizedString;
});

Handlebars.registerHelper('fixUrlPath', function() {
	return ((typeof(territoryHomepageDigest)!=='undefined')? territoryHomepageDigest.resultsPageUrl:'');
});

Handlebars.registerHelper('sanitisetags', function (tag) {
    return tag.replace(/[^A-Za-z]/g,'');
});

Handlebars.registerHelper('is', function(lvalue, rvalue, options) {
    if( lvalue!=rvalue ) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
});

Handlebars.registerHelper('ifIn', function(elem, list, options) {

	var tagsArr = territoryHomepageDigest.tagsCatergoryArray[list];

	if(!tagsArr) {
		tagsArr = (territoryHomepageDigest.tagsCatergoryArray[list] = []);
	}
	
	if(tagsArr.indexOf(elem) == -1) {

		tagsArr.push(elem);
		return options.fn(this);
	}
	return options.inverse(this);
});