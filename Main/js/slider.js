$( document ).ready(function() {
  $('.numberMenu').click(function(){
    if($('.card').hasClass('clicked')){
      $('.card').removeClass('clicked');
      // $('.card').addClass('maximized');
    }else{
    // $(this).removeClass('maximized');
    $('.card').addClass('clicked');
    }
  });
});
