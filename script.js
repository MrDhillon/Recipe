$(document).ready(function() {

	console.log("Script Included!");

	$('.button').click(function(){
		$('.image').fadeToggle();
	});

	$('ol').selectable();

	$('ul li').click(function(){
		$(this).toggleClass('stroked');
	});

	$('ul li').mouseenter(function () {
		$(this).fadeTo('fast',0.5);
	});

	$('ul li').mouseleave(function(){
		$(this).fadeTo('fast',1);
	});



	
});