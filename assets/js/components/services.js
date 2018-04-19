$(function() {
	function serviceModule() {
		var $win = $(window);
		var mobileBreakpoint = '767';
		$('.serviceModule').on('click','li a', function(e) {
			var $this = $(this),
				$servicesWrapper = $this.parents('.serviceModule'),
				$serviceContent = $servicesWrapper.find('.service-module__preview-panel');
			
			
			//If device is large enough show content panel, otherwise just navigate to page
			if(parseInt($win.width()) > mobileBreakpoint) {
				e.preventDefault();

				$servicesWrapper.find('li a').removeClass('serviceOpen active');

				$(this).addClass('serviceOpen active');
				var sImg = $this.data('image'),
					sTitle = $this.text(),
					sLead = $this.data('lead'),
					sLink = $this.attr('href'),
					sSectionTitle = $this.attr('data-section-heading'),
					pos = $this.offset();

				$serviceContent.html(
				'			<h2 class="services-module__panel-heading h3">'+
				'				<small>'+ sSectionTitle +'</small>'+
								sTitle+
				'			</h2>'+
				'			<div class="services-module__panel-image">'+
				'				<img alt="'+sTitle+'" class="img-responsive" src="'+sImg+'">'+
				'			</div>'+
				'			<div class="services-module__panel-copy">'+
				'				<p>'+sLead+'</p>'+
				'			</div>'+
				'			<p><a href="'+sLink+'" class="btn btn--secondary btn--transparent">Find out more</a></p>'+
				'');
			} /* else { // execute link
				alert("will navigate to URL...");
			} */
		});
	}

	serviceModule();

});