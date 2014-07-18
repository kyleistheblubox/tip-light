$(document).ready(function(){
	$('.thumb-tip').empty();

    $('.fa-info-circle').on('mouseenter', function(){
    	if ($(document).width() > 767) {
	        var iconPos = $(this).offset();

	        $(this).children('.tool-content').stop().fadeIn();

	        spanHeight = ($(this).children('.tool-content').outerHeight() + 20);

	        $(this).children('.tool-content').css({left : (iconPos.left - 37), top : (iconPos.top - spanHeight) });
    	}

    });

    $('.fa-info-circle').on('mouseleave', function(){

	    if ($(document).width() > 767) {

	    	 $(this).children('.tool-content').stop().fadeOut();

	    }

    });

    $('.fa-info-circle').on('click', function(){
    	if ($(document).width() < 767 ) {
    		var text = $(this).children('.tool-content').html();

    		if ($(this).siblings('.thumb-tip').is(':empty')) {

    			$(this).siblings('.thumb-tip').html(text).slideDown();

    		} else {

    			$(this).siblings('.thumb-tip').slideUp('300', function(){

    				$(this).empty();

    			})
    		}

    	}
    });

});