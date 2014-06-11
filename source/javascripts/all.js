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
		

	
	function pickNewStatement(){
        var randomNum = Math.floor(Math.random() * 5);
        if(randomNum == 0){
        $('#voices-content1').show();
        }
        
        else if(randomNum == 1){
        $('#voices-content2').show();
        }
        
        else if(randomNum == 2){
        $('#voices-content3').show();
        }
        
        else if(randomNum == 3){
        $('#voices-content4').show();
	    }  
        
        else if(randomNum == 4){
        $('#voices-content5').show();
        }
        
        else if(randomNum == 5){
        $('#voices-content6').show();
        }
      
      };
      
      window.onload = pickNewStatement;
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

	$(function() {
		var current_page = window.location.href; // returns the full URL

});