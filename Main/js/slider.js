// 1. Refactor card One css
// 2. Refactor card One JS
// 3. Get transition from card3 to card1 via js
// 4. Get transition from card1 to card3 via js
// 5. Create card4, Get transition from card3 to card4
// 7. Create card5, Get transition from card4 to card5
// 8. Create card6, Get transition from card5 to card6
// 9. Create card7, Get transition from card6 to card7

function Card (index, color) {
    this.index = index,
    this.color = color,
    this.width = "500px",
    this.height = "500px"
};

Card.prototype.slide1 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card1";

  $(trigger).click(function(){

    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(otherCard).removeClass('fly');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('animated fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
      });
    }
  });
}

Card.prototype.slide2 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card2";

  $(trigger).click(function(){
    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
        $(otherCard).removeClass('fly');
      });
    }
  });
}

Card.prototype.slide3 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card3";
  $(trigger).click(function(){
    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(otherCard).removeClass('fly');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
      });
    }
  });
}

Card.prototype.slide3A = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card3";
  $(trigger).click(function(){
    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(otherCard).removeClass('fly');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('animated fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
      });
    }
  });
};

Card.prototype.slide4 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card4";

  $(trigger).click(function(){
    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
        $(otherCard).removeClass('fly');
      });
    }
  });
};

Card.prototype.slide5 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card5";

  $(trigger).click(function(){
    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
        $(otherCard).removeClass('fly');
      });
    }
  });
};

Card.prototype.slide6 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card6";

  $(trigger).click(function(){
    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
        $(otherCard).removeClass('fly');
      });
    }
  });
};

Card.prototype.slide7 = function(){
  var trigger = ".trigger" + this.index;
  var cardId = "#card" + this.index;
  var otherCard = ".card7";

  $(trigger).click(function(){
    if($(otherCard).hasClass('appear')) {
      $(otherCard).addClass('fly');
      setTimeout(function(){
        $(otherCard).removeClass('appear');
        $(cardId).addClass('appear');
      }, 500);
      $(cardId).addClass('fadeInUp');
      $(cardId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(cardId).removeClass('fadeInUp');
        $(otherCard).removeClass('fly');
      });
    }
  });
};

