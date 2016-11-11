$( document ).ready(function() {
  $('.trigger1').click(function(){
    if($('.card1').hasClass('clicked')){
      $('.card1').removeClass('clicked');
      // $('.card').addClass('maximized');
    }else{
    // $(this).removeClass('maximized');
    $('.card1').addClass('clicked');
    }
  });

  $('.trigger2').click(function(){
    if($('.card2').hasClass('clicked')){
      $('.card2').removeClass('clicked');
      // $('.card').addClass('maximized');
    }else{
    // $(this).removeClass('maximized');
    $('.card2').addClass('clicked');
    }
  });

  $('.trigger3').click(function(){
    if($('.card3').hasClass('clicked')){
      $('.card1').removeClass('clicked');
      // $('.card').addClass('maximized');
    }else{
    // $(this).removeClass('maximized');
    $('.card3').addClass('clicked');
    }
  });
});
