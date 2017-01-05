$( document ).ready(function() {

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }


  $(document).on('scroll', function (e) {
    $('.navbar').css('opacity', ($(document).scrollTop() / 500));
  });
});
//
// $('.trigger3').click(function(){
//   $('.card2').addClass('fly');
//   $('.card3').addClass('appear');
//   setTimeout(function(){
//     $('.card2').removeClass('appear');
//     $('.card2').removeClass('fly');
//   }, 500);
//   $('#card3').addClass('animated fadeInUp');
//   $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//     $('#card3').removeClass('fadeInUp');
//   })
// });
// });
//
// if($('.card1').hasClass('appear')) {
//   $('.card2').addClass('fly');
//   setTimeout(function(){
//     $('.card1').removeClass('appear');
//     $('#card3').addClass('appear');
//   }, 500);
//   $('.card3').addClass('fadeInUp');
//   $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//     $('#card3').removeClass('fadeInUp');
//     $('.card1').removeClass('fly');
//   });
//   }
