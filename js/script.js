/* We define our function 🕹 */
   function replaceVerticalScrollByHorizontal(event) {
     if (event.deltaY != 0) {
       // prevent vertical scroll
       // event.preventDefault();
       // manually scroll horizonally instead
       window.scroll(window.scrollX + event.deltaY * .5, window.scrollY);
     }

     return;
   }

   /* Listener on window once we start scrolling, we run our function 💨 */
   window.addEventListener('wheel', replaceVerticalScrollByHorizontal);



////////////////////////////////////////////////////////////////////


   $(document).ready(function(){
     var essaywidth = 100 * ($('section').length) + 'vw';

     $('.essay-container').css({
       'width': essaywidth,
     });

     var randompic = '<div class="random-pic"></div>';

     // $('.parallax-container').css({
     //   'width': essaywidth,
     // });

     function addRandomPics(){
       for (var i = 0; i < 5; i++) {
         $('.parallax-container').append(randompic);
       }
     };

     function randomPics(){
       $('.random-pic').each(function(){
         var xposArray = [10,20,30,40,50,60,70,80,90];
         var yposArray = [10,20,30,40,50,60,70,80,90];
         var xpos = (Math.random() * $('.parallax-container').width()).toFixed() + 'px';
         var ypos = (Math.random() * $('.parallax-container').height()).toFixed() + 'px';
         var xpos2 = xposArray[Math.floor(Math.random() * xposArray.length)] + '%';
         var ypos2 = yposArray[Math.floor(Math.random() * yposArray.length)] + '%';
         var backgroundColorArray = ['black','coral','teal'];
         var randomBackgroundColor = backgroundColorArray[Math.floor(Math.random()*backgroundColorArray.length)];
         var colorArray = ['white'];
         var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
         var weightArray = [100,900];
         var randomFontWeight = weightArray[Math.floor(Math.random()*weightArray.length)];
         var randomFontSize = (Math.random() * (Math.random() * 10)).toFixed() + 'vw';
         var randomSizeX = ((Math.random() * 2) + 2) + 'vw';
         var randomSizeY = (Math.random() * (Math.random() * 20) + 5) + 'vw';
         var randomBlur = 'blur(' + ((Math.random() * 5)  + 1) + "px)";
         var randomTime = ((Math.random() * 20 + 10).toFixed()) + 's';
         var borderArray = ['solid'];
         var randomBorderStyle = borderArray[Math.floor(Math.random()*borderArray.length)];
         var randomBorder = ((Math.random() * 2).toFixed() + 2) + 'px ' + randomBorderStyle + ' ' + randomBackgroundColor;

         $(this).css({
           'top' : ypos2,
           'left' : xpos2,
           'background-color': randomColor,
           'animation-duration': randomTime,
           'width': randomSizeX,
           'height': randomSizeX,
           // 'filter': randomBlur,
           'border': randomBorder,
         });
       });
     };

     window.onload = addRandomPics();
     window.onload = randomPics();

     var xpos = (Math.random() * $('.parallax-container').width()).toFixed() + 'px';
     var ypos = (Math.random() * $('.parallax-container').height()).toFixed() + 'px';


     // $(window).scroll(function(){
     //   return randomPics();
     // });

     window.setInterval(randomPics, 10000);
   });



////////////////////////////////////////////////////////////////////


