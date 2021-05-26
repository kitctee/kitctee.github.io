$(document).ready(function () {

  var $window = $(window);
  var windowH = $(window).height();


  $('.mp-section-hideBtn').on('click', function () {
    $(this).closest('.mp-section-row').toggleClass('hide-module');
  });

  $('.feature-video-btn').on('click', function () {
    $(this).closest('.media').addClass('hide');
  });

  //==============================
  // STUFF FOR INDEX FEATURE-NEWS
  //==============================

  $('#feature-slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    cssEase: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    pauseOnHover: false,
    autoplaySpeed: 4000,
    speed: 1200
  });

  //==============================
  // STUFF FOR INDEX FEATURE-PROG
  //==============================

  $('#fp-toggle li').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active').siblings().removeClass('active');
      var newID = '#feature-prog-' + $(this).attr('id').substr(3);
      $(newID).addClass('active').siblings().removeClass('active');
    }
  });

  $('#fp-more').on('click', function () {
    $(this).toggleClass('active');
    $('#feature-prog').toggleClass('expand');
  });


  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 768) {}
    if (windowsize < 768) {}
    if (windowsize < 1024) {}

    var $body = $('body');
    var $mpFeature = $('#mp-feature');
    var $mpFeatureIn = $('#mp-feature-inner');
    //    var $mpFeatureIn = $('#ddddd');
    //    var $mpFeatureIn = $('.feature-news-wrap');
    //    var $mpFeatureIn = $('#mp-feature > .maxWrapper');
    var $sliderW = $mpFeatureIn.width();

    if ($body.hasClass('index') || $body.hasClass('sub-index')) {
      if ($mpFeature.hasClass('index')) {
        if (windowsize > 1023) {
          $('#feature-slider').css('width', $sliderW * 0.6 + 'px');
        } else {
          $('#feature-slider').css('width', $sliderW + 'px');
        }
      } else if ($mpFeature.hasClass('index-sub')) {
        //  I ABSOLUTELY DONT KNOW WHY THE METHOD ABOVE ISNT WORKING!!!! FML
        if (windowsize > 1200 && windowsize < 1281) {
          $('#feature-slider').css('width', (windowsize - 48) + 'px');
        } else if (windowsize > 1023 && windowsize < 1201) {
          $('#feature-slider').css('width', (windowsize - 40) + 'px');
        } else {
          $('#feature-slider').css('width', $sliderW + 'px');
        }
      }

      //  dotdotdot
      $('.mp-section-module .textBox h4').dotdotdot({
        ellipsis: '⋯',
        watch: 'window'
      });
      $('.feature-prog-large .textBox h4').dotdotdot({
        ellipsis: '⋯',
        watch: 'window'
      });
      $('#feature-slider .feature-aside .abstract').dotdotdot({
        ellipsis: '⋯',
        watch: 'window'
      });
    }
  }
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

  $(window).load(function () {
    checkWidth();
  });


  //  var mpFeatureVideoTop = $('#mp-feature-video').offset().top;
  //  var mpFeatureVideoBottom = $('#mp-feature-video').height();
  //  $(window).scroll(function () {
  //    var windowpos = $(window).scrollTop();
  //    var featureSide1 = $('#feature-side-1');
  //    var mpFeatureVideo = $('#mp-feature-video');
  //    var anchor = mpFeatureVideoTop + mpFeatureVideoBottom;
  //
  //    if (!featureSide1.hasClass('hide')) {
  //      if (windowpos > anchor) {
  //        featureSide1.hide().addClass('stick').show();
  //        setTimeout(function () {
  //          featureSide1.addClass('display');
  //        }, 10);
  //      } else {
  //        featureSide1.removeClass('display');
  //        setTimeout(function () {
  //          featureSide1.hide().removeClass('stick').show();
  //        }, 300);
  //      }
  //    } else {
  //      featureSide1.removeClass('stick display');
  //    }
  //
  //  });



});
