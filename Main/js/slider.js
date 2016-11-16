$( document ).ready(function() {
  $('#card1').addClass('fadeInUp');
  $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#card1').removeClass('fadeInUp');
  });
  $('.trigger1').click(function(){
    if($('.card1').hasClass('fly') || $('.card2').hasClass('appear')) {
      $('.card1').removeClass('fly');
      $('.card1').removeClass('disappear');
      $('.card2').addClass('fly');
      $('.card2').removeClass('appear');
    }else{
      // setTimeout(function(){
      //   $('.card2').removeClass('appear');
      //   $('.card1').addClass('appear');
      // }, 500);
    }
  });

  $('.trigger2').click(function(){
    // if($('.card2').hasClass('appear')){
    //   $('.card2').removeClass('fly');
    //   $('.card2').addClass('appear');
    // }else{
      $('.card1').addClass('fly');
      setTimeout(function(){
        $('.card1').addClass('disappear');
        $('.card2').addClass('appear');
      }, 500);

    // }
  });

  // $('.trigger3').click(function(){
  //   if($('.card3').hasClass('clicked')){
  //     $('.card3').removeClass('clicked');
  //   }else{
  //   $('.card3').addClass('clicked');
  //   }
  // });
});
