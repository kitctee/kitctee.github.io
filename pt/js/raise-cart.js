$(document).ready(function () {

  var windowH = $(window).height();

  $(window).load(function () {
    checkWidth();
  });


  var $window = $(window);

  function checkWidth() {

    var windowsize = $window.width();
    if (windowsize > 768) {}
    if (windowsize < 768) {}
    if (windowsize > 1024) {}
    if (windowsize < 1024) {}

  }
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);


  $('#raise-setAll-show').on('click', function () {
    $(this).addClass('showBatchEdit');
  });
  $('#raise-setAll-hide').on('click', function () {
    $('#raise-setAll-show').removeClass('showBatchEdit');
  });

  $('#cartList-main .raiseEdit-lock').on('click', function () {
    if ($(this).html() === '暫不修改') {
      $(this).html('金主修字');
      $(this).parentsUntil('cartModule').addClass('lock');
    } else {
      $(this).html('暫不修改');
      $(this).parentsUntil('cartModule').removeClass('lock');
    }
  });


  $('#cart-wrap .cart-quantity select').change(function () {
    if ($(this).children("option:selected").text() === '10+') {
      $(this).parents('.cart-quantity').addClass('more');
      $(this).parent('label').siblings('input').focus();
    }
  });

});
