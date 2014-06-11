//= require_tree .

$(document).ready(function(){
	
	 $(function() {
		$('#slides').slidesjs({
		width: 940,
		height: 528,
		play: {
		active: true,
		auto: true,
		interval: 4000,
		swap: true
		}
		});
		
		$('#voices-content1').show();
		
});
	
	
	var quotes = $(".voices-txt");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(500)
            .delay(4000)
            .fadeOut(500, showNextQuote);
    }

    showNextQuote();
	
	
	var path = window.location.href;
	$('.nav-links a').each(function() {
	    if (this.href === path) {
	        $(this).addClass('active');
	    }
	});

});