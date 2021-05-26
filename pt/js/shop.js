$(document).ready(function () {

  var $window = $(window);
  var windowH = $(window).height();

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 767) {
      if ($('body').hasClass('shop-info')) {
        $(window).scroll(function (event) {
          var $top = $(this).scrollTop();
          var $shopImg = $('#shopInfo-imgBox');
          var $shopImgH = $shopImg.height();
          var $shopMedia = $('#shopInfo-media');
          var $shopMediaTop = $shopMedia.offset().top - 24;

          var $shopMediaBottom = $shopMediaTop + $shopMedia.height() - $shopImgH;
          if ($top > $shopMediaTop) {
            $shopImg.addClass('stick');
            if ($top > $shopMediaBottom) {
              $shopImg.addClass('stickBottom');
            } else {
              $shopImg.removeClass('stickBottom');
            }
          } else {
            $shopImg.removeClass('stick stickBottom');
          }
        });
      }
    }

//    $('#shop-slider').css('width', windowsize + 'px');
  }
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

  $(window).load(function () {
    checkWidth();
  });

  //===============================================

  $('#special-offer-toggle').on('click', function () {
    var $specialWrap = $(this).closest('.special-offer');
    $specialWrap.hide();
    $specialWrap.siblings().show();
    $('#special-offer-caption').hide();
  });

  //===============================================

  $('#shop-select-quantity select').change(function () {
    if ($(this).children("option:selected").text() === '10+') {
      $(this).parents('.select-quantity').addClass('more');
      $(this).parent('label').siblings('input').focus();
    }
  });
  
  //===============================================

  $('#shop-toggle-wrap .shop-toggle-option').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    } else {
      if ($(this).hasClass('special')) {
        $('.shop-select-size').show();
      } else {
        $('.shop-select-size').hide();
      }
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }
  });

  //===============================================

  $('#size-btn-wrap .size-btn').on('click', function () {
    if ($(this).hasClass('unavailable')) {
      return;
    } else {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }
  });

  //===============================================

  $('#shopInfo-toggle li').on('click', function () {
    var $toggleId = $(this).attr('id');
    var $toggleIdNum = $toggleId.substr($toggleId.length - 1);
    var $toggleContentId = '#shopInfo-' + $toggleIdNum;
    $(this).addClass('active').siblings().removeClass('active');
    $('#shopInfo-body .shopInfo-content').removeClass('active');
    $($toggleContentId).addClass('active');
    $(window).scrollTop($(window).scrollTop()+1);
    $(window).scrollTop($(window).scrollTop()-1);
  });

  //===============================================

  $('#shopQnA-list .shopQnA-title').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).siblings('.shopQnA-body').slideUp(300);
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).siblings('.shopQnA-body').slideDown(300);
    }
  });
  
  //===============================================

  $('#size-unit-toggle span').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    } else {
      if ($(this).hasClass('cm')) {
        $('#size-table').removeClass('inch').addClass('cm');
      } else {
        $('#size-table').removeClass('cm').addClass('inch');
      }
      $(this).addClass('active');
      $(this).siblings('span').removeClass('active');
    }
  });

  //===============================================

  $('#shop-slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    cssEase: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    pauseOnHover: false,
    autoplaySpeed: 4000,
    speed: 1200
  });

  //===============================================
  
});
