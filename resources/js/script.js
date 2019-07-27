$(document).ready(function() {

    // Navigation Trigger

    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'}
    );


    // SCROLL

    $(".js--scroll-to-plans").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
       
          $('html, body').animate({
            scrollTop: $('.section-plans').offset().top
          }, 1200);
        // End if
      });


    // SMOOTH SCROLL
      $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    // ANIMATION

    $('.js--section-features').waypoint(function(direction) {
        if(direction == 'down') {
            $('.js--wp-2').addClass('animated zoomIn')
        }
    }, {offset: '50%'});

    $('.js--section-meals').waypoint(function(direction) {
        if(direction == 'down') {
            $('.meal-photo').addClass('animated pulse')
        }
    }, {offset: '50%'});

    $('.js--section-steps').waypoint(function(direction) {
        if(direction == 'down') {
            $('.phone').addClass('animated rollIn')
        }
    }, {offset: '50%'});

    $('.mob-nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);

        var icon = $('.mob-nav-icon i');
        
        if(icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-android-close');
          icon.removeClass('ion-navicon-round');
        } else {

          icon.removeClass('ion-android-close');
          icon.addClass('ion-navicon-round');
        }
    });


});



