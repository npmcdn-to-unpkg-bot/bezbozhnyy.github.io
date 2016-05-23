$(function(){
		'use strict'

	$('.tabsInclude .tabsItem').not(':first').hide();

	$('.wrapperMenu .tabsTitle').click(function(e){
	e.preventDefault();

	$('.wrapperMenu .tabsTitle').removeClass('selected').eq($(this).index()).addClass('selected');
	$('.tabsInclude .tabsItem').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('selected');


	$('form div.screentip_box').hover(
		function(){
		$(this).find('span').stop().animate({opacity: 1});
		},
		function(){
		$(this).find('span').stop().animate({opacity: 0});
		}),

	$('div input.button').click(function() {
		$('form span').stop().animate({opacity: 1});
	});
})
