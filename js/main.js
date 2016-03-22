$('.hamburger').on('click', function(){
	$('.mini_nav').slideToggle('slow').toggleClass('shown');
});

$(window).on('resize', function(){
	if ($(window).width()>=768){
		$('#page-header').removeAttr('style'); 
	}  
});
$('form').on('submit', function() {
});
