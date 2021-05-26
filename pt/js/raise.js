$(document).ready(function () {

  var raiseList = $('#raiseList-main');
  var windowH = $(window).height();

  $(window).load(function () {

  });


  var $window = $(window);

  function hostCount() {
    var hostCount = raiseList.children('.raiseModule').length;
    var hostCountChecked = raiseList.children('.raiseModule.checked').length;
    if (hostCount === hostCountChecked) {
      $('#raiseAction-all').html('取消全選');
    } else {
      $('#raiseAction-all').html('全選');
    }
    if (hostCountChecked > 0) {
      $('.raiseActionBar span').html("已選取 " + hostCountChecked + " 位主持");
      $('#raiseAction-go').html("立即課金<span>&#40;" + hostCountChecked + "&#41;</span>");
      $('#raiseAction-go').removeClass('faded');
    } else {
      $('.raiseActionBar span').html("請選取您心儀的主持");
      $('#raiseAction-go').html("立即課金");
      $('#raiseAction-go').addClass('faded');
    }
  }

  $('#raiseAction-all').on('click', function () {
    if ($(this).html() === '全選') {
      raiseList.find('.raiseModule').addClass('checked').find('.raise-select').html('<i class="pt-check inline"></i>已選取');
      $(this).html('取消全選');
    } else {
      raiseList.find('.raiseModule').removeClass('checked').find('.raise-select').html('<i class="pt-add inline"></i>選取主持');
      $(this).html('全選');
    }
    hostCount();
  });

  raiseList.find('.media .imgBox, .media h4, .media .raise-select').on('click', function () {
    $(this).closest('.raiseModule').toggleClass('checked');
    if ($(this).closest('.raiseModule').hasClass('checked')) {
      $(this).closest('.raiseModule').find('.raise-select').html('<i class="pt-check inline"></i>已選取');
    } else {
      $(this).closest('.raiseModule').find('.raise-select').html('<i class="pt-add inline"></i>選取主持');
    }
    hostCount();
  });

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 768) {}
    if (windowsize < 768) {}
    if (windowsize > 1024) {}
    if (windowsize < 1024) {}

    $(window).scroll(function () {
      var footer_top = $('#footer').offset().top;
      var raiseAction = $('#raiseActionBar');
      var raiseAction_top = raiseAction.offset().top;
      var raise_top = $('#raise').offset().top - 400;

      var windowpos = $(window).scrollTop();
      var windowpos2 = windowpos + windowH;

      if (windowpos > (raise_top - windowH + 400 + 100)) {
        raiseAction.addClass('active');
      } else {
        raiseAction.removeClass('active');
      }

      if (footer_top <= windowpos2) {
        raiseAction.removeClass('stick');
      } else {
        raiseAction.addClass('stick');
      }

      if (windowpos > (raise_top - 100)) {
        raiseList.children('.raiseModule').each(function (i) {
          var row = $(this);
          var t = 100 - (1 * i);
          if (t <= 0) {
            t = 0;
          }
          setTimeout(function () {
            row.addClass('active', !row.hasClass('active'));
          }, t * i);
        });
      }
    });
  }
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);



});
