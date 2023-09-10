/*
[Custom Script] Copyright © 2017
Theme Name : DigiWeb - Internet Marketing Landing Page
Version    : 1.0
Author     : Melo Themes Team
Support    : design@hostbili.com
*/

/*jslint browser: true*/
/*global $, jQuery, alert*/

/*--------------------------------------------------------------
TABLE OF CONTENTS:
----------------------------------------------------------------
# Document Ready
## Vars
## Page Pre Loader
## Scroll To Top
## Partner Slider - OwlCarousel 
## jQuery Smooth scroll
## Theme Scheme Changer 
--------------------------------------------------------------*/

/* Document Ready */
$(document).ready(function () {

	"use strict";

	/* vars */
	var $move_top,
		$partner_slider,
		theme_settings;

	/* Page Pre Loader */
	$(window).on('load', function () { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
	});

	/* WOW JS - Scroll reveal */
	new WOW().init();

	/*Scroll To Top*/
	$move_top = $(".back-to-top");
	if ($($move_top).length) {
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 600) {
				$($move_top).fadeIn();
			} else {
				$($move_top).fadeOut();
			}
		});

		$($move_top).on('click', function () {
			$("html, body").animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	}

	/* Partner Slider - OwlCarousel */
	$partner_slider = $(".cs-partner-slider");
	if ($($partner_slider).length) {
		$($partner_slider).owlCarousel({
			items: 6,
			autoplay: true,
			nav: false,
			dots: false,
			responsive: {
				0: {
					items: 2,
					dots: true
				},
				600: {
					items: 3,
					dots: true
				},
				992: {
					items: 4
				},
				1000: {
					items: 5
				},
				1200: {
					items: 6
				}
			}
		});
	}

	//jQuery Smooth scroll - for page scrolling feature - requires jQuery Easing plugin
	$(document).on('click', 'a.page-scroll', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	/* Theme Scheme Changer */
	theme_settings = $(".theme-settings");
	if ($(theme_settings).length) {
		theme_settings.on('click', '.theme-color', function (event) {
			var val = $(this).attr('data-color');
			$('#style_theme').attr('href', 'css/' + val + '.css');
			theme_settings.removeClass('theme-active');
			theme_settings.addClass('theme-active');
			return false;
		});
		$(".theme-click").on('click', function () {
			$("#switcher").toggleClass("active");
			return false;
		});

	}

});