$( document ).ready(function() {
var card1 = new Card(1, "blue");
var card2 = new Card(2, "pink");
var card3 = new Card(3, "orange");
var card4 = new Card(4, "red");
var card5 = new Card(5, "green");
var card6 = new Card(6, "darkblue");
var card7 = new Card(7, "black");
card1.slide2();
card1.slide3();
card1.slide4();
card1.slide5();
card1.slide6();
card1.slide7();
card2.slide1();
card2.slide3A();
card2.slide4();
card2.slide5();
card2.slide6();
card2.slide7();

card3.slide1();
card3.slide2();
card3.slide4();
card3.slide5();
card3.slide6();
card3.slide7();

card4.slide1();
card4.slide2();
card4.slide3A();
card4.slide5();
card4.slide6();
card4.slide7();

card5.slide1();
card5.slide2();
card5.slide3();
card5.slide4();
card5.slide6();
card5.slide7();

card6.slide1();
card6.slide2();
card6.slide3();
card6.slide4();
card6.slide5();
card6.slide7();

card7.slide1();
card7.slide2();
card7.slide3();
card7.slide4();
card7.slide5();
card7.slide6();

  $('#card1').addClass('appear');


  // $('.trigger2').click(function(){
  //   console.log("trigger2 clidked");
  //   if($('.card3').hasClass('appear')) {
  //     $('.card3').addClass('fly');
  //     setTimeout(function(){
  //       $('.card3').removeClass('appear');
  //       $('#card2').addClass('appear');
  //     }, 500);
  //     $('.card2').addClass('fadeInUp');
  //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card2').removeClass('fadeInUp');
  //       $('.card3').removeClass('fly');
  //     });
  //   } else if($('.card4').hasClass('appear')) {
  //     $('.card4').addClass('fly');
  //     $('.card2').addClass('appear');
  //     setTimeout(function(){
  //       $('.card4').removeClass('appear');
  //       $('.card4').removeClass('fly');
  //     }, 500);
  //     $('#card2').addClass('animated fadeInUp');
  //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card2').removeClass('fadeInUp');
  //     })
  //   } else if($('.card5').hasClass('appear')) {
  //     $('.card5').addClass('fly');
  //     $('.card2').addClass('appear');
  //     setTimeout(function(){
  //       $('.card5').removeClass('appear');
  //       $('.card5').removeClass('fly');
  //     }, 500);
  //     $('#card2').addClass('animated fadeInUp');
  //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card2').removeClass('fadeInUp');
  //     })
  //   } else if($('.card6').hasClass('appear')) {
  //     $('.card6').addClass('fly');
  //     $('.card2').addClass('appear');
  //     setTimeout(function(){
  //       $('.card6').removeClass('appear');
  //       $('.card6').removeClass('fly');
  //     }, 500);
  //     $('#card2').addClass('animated fadeInUp');
  //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card2').removeClass('fadeInUp');
  //     })
  //   } else if($('.card7').hasClass('appear')) {
  //     $('.card7').addClass('fly');
  //     $('.card2').addClass('appear');
  //     setTimeout(function(){
  //       $('.card7').removeClass('appear');
  //       $('.card7').removeClass('fly');
  //     }, 500);
  //     $('#card2').addClass('animated fadeInUp');
  //     $('#card2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card2').removeClass('fadeInUp');
  //     })
  //   }
  // });

  // $('.trigger3').click(function(){
  //   if($('.card1').hasClass('appear')) {
  //     $('.card1').addClass('fly');
  //     setTimeout(function(){
  //       $('.card1').removeClass('appear');
  //       $('.card1').removeClass('fly');
  //     }, 500);
  //     $('#card3').addClass('appear');
  //     $('.card3').addClass('fadeInUp');
  //     $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card3').removeClass('fadeInUp');
  //       $('.card1').removeClass('fly');
  //     });
  //   } else if($('.card4').hasClass('appear')) {
  //     $('.card4').addClass('fly');
  //     $('.card3').addClass('appear');
  //     setTimeout(function(){
  //       $('.card4').removeClass('appear');
  //       $('.card4').removeClass('fly');
  //     }, 500);
  //     $('#card3').addClass('animated fadeInUp');
  //     $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card3').removeClass('fadeInUp');
  //     })
  //   } else if($('.card5').hasClass('appear')) {
  //     $('.card5').addClass('fly');
  //     $('.card3').addClass('appear');
  //     setTimeout(function(){
  //       $('.card5').removeClass('appear');
  //       $('.card5').removeClass('fly');
  //     }, 500);
  //     $('#card3').addClass('animated fadeInUp');
  //     $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card3').removeClass('fadeInUp');
  //     })
  //   } else if($('.card6').hasClass('appear')) {
  //     $('.card6').addClass('fly');
  //     $('..card3').addClass('appear');
  //     setTimeout(function(){
  //       $('.card6').removeClass('appear');
  //       $('.card6').removeClass('fly');
  //     }, 500);
  //     $('#.card3').addClass('animated fadeInUp');
  //     $('#.card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#.card3').removeClass('fadeInUp');
  //     })
  //   } else if($('.card7').hasClass('appear')) {
  //     $('.card7').addClass('fly');
  //     $('..card3').addClass('appear');
  //     setTimeout(function(){
  //       $('.card7').removeClass('appear');
  //       $('.card7').removeClass('fly');
  //     }, 500);
  //     $('#.card3').addClass('animated fadeInUp');
  //     $('#.card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card3').removeClass('fadeInUp');
  //     })
  //   } else {
  //       $('.card2').addClass('fly');
  //       $('.card3').addClass('appear');
  //       setTimeout(function(){
  //         $('.card2').removeClass('appear');
  //         $('.card2').removeClass('fly');
  //       }, 500);
  //       $('#card3').addClass('animated fadeInUp');
  //       $('#card3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         $('#card3').removeClass('fadeInUp');
  //       })
  //   }
  // });
  //
  // $('.trigger4').click(function(){
  //   console.log("trigger4 clicked");
  //   if($('.card1').hasClass('appear')) {
  //     $('.card1').addClass('fly');
  //     $('.card4').addClass('appear');
  //     setTimeout(function(){
  //       $('.card1').removeClass('appear');
  //       $('.card1').removeClass('fly');
  //     }, 500);
  //     $('#card4').addClass('animated fadeInUp');
  //     $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $('#card4').removeClass('fadeInUp');
  //     })
  //   } else if($('.card2').hasClass('appear')) {
  //       $('.card2').addClass('fly');
  //       $('.card4').addClass('appear');
  //       setTimeout(function(){
  //         $('.card2').removeClass('appear');
  //         $('.card2').removeClass('fly');
  //       }, 500);
  //       $('#card4').addClass('animated fadeInUp');
  //       $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         $('#card4').removeClass('fadeInUp');
  //       })
  //   } else if($('.card3').hasClass('appear')) {
  //       $('.card3').addClass('fly');
  //       $('.card4').addClass('appear');
  //       setTimeout(function(){
  //         $('.card3').removeClass('appear');
  //         $('.card3').removeClass('fly');
  //       }, 500);
  //       $('#card4').addClass('animated fadeInUp');
  //       $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         $('#card4').removeClass('fadeInUp');
  //       })
  //     } else if($('.card5').hasClass('appear')) {
  //       $('.card5').addClass('fly');
  //       $('.card4').addClass('appear');
  //       setTimeout(function(){
  //         $('.card5').removeClass('appear');
  //         $('.card5').removeClass('fly');
  //       }, 500);
  //       $('#card4').addClass('animated fadeInUp');
  //       $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         $('#card4').removeClass('fadeInUp');
  //       })
  //     } else if($('.card6').hasClass('appear')) {
  //       $('.card6').addClass('fly');
  //       $('.card4').addClass('appear');
  //       setTimeout(function(){
  //         $('.card6').removeClass('appear');
  //         $('.card6').removeClass('fly');
  //       }, 500);
  //       $('#card4').addClass('animated fadeInUp');
  //       $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         $('#card4').removeClass('fadeInUp');
  //       })
  //     } else if($('.card7').hasClass('appear')) {
  //       $('.card7').addClass('fly');
  //       $('.card4').addClass('appear');
  //       setTimeout(function(){
  //         $('.card7').removeClass('appear');
  //         $('.card7').removeClass('fly');
  //       }, 500);
  //       $('#card4').addClass('animated fadeInUp');
  //       $('#card4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         $('#card4').removeClass('fadeInUp');
  //       })
  //     }
  //   });

    //card5
    // $('.trigger5').click(function(){
    // console.log("trigger5 clicked");
    //   if ($('.card1').hasClass('appear')) {
    //     $('.card1').addClass('fly');
    //     $('.card5').addClass('appear');
    //     setTimeout(function(){
    //       $('.card1').removeClass('appear');
    //       $('.card1').removeClass('fly');
    //     }, 500);
    //     $('#card5').addClass('animated fadeInUp');
    //     $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $('#card5').removeClass('fadeInUp');
    //     });
    //   } else if ($('.card3').hasClass('appear')) {
    //     $('.card3').addClass('fly');
    //     setTimeout(function(){
    //       $('.card3').removeClass('appear');
    //       $('#card5').addClass('appear');
    //     }, 500);
    //     $('.card5').addClass('fadeInUp');
    //     $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $('#card5').removeClass('fadeInUp');
    //       $('.card3').removeClass('fly');
    //     });
    //   } else if ($('.card4').hasClass('appear')) {
    //     $('.card4').addClass('fly');
    //     $('.card5').addClass('appear');
    //     setTimeout(function(){
    //       $('.card4').removeClass('appear');
    //       $('.card4').removeClass('fly');
    //     }, 500);
    //     $('#card5').addClass('animated fadeInUp');
    //     $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $('#card5').removeClass('fadeInUp');
    //     })
    //   } else if($('.card2').hasClass('appear')) {
    //     $('.card2').addClass('fly');
    //     $('.card5').addClass('appear');
    //     setTimeout(function(){
    //       $('.card2').removeClass('appear');
    //       $('.card2').removeClass('fly');
    //     }, 500);
    //     $('#card5').addClass('animated fadeInUp');
    //     $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $('#card5').removeClass('fadeInUp');
    //     })
    //   } else if($('.card6').hasClass('appear')) {
    //     $('.card6').addClass('fly');
    //     $('.card5').addClass('appear');
    //     setTimeout(function(){
    //       $('.card6').removeClass('appear');
    //       $('.card6').removeClass('fly');
    //     }, 500);
    //     $('#card5').addClass('animated fadeInUp');
    //     $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $('#card5').removeClass('fadeInUp');
    //     })
    //   } else if($('.card7').hasClass('appear')) {
    //     $('.card7').addClass('fly');
    //     $('.card5').addClass('appear');
    //     setTimeout(function(){
    //       $('.card7').removeClass('appear');
    //       $('.card7').removeClass('fly');
    //     }, 500);
    //     $('#card5').addClass('animated fadeInUp');
    //     $('#card5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //       $('#card5').removeClass('fadeInUp');
    //     })
    //   }
    // });

    //card6
    // $('.trigger6').click(function(){
    //   console.log("trigger6 clicked");
    //
    //       if($('.card1').hasClass('appear')) {
    //         console.log("if card1 appear trigger6 clicked");
    //
    //         $('.card1').addClass('fly');
    //         $('.card6').addClass('appear');
    //         setTimeout(function(){
    //           $('.card1').removeClass('appear');
    //           $('.card1').removeClass('fly');
    //         }, 500);
    //         $('#card6').addClass('animated fadeInUp');
    //         $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //           $('#card6').removeClass('fadeInUp');
    //         });
    //
    //       } else if($('.card2').hasClass('appear')) {
    //         $('.card2').addClass('fly');
    //         $('.card6').addClass('appear');
    //         setTimeout(function(){
    //           $('.card2').removeClass('appear');
    //           $('.card2').removeClass('fly');
    //         }, 500);
    //         $('#card6').addClass('animated fadeInUp');
    //         $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //           $('#card6').removeClass('fadeInUp');
    //         })
    //       } else if($('.card3').hasClass('appear')) {
    //         $('.card3').addClass('fly');
    //         setTimeout(function(){
    //           $('.card3').removeClass('appear');
    //           $('#card6').addClass('appear');
    //         }, 500);
    //         $('.card6').addClass('fadeInUp');
    //         $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //           $('#card6').removeClass('fadeInUp');
    //           $('.card3').removeClass('fly');
    //         });
    //       } else if($('.card4').hasClass('appear')) {
    //         $('.card4').addClass('fly');
    //         $('.card6').addClass('appear');
    //         setTimeout(function(){
    //           $('.card4').removeClass('appear');
    //           $('.card4').removeClass('fly');
    //         }, 500);
    //         $('#card6').addClass('animated fadeInUp');
    //         $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //           $('#card6').removeClass('fadeInUp');
    //         })
    //       } else if($('.card5').hasClass('appear')) {
    //         $('.card5').addClass('fly');
    //         $('.card6').addClass('appear');
    //         setTimeout(function(){
    //           $('.card5').removeClass('appear');
    //           $('.card5').removeClass('fly');
    //         }, 500);
    //         $('#card6').addClass('animated fadeInUp');
    //         $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //           $('#card6').removeClass('fadeInUp');
    //         })
    //       } else if($('.card7').hasClass('appear')) {
    //         $('.card7').addClass('fly');
    //         $('.card6').addClass('appear');
    //         setTimeout(function(){
    //           $('.card7').removeClass('appear');
    //           $('.card7').removeClass('fly');
    //         }, 500);
    //         $('#card6').addClass('animated fadeInUp');
    //         $('#card6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //           $('#card6').removeClass('fadeInUp');
    //         })
    //       }
    //     });

    //card7
    // $('.trigger7').click(function(){
    //       console.log("trigger7 clicked");
    //     if($('.card3').hasClass('appear')) {
    //       $('.card3').addClass('fly');
    //       setTimeout(function(){
    //         $('.card3').removeClass('appear');
    //         $('#card7').addClass('appear');
    //       }, 500);
    //       $('.card7').addClass('fadeInUp');
    //       $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $('#card7').removeClass('fadeInUp');
    //         $('.card3').removeClass('fly');
    //       });
    //     } else if($('.card1').hasClass('appear')) {
    //       $('.card1').addClass('fly');
    //       $('.card7').addClass('appear');
    //       setTimeout(function(){
    //         $('.card1').removeClass('appear');
    //         $('.card1').removeClass('fly');
    //       }, 500);
    //       $('#card7').addClass('animated fadeInUp');
    //       $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $('#card7').removeClass('fadeInUp');
    //       });
    //     } else if($('.card4').hasClass('appear')) {
    //       $('.card4').addClass('fly');
    //       $('.card7').addClass('appear');
    //       setTimeout(function(){
    //         $('.card4').removeClass('appear');
    //         $('.card4').removeClass('fly');
    //       }, 500);
    //       $('#card7').addClass('animated fadeInUp');
    //       $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $('#card7').removeClass('fadeInUp');
    //       })
    //     } else if($('.card5').hasClass('appear')) {
    //       $('.card5').addClass('fly');
    //       $('.card7').addClass('appear');
    //       setTimeout(function(){
    //         $('.card5').removeClass('appear');
    //         $('.card5').removeClass('fly');
    //       }, 500);
    //       $('#card7').addClass('animated fadeInUp');
    //       $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $('#card7').removeClass('fadeInUp');
    //       })
    //     } else if($('.card6').hasClass('appear')) {
    //       $('.card6').addClass('fly');
    //       $('.card7').addClass('appear');
    //       setTimeout(function(){
    //         $('.card6').removeClass('appear');
    //         $('.card6').removeClass('fly');
    //       }, 500);
    //       $('#card7').addClass('animated fadeInUp');
    //       $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $('#card7').removeClass('fadeInUp');
    //       })
    //     } else if($('.card2').hasClass('appear')) {
    //       $('.card2').addClass('fly');
    //       $('.card7').addClass('appear');
    //       setTimeout(function(){
    //         $('.card2').removeClass('appear');
    //         $('.card2').removeClass('fly');
    //       }, 500);
    //       $('#card7').addClass('animated fadeInUp');
    //       $('#card7').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $('#card7').removeClass('fadeInUp');
    //       })
    //   }
    // });


});
