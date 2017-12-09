/* Google Map Custom Script*/
jQuery(document).ready(function($) {
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
		var mapOptions = {
			zoom: 13,
			scrollwheel: false,
			center: new google.maps.LatLng(23.7803319, 90.4165189), // 
			styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b2bdc2"},{"visibility":"on"}]}]
			};

		var mapElement = document.getElementById('map');

		var map = new google.maps.Map(mapElement, mapOptions);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(23.7803319, 90.4165189),
			map: map,
			title: 'Code Studio !',
			icon: 'images/marker.png'
		});
	}
});

/* Carousel Main Slider Custom Script*/
$(window).load(function() {
    $('.carousel').carousel({
        interval: 3000 //changes the speed
    })
});

/* Quote Sider Custom Script*/
$(window).load(function() {
	$('#adroit-quote').carousel({
		pause: true,
		interval: 2500,
	});
});

/* Tooltip Custom Script*/
$(window).load(function() {
	$(function() {
		$('a').tooltip({placement: 'top'});
	});
});

/* Number Counter Custom Script*/
$(window).load(function() {
	$('.counter').counterUp({
		delay: 25,
		time: 1500
	}); 
});

/* Lode More Button Custom Script*/
$(window).load(function() {
	$(".blog_page_post_item").slice(0, 4).show(); // select the first ten
	$("#load").click(function(e){ // click event for load more
		e.preventDefault();
		$(".blog_page_post_item:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
		if($(".blog_page_post_item:hidden").length == 0){ // check if any hidden divs still exist
			alert("No more Blog Posts"); // alert if there are none left
			$('.load_more_button').hide();
		}
	});
});

/* Preloader Custom Script*/
jQuery(window).load(function() {
		// will first fade out the loading animation

		// will fade out the whole DIV that covers the website.
	jQuery("#preloader").delay(1000).fadeOut("slow");
});


/* Progressbar Custom Script*/
$(function () { 
	$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});    
$(".progress-bar").each(function(){
	each_bar_width = $(this).attr('aria-valuenow');
	$(this).width(each_bar_width + '%');
});
