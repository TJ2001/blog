$( document ).ready(function() {

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }


  // $(document).on('scroll', function (e) {
  //   $('.navbar').css('opacity', ($(document).scrollTop() / 500));
  // });
});
