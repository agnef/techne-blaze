import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './posts/ListePosts.js';


$(function() {
	$(window).resize(function(){
		var w = $(window).width();
		if (w > 850){
			$('.menu_mobile').hide();
		}
	});
	// Mobile Navigation mouais
	// $('.bt_menu_mobile').click(function() {
	//     if ($('.menu').hasClass('menu')) {
	//         $('.menu').addClass('menu_mobile');
	//         $('.menu').removeClass('menu');
	//     } else {
	//     	$('.menu_mobile').addClass('menu');
	//     	$('menu').removeClass('menu_mobile');
	//     }
	// });

});
