$( document ).ready(function() {
  $('.trigger1').click(function(){
    if($('.card1').hasClass('clicked')){
      $('.card1').removeClass('clicked');
      $('.card1').removeClass('disappear');
    }else{
      $('.card1').addClass('clicked');
      setTimeout(function(){
        $('.card1').addClass('disappear');
      }, 500);
    }
  });


  // $('.trigger1').click(function(){
  //   if($('.card1').hasClass('clicked')){
  //     $('.card1').removeClass('clicked');
  //   }else{
  //   $('.card1').addClass('clicked');
  //   }
  // });

  $('.trigger2').click(function(){
    if($('.card2').hasClass('clicked')){
      $('.card2').removeClass('clicked');
    }else{
    $('.card2').addClass('clicked');
    }
  });

  $('.trigger3').click(function(){
    if($('.card3').hasClass('clicked')){
      $('.card3').removeClass('clicked');
    }else{
    $('.card3').addClass('clicked');
    }
  });
});


// move it up. then disappear. then appear card two.
