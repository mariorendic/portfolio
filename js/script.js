  /* browser height */
  $(window).bind("load resize ready", function(e) {

      $('.hero, .browser-height').css("min-height", $(window).height() * 1);

  });


  $(document).ready(function(e) {




      $("#nav-toggle, .overlay, nav a").click(function(e) {
          e.preventDefault();
          $("nav").toggleClass("nav-open");
          $(".overlay").toggleClass("overlay-on");
      });


      $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
              if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                  if (target.length) {
                      $('html, body').animate({
                          scrollTop: (target.offset().top)
                      }, 1000);
                      return false;
                  }
              }
          });

      });

      $(window).bind("load resize scroll", function(e) {

          if ($(window).scrollTop() > 130) {
              $('header').addClass('header-scroll');

          } else {
              $('header').removeClass('header-scroll');

          }
      });

  });