$(document).ready(function(){
  var string = 'ellishenryanderson';

  string.split('');

  for (var i = 0; i < string.length; i++) {
    $('.essay-container').append('<div class="letter-wrap">' + string[i] + '</div>');
  };

  function randomLetters(){
    $('.letter-wrap').each(function(){
      var xposArray = [20,40,60,80];
      var yposArray = [20,40,60,80];
      var width = $(window).width();
      var height = $(window).height();
      var xpos = (Math.random() * $(window).width()).toFixed() + 'px';
      var ypos = (Math.random() * $(window).height()).toFixed() + 'px';
      var xpos2 = xposArray[Math.floor(Math.random() * xposArray.length)] + '%';
      var ypos2 = yposArray[Math.floor(Math.random() * yposArray.length)] + '%';
      var rotArray = [0,45,90,135,180,225,270,315];
      var randomRot = 'rotate(' + rotArray[Math.floor(Math.random()*rotArray.length)] + 'deg)';
      var backgroundColorArray = ['black','coral','teal'];
      var randomBackgroundColor = backgroundColorArray[Math.floor(Math.random()*backgroundColorArray.length)];
      var colorArray = ['coral','#111', 'bisque'];
      var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
      var weightArray = [100,900];
      var randomFontWeight = weightArray[Math.floor(Math.random()*weightArray.length)];
      var randomFontSize = (Math.random() * (Math.random() * 15) + 2).toFixed() + 'vw';
      var randomBlur = 'blur(' + ((Math.random() * 10)  + 1) + "px)";
      var randomTime = ((Math.random() * 20 + 10).toFixed()) + 's';

      $(this).css({
        'top' : ypos,
        'left' : xpos,
        'color': randomColor,
        'transform': randomRot,
        'font-size': randomFontSize,
      });
    });
  };

  window.onload = randomLetters();
  // window.setInterval(randomLetters, 9100);

  // $(window).scroll(function(){
  //   return randomLetters();
  // });

  // $(window).resize(function(){
  //   return randomLetters();
  // });


  function randomPosition(){
    $('.letter-wrap').each(function(){
      var xpos = Math.random() * 100 + 'vw';
      var ypos = Math.random() * 100 + 'vh';
      var rotArray = [0,45,90,135,180,225,270,315];
      var randomRot = 'rotate(' + rotArray[Math.floor(Math.random()*rotArray.length)] + 'deg)';

      $(this).css({
        'top': xpos,
        'left': ypos,
        'transform': randomRot,
      });
    })
  };

  window.onload = randomPosition();
  $(window).resize(function(){
    return randomPosition();
  });
  window.setInterval(randomPosition, 10000);

  // function init() {
  //   var myFunction = function() {
  //       randomPosition();
  //       var rand = Math.round(Math.random() * (1000 - 500)) + 500;
  //       setTimeout(myFunction, rand);
  //   }
  //   myFunction();
  // }
  //
  // $(function() {
  //     init();
  // });

  $(".letter-wrap").click(function(){
    $(this).remove();
  });


});


////////////////////////////////////////////////////////////////////


$(document).ready(function(){

  // function changeBackgroundColor(){
  //   var backgroundColorArray = ['#111','bisque'];
  //   var randomBackgroundColor = backgroundColorArray[Math.floor(Math.random()*backgroundColorArray.length)];
  //
  //   $('.essay-container').css({'background':randomBackgroundColor});
  // };

  $('.title h1').click(function(){
    $(this).fadeOut();
    $(this).next().delay(500).fadeIn();
    $('.essay-container').css({'background':'#111'});
  });

  $('.title h1:last-of-type').click(function(){
    $(this).fadeOut();
    $(this).parent().children(':first').delay(500).fadeIn();
    $('.essay-container').css({'background':'bisque'});
  });

});


////////////////////////////////////////////////////////////////////


$(document).ready(function(){
  var left = '<div class="left"><i class="fas fa-arrow-left"></i></div>';
  var right = '<div class="right"><i class="fas fa-arrow-right"></i></div>';

  $('section').append(left,right);
  $('section:first-of-type .left').remove();
  $('section:last-of-type .right').remove();

  $('.right').click(function(){
    $('.right, .left').fadeOut(200);
    $('section').delay(300).animate({
      'left':'-=100vw'
    }, 700);
    $('.right, .left').delay(1000).fadeIn();
  });

  $('.left').click(function(){
    $('.right, .left').fadeOut(200);
    $('section').delay(300).animate({
      'left':'+=100vw'
    }, 700);
    $('.right, .left').delay(1000).fadeIn();
  });
});





////////////


$(document).ready(function(){
  function amIDead(){
    if ($('.letter-wrap').length == 0) {
      $('.dead').show().css({'display':'flex'});
    }
  }

  window.setInterval(amIDead, 100);
});
