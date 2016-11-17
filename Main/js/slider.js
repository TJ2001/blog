$( document ).ready(function() {
  $('#card1').addClass('fadeInUp');
  $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#card1').removeClass('fadeInUp');
  });
  $('.trigger1').click(function(){
    if($('.card2').hasClass('appear')) {
      $('.card2').addClass('fly');
      setTimeout(function(){
        $('.card2').removeClass('appear');
        $('#card1').removeClass('disappear');
      }, 500);
      $('.card1').addClass('fadeInUp');
      $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card1').removeClass('fadeInUp');
        $('.card2').removeClass('fly');
      });
    } else if($('.card3').hasClass('appear')) {
      $('.card3').addClass('fly');
      setTimeout(function(){
        $('.card3').removeClass('appear');
        $('#card1').removeClass('disappear');
      }, 500);
      $('.card1').addClass('fadeInUp');
      $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card1').removeClass('fadeInUp');
        $('.card3').removeClass('fly');
      });
    }
  });

  $('.trigger2').click(function(){
    $('.card1').addClass('fly');
    $('.card2').addClass('appear');
    setTimeout(function(){
      $('.card1').addClass('disappear');
      $('.card1').removeClass('fly');
    }, 500);
    $('#card2').addClass('animated fadeInUp');
    $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#card2').removeClass('fadeInUp');
    })
  });

  $('.trigger3').click(function(){
    $('.card2').addClass('fly');
    $('.card3').addClass('appear');
    setTimeout(function(){
      $('.card2').removeClass('appear');
      $('.card2').removeClass('fly');
    }, 500);
    $('#card3').addClass('animated fadeInUp');
    $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#card3').removeClass('fadeInUp');
    })
  });
});
