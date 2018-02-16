$("#back").click(function() {
  $('html, body').animate({
    scrollTop: $("#home").offset().top
  }, 500);
});