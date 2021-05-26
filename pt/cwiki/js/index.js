(function ($) {
  var count = 0;
  $.fn.nodoubletapzoom = function () {
    $(this).bind('touchstart', function preventZoom(e) {
      var t2 = e.timeStamp;
      var t1 = $(this).data('lastTouch') || t2;
      var dt = t2 - t1;
      var fingers = e.originalEvent.touches.length;
      $(this).data('lastTouch', t2);
      if (!dt || dt > 500 || fingers > 1) {
        return; // not double-tap
      }
      e.preventDefault(); // double tap - prevent the zoom
      // also synthesize click events we just swallowed up
      $(e.target).trigger('click');
    });
  };
})(jQuery);

$(document).on('pageinit', '#mobile-nav, #edit-nav li', function () {
  $('#mobile-header li').nodoubletapzoom();
});

$(document).ready(function () {

  if (navigator.userAgent.indexOf('iPhone') != -1) {
    $('body').addClass('mobile iphone ios');
  } else if (navigator.userAgent.indexOf('iPad') != -1) {
    $('body').addClass('mobile ipad ios');
  } else if (navigator.userAgent.indexOf('iPod') != -1) {
    $('body').addClass('mobile ipod ios');
  } else if (navigator.userAgent.indexOf('Android') != -1) {
    $('body').addClass('mobile android');
  } else {
    $('body').addClass('desktop');
  }

  //==============================
  // SHARESCREEN
  //==============================

  $('.shareScreenTrigger').on('click', function(){
    $('body').addClass('frozen');
    $('.shareScreen, .shareModal').addClass('active');
  });

  $('.overlay-exit, .shareScreen .share-overlay').on('click', function(){
    $('body').removeClass('frozen');
    $('.shareScreen, .shareModal').removeClass('active');
  });

  //==============================
  // DDSLIDEUP FUNCTION
  //==============================

  function DdSlideup($p, $dd, $type, $time) {
    if (!$($dd).hasClass('active')) {
      // set default time
      if ($time == 0 || $time == null) {
        $time = 30;
      }
      $p.find('.pt-dd.active').removeClass('active');
      $p.find('.pt-dd .slideup').removeClass('slideup');

      $($dd).addClass('active');
      $($dd).find('> ' + $type).each(function (i) {
        if (i >= 10) {
          i = 10;
        }
        var row = $(this);
        setTimeout(function () {
          row.addClass('slideup', !row.hasClass('slideup'));
        }, $time * i);
      });
    }
  }

  var $window = $(window);
  var windowH = $(window).height();

  var $bNavLi = $('#basic-nav-list ul li');
  $('#basic-title').hide();

  $bNavLi.on('click', function () {
    var $chID = String($(this).attr('id')).substr(4);
    var $chToSe = $('#body-' + $chID);

    if (!$(this).hasClass('active')) {
      $bNavLi.removeClass('active');
      $(this).addClass('active');

      if ($chToSe.hasClass('ch')) {
        $('#basic-title').show();
      } else {
        $('#basic-title').hide();
      }

      $chToSe.addClass('active').siblings().removeClass('active');

      $('#mn-current span').text($(this).attr('header'));

      $('html, body, #basic-wrap').animate({
        scrollTop: 0
      }, 0);
    } else {
      $('html, body, #basic-wrap').animate({
        scrollTop: 0
      }, 100);
    }

    if ($('body').hasClass('nav-active')) {
      $('body').removeClass('nav-active');
    }

    if ($chID == 'about') {
      var type = '*';
    } else {
      var type = 'li';
    }
    DdSlideup($('#basic-list'), $chToSe.find('.pt-dd'), type);
  });

  $('#basic-list .article-wrap h3 i').on('click', function () {
    var $contentWrap = $(this).parent().siblings('.basic-inner');
    if (!$contentWrap.hasClass('hide')) {
      $(this).addClass('hide');
      $contentWrap.addClass('hide');
    } else {
      $(this).removeClass('hide');
      $contentWrap.removeClass('hide');
    }
  });

  $('#body-about').addClass('active');
  DdSlideup($('#basic-list'), $('#basic-about'), '*');
//
//  $('#body-rank').addClass('active');
//  DdSlideup($('#basic-list'), $('.basic-rank.pt-dd'), 'li');
//
//  $('#body-ch2').addClass('active');
//  DdSlideup($('#basic-list'), $('.basic-ch.ch2.pt-dd'), 'li');


  //==============================
  // STUFF FOR MOBILE NAV
  //==============================

  var $windowPosPrev = 0;
  var $tp = 0;
  var $cs;
  var $cst = 0;
  var $sut = 0;
  var $sdt = 0;

  function checkWidth() {
    var $windowsize = $window.width();
    // INPUT & TEXTAREA FOCUS
    if ($windowsize <= 1023) {
      $('#edit-wrap input, #edit-wrap textarea').on('focus', function(){
        if ($('body').hasClass('mobile')) {
          $('#edit-nav').addClass('hide');
        }
      });
      $('#edit-wrap input, #edit-wrap textarea').on('blur', function(){
        $('#edit-nav').removeClass('hide');
      });
    } else {
      $('#edit-wrap input, #edit-wrap textarea').on('focus', function(){
        $('#edit-nav').removeClass('hide');
      });
    }

    if ($windowsize <= 736) {
      $(window).scroll(function (e) {
        var $st = $(this).scrollTop();

        function showCS() {
          clearTimeout($cs);
          $('#mn-title').addClass('hide');
          $('#mn-current').removeClass('hide');
          $cs = setTimeout('showCS();', (2000));
        }
        if ($st > 600 && $st > $windowPosPrev) {
          if ($tp === 0) {
            $tp = $(this).scrollTop();
          }
          if ($sut === 0) {
            $('#mobile-menu').addClass('hide');
            $('#mn-utility').addClass('hide');
            $('#mn-current').addClass('hide');
            $('#mn-title').removeClass('hide');
            $('#mobile-header').addClass('cs');
            if ($cst === 0) {
              $cs = setTimeout(function () {
                $('#mn-title').addClass('hide');
                $('#mn-current').removeClass('hide');
              }, 2000);
              $cst++;
            }
            $sdt = 0;
            $sut++;
          }
        } else if ($st < $windowPosPrev) {
          if ($sdt === 0) {
            $('#mobile-menu').removeClass('hide');
            $('#mn-utility').removeClass('hide');
            $('#mn-current').addClass('hide');
            $('#mn-title').addClass('hide');
            $('#mobile-header').removeClass('cs');
            clearTimeout($cs);
            $tp = 0;
            $cst = 0;
            $sut = 0;
            $sdt++;
          }
        }
        $windowPosPrev = $st;
      });
    }
  }
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

  $(window).load(function () {
    checkWidth();
  });

  $('#m-nav-menu').on('click', function () {
    if ($('body').hasClass('nav-active')) {
      $('body').removeClass('nav-active');
    } else {
      $('body').addClass('nav-active');
    }
  });

  //==============================
  // EDIT SCREEN
  //==============================

  $('#edit-nav i').on('mouseenter', function () {
    if ($('body').hasClass('desktop')) {
      $(this).parent('li').addClass('hover');
    }
  });
  $('#edit-nav li').on('mouseleave', function () {
    $(this).removeClass('hover');
  });

  function EditScreen($a) {
    var $id = parseInt($a.attr('id').substr(7));
    var $idp = '#article' + ($id - 1).toString();
    var $idn = '#article' + ($id + 1).toString();

    $('#edit-nav .prev').removeClass('disable');
    $('#edit-nav .prev').attr('id', 'edit-' + $idp.substr(1));
    $('#edit-nav .next').removeClass('disable');
    $('#edit-nav .next').attr('id', 'edit-' + $idn.substr(1));

    if ($id == 0) {
      $('#edit-nav .prev').addClass('disable');
      $('#edit-nav').addClass('fl');
    } else if ($id == 160) {
      $('#edit-nav .next').addClass('disable');
      $('#edit-nav').addClass('fl');
    } else {
      $('#edit-nav').removeClass('fl');
    }

    var $nop = $($idp).children('h4').html();
    var $non = $($idn).children('h4').html();
    var $no = $a.children('h4').html();
    var $chid = $a.parents('.basic-inner-wrap').attr('id').substr(5);
    var $ch = $('#nav-' + $chid).children('a').attr('title');
    
    var $or = $a.clone();
    var $orid = 'edit-' + $or.attr('id');
    $or.attr('id', $orid);
    $('body').addClass('edit-active');
    
    $('#edit-body-wrap').scrollTop(0);

    $('#edit-head-text .head').html($ch);
    $('#edit-head-text .article').html($no);
    $('#edit-body-wrap .body-ref').empty().html($or).find('h4').html('原文');
    $('#edit-body-wrap .body-ref').find('.edit-count').remove();

    //==============================
    // SHOW MORE / LESS FUNCTION
    //==============================

    var $showChar = 140; // How many characters are shown by default
    var $ellipses = '…';
    var $uparrow = '<i class="pt-icon pt-arrow-up inline"></i>';
    var $downarrow = '<i class="pt-icon pt-arrow-down inline"></i>';
    var $moretext = $downarrow + 'Show more';
    var $lesstext = $uparrow + 'Show less';
    var $zh_more = $downarrow + '顯示更多';
    var $zh_less = $uparrow + '隱藏';

    if ($('html').attr('lang') == 'zh-Hans-HK') {
      $moretext = $zh_more;
      $lesstext = $zh_less;
    }

    function readMore($t) {
      var $content = $t.html();  
      var $count = $t.children('li').children().text().length;
      if ($count > $showChar) {
        $('#edit-body-wrap .body-ref').addClass('shorten');
        var $toggle = '<a href="#" class="more-toggle">' + $moretext + '</a>';
        $t.append($toggle);
      }
    }

    $('.body-ref').on('click', '.more-toggle', function (e) {
      e.preventDefault();
      console.log('click');
      if ($(this).hasClass('less')) {
        $(this).removeClass('less');
        $(this).html($moretext);
        $(this).parent().addClass('shorten');
      } else {
        $(this).addClass('less');
        $(this).html($lesstext);
        $(this).parent().removeClass('shorten');
      }
    });

    //==============================

    readMore($('#edit-body-wrap .body-ref'));
    $('#edit-nav .prev h4').html($nop);
    $('#edit-nav .next h4').html($non);
  }

  $('#edit-nav li').on('click', function () {
    if ($('body').hasClass('edit-active')) {
      var $ats = $('#' + $(this).attr('id').substr(5).toString());
      var $new = $('#edit-body-wrap').clone().empty();
      var $order = '';

      $('#edit-body-wrap-next, #edit-body-wrap-prev').remove();
      if ($(this).hasClass('prev')) {
        $order = 'prev';
        $('#edit-body-wrap').addClass('next');
        $('#edit-body-wrap').attr('id', 'edit-body-wrap-next');
      } else {
        $order = 'next';
        $('#edit-body-wrap').addClass('prev');
        $('#edit-body-wrap').attr('id', 'edit-body-wrap-prev');
      }
      $new.addClass($order);
      $('#edit-wrap').append($new);

      $('#edit-prep').addClass('active');

      // COMMENT! (5 steps)
      // step 1:
      // show loading animation
      $('#loading').addClass('active');

      // step 2:
      // load the content in the same div
      // not so sure how you would implement the load function
      // but please remove the following setTimeout function
      // as it is just for demo
      setTimeout(function () {

        $('#edit-body-wrap').load('edit.php', function() {

          // step 3:
          // remove the loading animation
          $('#loading').removeClass('active');

          // step 4:
          // change the content
          // (please modify EditScreen to fit your code)
          EditScreen($ats);

          // step 5:
          // $('#edit-body-wrap') is currently hide
          // remove class $order to make it visible
          $('#edit-body-wrap').removeClass($order);

        });

      }, 1000);
    }
  });

  $('#body-rank li.rank').on('click', function () {
    var $prank = $(this).parents('.body-rank');
    var $type = $prank.attr('id');
    var $sub = 0;
    if ($type === 'body-like') {
      $sub = 9;
    } else if ($type === 'body-lastest' || $type === 'body-hottest') {
      $sub = 12;
    }
    var $aid = '#article' + $(this).attr('id').substr($sub);

    $('#edit-prep').addClass('active');

    // COMMENT! (4 steps only)
    // step 1:
    // show loading animation
    $('#loading').addClass('active');

    // step 2:
    // load the content in the same div
    // not so sure how you would implement the load function
    // but please remove the following setTimeout function
    // as it is just for demo
    setTimeout(function () {

      $('#edit-body-wrap').load('edit.php', function() {

        // step 3:
        // remove the loading animation
        $('#loading').removeClass('active');

        // step 4:
        // change the content
        // (please modify EditScreen to fit your code)
        EditScreen($($aid));

      });

    }, 1000);

  });

  $('#basic-list .article').on('click', function () {
    $('#basic-list .article').removeClass('current');
    var $this = $(this);
    $(this).toggleClass('current');

    $('#edit-prep').addClass('active');

    // COMMENT! (4 steps only)
    // step 1:
    // show loading animation
    $('#loading').addClass('active');

    // step 2:
    // load the content in the same div
    // not so sure how you would implement the load function
    // but please remove the following setTimeout function
    // as it is just for demo
    setTimeout(function () {

      $('#edit-body-wrap').load('edit.php', function() {

        // step 3:
        // remove the loading animation
        $('#loading').removeClass('active');

        // step 4:
        // change the content
        // (please modify EditScreen to fit your code)
        EditScreen($this);

      });

    }, 1000);

  });

  // COMMENT!
  // when exit button pressed
  // edit screen still shows up
  // may be fixed after removing the setTimeout function?
  // not sure x_x
  function editScreenExit() {
    $('body').removeClass('edit-active');
    $('#edit-prep').removeClass('active');
    $('#loading').removeClass('active');
  }

  // ESC EXIT
  $(document).on('keyup', function (e) {
    if (!$('#edit-wrap input, #edit-wrap textarea').is(":focus")) {
      if (e.keyCode == 27) {
        editScreenExit();
      }
    }
  });

  // BACK BUTTON
  $('#back-btn').on('click', function () {
    if ($('body').hasClass('edit-active')) {
      editScreenExit();
    }
  });

  //==============================
  // NUMBER ONLY INPUT
  //==============================

  $('input.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
  });

  //==============================
  // TESTING (DELETE ME)
  //==============================

  // COMMENT!
  // delete me
  // this should be achieved by your php code
  $('#basic-list li.article').append('<div class="edit-count"><i class="pt-quill inline"></i><span class="count">3</span></div>');

});
