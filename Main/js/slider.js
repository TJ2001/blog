// 1. Refactor card One css
// 2. Refactor card One JS
// 3. Get transition from card3 to card1 via js
// 4. Get transition from card1 to card3 via js
// 5. Create card4, Get transition from card3 to card4
// 7. Create card5, Get transition from card4 to card5
// 8. Create card6, Get transition from card5 to card6
// 9. Create card7, Get transition from card6 to card7

$( document ).ready(function() {

  $('.trigger6').click(function(){
    console.log("trigger6 clicked");
    });
  $('.trigger7').click(function(){
    console.log("trigger7 clicked");
    });


  $('#card1').addClass('appear');
  $('#card1').addClass('fadeInUp');
  $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#card1').removeClass('fadeInUp');
  });
  $('.trigger1').click(function(){
    console.log("trigger1 clicked");

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
    } else if($('.card4').hasClass('appear')) {
      $('.card4').addClass('fly');
      setTimeout(function(){
        $('.card4').removeClass('appear');
        $('#card1').addClass('appear');
      }, 500);
      $('.card1').addClass('fadeInUp');
      $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card1').removeClass('fadeInUp');
        $('.card4').removeClass('fly');
      });
    } else if($('.card5').hasClass('appear')) {
      $('.card5').addClass('fly');
      setTimeout(function(){
        $('.card5').removeClass('appear');
        $('#card1').addClass('appear');
      }, 500);
      $('.card1').addClass('fadeInUp');
      $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card1').removeClass('fadeInUp');
        $('.card5').removeClass('fly');
      });
    } else if($('.card6').hasClass('appear')) {
      $('.card6').addClass('fly');
      setTimeout(function(){
        $('.card6').removeClass('appear');
        $('#card1').addClass('appear');
      }, 500);
      $('.card1').addClass('fadeInUp');
      $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card1').removeClass('fadeInUp');
        $('.card6').removeClass('fly');
      });
    } else if($('.card7').hasClass('appear')) {
      $('.card7').addClass('fly');
      setTimeout(function(){
        $('.card7').removeClass('appear');
        $('#card1').addClass('appear');
      }, 500);
      $('.card1').addClass('fadeInUp');
      $('#card1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card1').removeClass('fadeInUp');
        $('.card7').removeClass('fly');
      });
    }
  });

  $('.trigger2').click(function(){
    console.log("trigger2 clidked");
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
    } else if($('.card1').hasClass('appear')) {
      $('.card1').addClass('fly');
      setTimeout(function(){
        $('.card1').removeClass('appear');
        $('.card1').removeClass('fly');
        $('.card2').addClass('appear');
      }, 500);
      $('#card2').addClass('animated fadeInUp');
      $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card2').removeClass('fadeInUp');
      });
    } else if($('.card4').hasClass('appear')) {
      $('.card4').addClass('fly');
      $('.card2').addClass('appear');
      setTimeout(function(){
        $('.card4').removeClass('appear');
        $('.card4').removeClass('fly');
      }, 500);
      $('#card2').addClass('animated fadeInUp');
      $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card2').removeClass('fadeInUp');
      })
    } else if($('.card5').hasClass('appear')) {
      $('.card5').addClass('fly');
      $('.card2').addClass('appear');
      setTimeout(function(){
        $('.card5').removeClass('appear');
        $('.card5').removeClass('fly');
      }, 500);
      $('#card2').addClass('animated fadeInUp');
      $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card2').removeClass('fadeInUp');
      })
    } else if($('.card6').hasClass('appear')) {
      $('.card6').addClass('fly');
      $('.card2').addClass('appear');
      setTimeout(function(){
        $('.card6').removeClass('appear');
        $('.card6').removeClass('fly');
      }, 500);
      $('#card2').addClass('animated fadeInUp');
      $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card2').removeClass('fadeInUp');
      })
    } else if($('.card7').hasClass('appear')) {
      $('.card7').addClass('fly');
      $('.card2').addClass('appear');
      setTimeout(function(){
        $('.card7').removeClass('appear');
        $('.card7').removeClass('fly');
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
    } else if($('.card4').hasClass('appear')) {
      $('.card4').addClass('fly');
      $('.card3').addClass('appear');
      setTimeout(function(){
        $('.card4').removeClass('appear');
        $('.card4').removeClass('fly');
      }, 500);
      $('#card3').addClass('animated fadeInUp');
      $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card3').removeClass('fadeInUp');
      })
    } else if($('.card5').hasClass('appear')) {
      $('.card5').addClass('fly');
      $('.card3').addClass('appear');
      setTimeout(function(){
        $('.card5').removeClass('appear');
        $('.card5').removeClass('fly');
      }, 500);
      $('#card3').addClass('animated fadeInUp');
      $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card3').removeClass('fadeInUp');
      })
    } else if($('.card6').hasClass('appear')) {
      $('.card6').addClass('fly');
      $('..card3').addClass('appear');
      setTimeout(function(){
        $('.card6').removeClass('appear');
        $('.card6').removeClass('fly');
      }, 500);
      $('#.card3').addClass('animated fadeInUp');
      $('#.card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#.card3').removeClass('fadeInUp');
      })
    } else if($('.card7').hasClass('appear')) {
      $('.card7').addClass('fly');
      $('..card3').addClass('appear');
      setTimeout(function(){
        $('.card7').removeClass('appear');
        $('.card7').removeClass('fly');
      }, 500);
      $('#.card3').addClass('animated fadeInUp');
      $('#.card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card3').removeClass('fadeInUp');
      })
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

  $('.trigger4').click(function(){
    console.log("trigger4 clicked");
    if($('.card1').hasClass('appear')) {
      $('.card1').addClass('fly');
      $('.card4').addClass('appear');
      setTimeout(function(){
        $('.card1').removeClass('appear');
        $('.card1').removeClass('fly');
      }, 500);
      $('#card4').addClass('animated fadeInUp');
      $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('#card4').removeClass('fadeInUp');
      })
    } else if($('.card2').hasClass('appear')) {
        $('.card2').addClass('fly');
        $('.card4').addClass('appear');
        setTimeout(function(){
          $('.card2').removeClass('appear');
          $('.card2').removeClass('fly');
        }, 500);
        $('#card4').addClass('animated fadeInUp');
        $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card4').removeClass('fadeInUp');
        })
    } else if($('.card3').hasClass('appear')) {
        $('.card3').addClass('fly');
        $('.card4').addClass('appear');
        setTimeout(function(){
          $('.card3').removeClass('appear');
          $('.card3').removeClass('fly');
        }, 500);
        $('#card4').addClass('animated fadeInUp');
        $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card4').removeClass('fadeInUp');
        })
      } else if($('.card5').hasClass('appear')) {
        $('.card5').addClass('fly');
        $('..card4').addClass('appear');
        setTimeout(function(){
          $('.card5').removeClass('appear');
          $('.card5').removeClass('fly');
        }, 500);
        $('#.card4').addClass('animated fadeInUp');
        $('#.card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#.card4').removeClass('fadeInUp');
        })
      } else if($('.card6').hasClass('appear')) {
        $('.card6').addClass('fly');
        $('..card4').addClass('appear');
        setTimeout(function(){
          $('.card6').removeClass('appear');
          $('.card6').removeClass('fly');
        }, 500);
        $('#.card4').addClass('animated fadeInUp');
        $('#.card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#.card4').removeClass('fadeInUp');
        })
      } else if($('.card7').hasClass('appear')) {
        $('.card7').addClass('fly');
        $('..card4').addClass('appear');
        setTimeout(function(){
          $('.card7').removeClass('appear');
          $('.card7').removeClass('fly');
        }, 500);
        $('#.card4').addClass('animated fadeInUp');
        $('#.card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card4').removeClass('fadeInUp');
        })
      }
    });

    //card5
    $('.trigger5').click(function(){
    console.log("trigger5 clicked");
      if ($('.card1').hasClass('appear')) {
        $('.card1').addClass('fly');
        $('.card5').addClass('appear');
        setTimeout(function(){
          $('.card1').removeClass('appear');
          $('.card1').removeClass('fly');
        }, 500);
        $('#card5').addClass('animated fadeInUp');
        $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card5').removeClass('fadeInUp');
        });
      } else if ($('.card3').hasClass('appear')) {
        $('.card3').addClass('fly');
        setTimeout(function(){
          $('.card3').removeClass('appear');
          $('#card5').addClass('appear');
        }, 500);
        $('.card5').addClass('fadeInUp');
        $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card5').removeClass('fadeInUp');
          $('.card3').removeClass('fly');
        });
      } else if ($('.card4').hasClass('appear')) {
        $('.card4').addClass('fly');
        $('.card5').addClass('appear');
        setTimeout(function(){
          $('.card4').removeClass('appear');
          $('.card4').removeClass('fly');
        }, 500);
        $('#card5').addClass('animated fadeInUp');
        $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card5').removeClass('fadeInUp');
        })
      } else if($('.card2').hasClass('appear')) {
        $('.card2').addClass('fly');
        $('.card5').addClass('appear');
        setTimeout(function(){
          $('.card2').removeClass('appear');
          $('.card2').removeClass('fly');
        }, 500);
        $('#card5').addClass('animated fadeInUp');
        $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card5').removeClass('fadeInUp');
        })
      } else if($('.card6').hasClass('appear')) {
        $('.card6').addClass('fly');
        $('.card5').addClass('appear');
        setTimeout(function(){
          $('.card6').removeClass('appear');
          $('.card6').removeClass('fly');
        }, 500);
        $('#card5').addClass('animated fadeInUp');
        $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card5').removeClass('fadeInUp');
        })
      } else if($('.card7').hasClass('appear')) {
        $('.card7').addClass('fly');
        $('.card5').addClass('appear');
        setTimeout(function(){
          $('.card7').removeClass('appear');
          $('.card7').removeClass('fly');
        }, 500);
        $('#card5').addClass('animated fadeInUp');
        $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#card5').removeClass('fadeInUp');
        })
      }
    });

  //   //card6
  //   $('.trigger6').click(function(){
  //         console.log("trigger6 clicked");
  //     // if($('.card3').hasClass('appear')) {
  //     //     $('.card3').addClass('fly');
  //     //     setTimeout(function(){
  //     //       $('.card3').removeClass('appear');
  //     //       $('#card2').addClass('appear');
  //     //     }, 500);
  //     //     $('.card2').addClass('fadeInUp');
  //     //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     //       $('#card2').removeClass('fadeInUp');
  //     //       $('.card3').removeClass('fly');
  //     //     });
  //     //   } else if($('.card1').hasClass('appear')) {
  //     //     $('.card1').addClass('fly');
  //     //     $('.card2').addClass('appear');
  //     //     setTimeout(function(){
  //     //       $('.card1').removeClass('appear');
  //     //       $('.card1').removeClass('fly');
  //     //     }, 500);
  //     //     $('#card2').addClass('animated fadeInUp');
  //     //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     //       $('#card2').removeClass('fadeInUp');
  //     //     });
  //     //   } else if($('.card4').hasClass('appear')) {
  //     //     $('.card4').addClass('fly');
  //     //     $('.card2').addClass('appear');
  //     //     setTimeout(function(){
  //     //       $('.card4').removeClass('appear');
  //     //       $('.card4').removeClass('fly');
  //     //     }, 500);
  //     //     $('#card2').addClass('animated fadeInUp');
  //     //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     //       $('#card2').removeClass('fadeInUp');
  //     //     })
  //     //   } else if($('.card5').hasClass('appear')) {
  //     //     $('.card5').addClass('fly');
  //     //     $('.card2').addClass('appear');
  //     //     setTimeout(function(){
  //     //       $('.card5').removeClass('appear');
  //     //       $('.card5').removeClass('fly');
  //     //     }, 500);
  //     //     $('#card2').addClass('animated fadeInUp');
  //     //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     //       $('#card2').removeClass('fadeInUp');
  //     //     })
  //     //   } else if($('.card6').hasClass('appear')) {
  //     //     $('.card6').addClass('fly');
  //     //     $('.card2').addClass('appear');
  //     //     setTimeout(function(){
  //     //       $('.card6').removeClass('appear');
  //     //       $('.card6').removeClass('fly');
  //     //     }, 500);
  //     //     $('#card2').addClass('animated fadeInUp');
  //     //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     //       $('#card2').removeClass('fadeInUp');
  //     //     })
  //     //   } else if($('.card7').hasClass('appear')) {
  //     //     $('.card7').addClass('fly');
  //     //     $('.card2').addClass('appear');
  //     //     setTimeout(function(){
  //     //       $('.card7').removeClass('appear');
  //     //       $('.card7').removeClass('fly');
  //     //     }, 500);
  //     //     $('#card2').addClass('animated fadeInUp');
  //     //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     //       $('#card2').removeClass('fadeInUp');
  //     //     })
  //     //   }
  //   });
  //
  //   //card7
  //   $('.trigger7').click(function(){
  //         console.log("trigger7 clicked");
  //       // if($('.card3').hasClass('appear')) {
  //       //   $('.card3').addClass('fly');
  //       //   setTimeout(function(){
  //       //     $('.card3').removeClass('appear');
  //       //     $('#card7').addClass('appear');
  //       //   }, 500);
  //       //   $('.card7').addClass('fadeInUp');
  //       //   $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       //     $('#card7').removeClass('fadeInUp');
  //       //     $('.card3').removeClass('fly');
  //       //   });
  //       // } else if($('.card1').hasClass('appear')) {
  //       //   $('.card1').addClass('fly');
  //       //   $('.card7').addClass('appear');
  //       //   setTimeout(function(){
  //       //     $('.card1').removeClass('appear');
  //       //     $('.card1').removeClass('fly');
  //       //   }, 500);
  //       //   $('#card7').addClass('animated fadeInUp');
  //       //   $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       //     $('#card7').removeClass('fadeInUp');
  //       //   });
  //       // } else if($('.card4').hasClass('appear')) {
  //       //   $('.card4').addClass('fly');
  //       //   $('.card7').addClass('appear');
  //       //   setTimeout(function(){
  //       //     $('.card4').removeClass('appear');
  //       //     $('.card4').removeClass('fly');
  //       //   }, 500);
  //       //   $('#card7').addClass('animated fadeInUp');
  //       //   $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       //     $('#card7').removeClass('fadeInUp');
  //       //   })
  //       // } else if($('.card5').hasClass('appear')) {
  //       //   $('.card5').addClass('fly');
  //       //   $('.card7').addClass('appear');
  //       //   setTimeout(function(){
  //       //     $('.card5').removeClass('appear');
  //       //     $('.card5').removeClass('fly');
  //       //   }, 500);
  //       //   $('#card7').addClass('animated fadeInUp');
  //       //   $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       //     $('#card7').removeClass('fadeInUp');
  //       //   })
  //       // } else if($('.card6').hasClass('appear')) {
  //       //   $('.card6').addClass('fly');
  //       //   $('.card7').addClass('appear');
  //       //   setTimeout(function(){
  //       //     $('.card6').removeClass('appear');
  //       //     $('.card6').removeClass('fly');
  //       //   }, 500);
  //       //   $('#card7').addClass('animated fadeInUp');
  //       //   $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       //     $('#card7').removeClass('fadeInUp');
  //       //   })
  //       // } else if($('.card2').hasClass('appear')) {
  //       //   $('.card2').addClass('fly');
  //       //   $('.card7').addClass('appear');
  //       //   setTimeout(function(){
  //       //     $('.card2').removeClass('appear');
  //       //     $('.card2').removeClass('fly');
  //       //   }, 500);
  //       //   $('#card7').addClass('animated fadeInUp');
  //       //   $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       //     $('#card7').removeClass('fadeInUp');
  //       //   })
  //     // }
  //   });
  //
  // });
});
