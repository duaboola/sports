$(document).ready(function(){
	"use strict";
    


    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 300) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

	// 2. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	
	// 3. owl carousel

		// i.  new-cars-carousel
		
			// $("#achievements").owlCarousel({
			// 	items: 3,
			// 	autoplay:true,
			// 	loop: true,
			// 	dots:true,
			// 	mouseDrag:true,
			// 	nav:false,
			// 	smartSpeed:1000,
			// 	transitionStyle:"fade",
			// 	animateIn: 'fadeIn',
			// 	animateOut: 'fadeOutLeft'
			// 	// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			// });


		// // ii. .testimonial-carousel
	
		
			var owl=$('.testimonial-carousel');
			owl.owlCarousel({
				items:3,
				margin:0,
				dots:true,
				loop:true,
				autoplay:true,
				smartSpeed:1000,
				
				//nav:false,
				//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				
				autoplayHoverPause:false,
			
				responsiveClass:true,
					responsive:{
						0:{
							items:1
						},
						640:{
							items:2
						},
						992:{
							items:3
						}
					}
				
				
				
			});

			
			

			
				// // Refresh the carousel on tab change
				// 	$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
				// 		$('.owl-carousel').trigger('refresh.owl.carousel');
				// 	});
				
				// 	// Show the first tab content on page load
				// 	$('#option1-tab').trigger('click');
				
				

		// // iii. .brand-item (carousel)
		
		// 	$('.brand-item').owlCarousel({
		// 		items:6,
		// 		loop:true,
		// 		smartSpeed: 1000,
		// 		autoplay:true,
		// 		dots:false,
		// 		autoplayHoverPause:false,
		// 		responsive:{
		// 				0:{
		// 					items:2
		// 				},
		// 				415:{
		// 					items:2
		// 				},
		// 				600:{
		// 					items:3
		// 				},
		// 				1000:{
		// 					items:6
		// 				}
		// 			}
		// 		});
				
				
		// 		$('.play').on('click',function(){
		// 			owl.trigger('play.owl.autoplay',[1000])
		// 		})
		// 		$('.stop').on('click',function(){
		// 			owl.trigger('stop.owl.autoplay')
		// 		})

				// iv. .achievements-item (carousel)

				// $(document).ready(function() {
				// 	// Initialize Owl Carousel for Achievements
				// 	$('#achievements-carousel').owlCarousel({
				// 		loop: true,
				// 		margin: 10,
				// 		nav: true,
				// 		autoplay: true,
				// 		dots: true,
				// 		responsive: {
				// 			0: { items: 1 },
				// 			600: { items: 2 },
				// 			1000: { items: 3 }
				// 		}
				// 	});
				
				// 	// Initialize Owl Carousel for Facilities
				// 	$('#facilities-carousel').owlCarousel({
				// 		loop: true,
				// 		margin: 10,
				// 		nav: true,
				// 		autoplay: true,
				// 		dots: true,
				// 		responsive: {
				// 			0: { items: 1 },
				// 			600: { items: 2 },
				// 			1000: { items: 3 }
				// 		}
				// 	});
				
				// 	// Refresh the carousel on tab change
				// 	$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
				// 		$('.owl-carousel').trigger('refresh.owl.carousel');
				// 	});
				
				// 	// Show the first tab content on page load
				// 	$('#option1-tab').trigger('click');
				// });
				


				let lastScrollTop = 0;
				const hero = document.querySelector('.welcome-hero');
				let backgroundOffset = 0; // Tracks the background offset position

				function updateBackgroundPosition() {
					// Apply the calculated background offset
					hero.style.backgroundPositionY = `${backgroundOffset}px`;
					requestAnimationFrame(updateBackgroundPosition); // Continuously update for smooth effect
				}

				// Event listener for scroll actions
				window.addEventListener('scroll', () => {
					let scrollTop = window.scrollY;

					if (scrollTop > lastScrollTop) {
						// Scrolling down: incrementally move the background downwards
						backgroundOffset = scrollTop * 0.5; // Adjust the factor to control scroll speed
					} else {
						// Scrolling up: move back up, smoothly returning to the original position
						backgroundOffset = Math.max(0, backgroundOffset - (lastScrollTop - scrollTop) * 0.5);
					}

					lastScrollTop = scrollTop;
				});

				// Initialize the background update loop
				requestAnimationFrame(updateBackgroundPosition);

				

		

});
