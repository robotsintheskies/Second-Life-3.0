$(document).ready(function(){



var stop_timeout = false;
var fadeDelay = false;
    $(".heroContainer").mousemove(function() {

    	fadeDelay = setTimeOut(function(){
    	$(".heroText").fadeOut(200);	
    	}, 200);
        clearTimeout(stop_timeout);
        stop_timeout = setTimeout(function() {
		$(".heroText").fadeIn(200);
        },1000);
    });




});