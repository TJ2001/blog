// 1. Refactor card One css
// 2. Refactor card One JS
// 3. Get transition from card3 to card1 via js
// 4. Get transition from card1 to card3 via js
// 5. Create card4, Get transition from card3 to card4
// 7. Create card5, Get transition from card4 to card5
// 8. Create card6, Get transition from card5 to card6
// 9. Create card7, Get transition from card6 to card7

$( document ).ready(function() {
  $('#card1').addClass('appear');
  $('#card1').addClass('fadeInUp');
  $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#card1').removeClass('fadeInUp');
  });
  $('.trigger1').click(function(){
    if($('.card2').hasClass('appear')) {
      $('.card2').addClass('fly');
      setTimeout(function(){
        $('.card2').removeClass('appear');
        $('#card1').addClass('appear');
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
        $('#card1').addClass('appear');
      }, 500);
      $('.card1').addClass('fadeInUp');
      $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card1').removeClass('fadeInUp');
        $('.card3').removeClass('fly');
      });
    }
  });

  $('.trigger2').click(function(){
    if($('.card3').hasClass('appear')) {
      $('.card3').addClass('fly');
      setTimeout(function(){
        $('.card3').removeClass('appear');
        $('#card2').addClass('appear');
      }, 500);
      $('.card2').addClass('fadeInUp');
      $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card2').removeClass('fadeInUp');
        $('.card3').removeClass('fly');
      });
    } else {
      $('.card1').addClass('fly');
      $('.card2').addClass('appear');
      setTimeout(function(){
        $('.card1').removeClass('appear');
        $('.card1').removeClass('fly');
      }, 500);
      $('#card2').addClass('animated fadeInUp');
      $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card2').removeClass('fadeInUp');
      })
    }
  });

  $('.trigger3').click(function(){
    if($('.card1').hasClass('appear')) {
      $('.card1').addClass('fly');

      setTimeout(function(){
        $('.card1').removeClass('appear');
        $('.card1').removeClass('fly');
      }, 500);
      $('#card3').addClass('appear');
      $('.card3').addClass('fadeInUp');
      $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card3').removeClass('fadeInUp');
        $('.card1').removeClass('fly');
      });
    } else {
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
    }
  });
});
