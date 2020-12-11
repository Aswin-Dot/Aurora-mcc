// --------------
// Image hover
// --------------

$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

// Back to top

// Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
      if ($(this).scrollTop() > 600) {
          $('.back-to-top').fadeIn(200)
      } else {
          $('.back-to-top').fadeOut(200)
      }
  });


  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: 0,
      }, 1500);
  });
	
// smooth-scroll

  $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
  });

	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 1000;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 1000);
		}
		hidePreloader();
  });
  
  // SLIDE

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(document).ready(function (){

// STICKY NAVBAR
  $('.js-events-section').waypoint(function(direction){
    if (direction === 'down'){
	  $('nav').addClass('sticky');
    }
    else{
	  $('nav').removeClass('sticky');
    }
  },{
    offset: 30
  });

  // Animations
  $('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animate__animated animate__fadeIn');
  },{
    offset: '50%'
  });
  $('.js-wp-2').waypoint(function(direction){
    $('.js-wp-2').addClass('animate__animated animate__bounceInUp');
  },{
    offset: '50%'
  });
  $('.js-wp-3').waypoint(function(direction){
    $('.js-wp-3').addClass('animate__animated animate__fadeIn');
  },{
    offset: '50%'
  });
  $('.js-wp-4').waypoint(function(direction){
    $('.js-wp-4').addClass('animate__animated animate__bounce');
  },{
    offset: '50%'
  });

});
