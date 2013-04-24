$(document).ready(function(){

//Variables for the delay functions
var stop_timeout = false;
var fadeDelay = false;


	$(".heroText").mousemove(function() {


	//Fade out on move, with an ever so slight delay. 
	clearTimeout(fadeDelay);
	fadeDelay = setTimeout(function(){
	$(".heroText").fadeOut(200);	
	}, 15);

	//Detect whether the mouse has stopped moving.
	clearTimeout(stop_timeout);
	stop_timeout = setTimeout(function() {
		$(".heroText").fadeIn(200);
	},1000); // <--- Set the delay amount 
	});




});