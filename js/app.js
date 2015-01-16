// Smooth Scrolling by Bill Erickson http://www.billerickson.net/code/smooth-scrolling-anchor-links/
// This adds an offset in case the header is fixed
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			var top_offset = 0;
			if ( $('nav').css('position') == 'fixed' ) {
				top_offset = $('nav').height();
			}
			 $('html,body').animate({
				 scrollTop: target.offset().top - top_offset
			}, 1000);
			return false;
		}
	}
});	