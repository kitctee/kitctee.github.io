$(document).ready(function () {

  //==============================
  // STUFF FOR #BROWSERUPGRADE
  //==============================

  $('#iLoveIE').on('click', function () {
    $('#browserupgrade').hide();
  });

  //==============================
  // DETECT MOBILE OR DESKTOP
  //==============================

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').addClass('mobile');
  } else {
    $('body').addClass('desktop');
  }

  //==============================
  // TOP NAV SCROLL STICK
  //==============================

  var $window = $(window);
  var $windowPosPrev = 0;
  var $navWrap = $('#navWrap');
  var $topNavCon = $('#topNavCon');

  $window.scroll(function (event) {
    var $top = $window.scrollTop();

    // TOP NAV SCROLL FUNCTION
    if ($top > 500) {
      $topNavDD.removeClass('active');
      $navWrap.addClass('stick');
      $topNavCon.hide().addClass('stick').show();
      setTimeout(function () {
        $topNavCon.addClass('slideup');
        $('body').addClass('topNav-slideup');
      }, 10);
      if ($top > 1000) {
        $topNavCon.toggleClass('slidedown', $top < $windowPosPrev);
        $('body').toggleClass('topNav-slidedown', $top < $windowPosPrev);
      } else {
        $topNavCon.removeClass('slidedown');
        $('body').removeClass('topNav-slidedown');
      }
    } else {
      $topNavCon.removeClass('slideup');
      $('body').removeClass('topNav-slideup');
      setTimeout(function () {
        $navWrap.removeClass('stick');
        $topNavCon.hide().removeClass('stick').show();
      }, 10);
    }

    // MAINSHARE SCROLL FUNCTION ON ALL ARTICLE PAGE (MOBILE SHARE BAR)
    if ($('#mainShare').length) {
      var $mainShare = $('#mainShare');
      var $mShareBar = $('#mobile-shareBar');
      var $offset = $mainShare.offset().top + $mShareBar.innerHeight() * 2;
      if ($top > $offset) {
        $mShareBar.addClass('stick');
      } else if ($top <= $offset) {
        $mShareBar.removeClass('stick');
      }
    }


    $windowPosPrev = $top;
  });

  //==============================
  // STUFF FOR TOP NAV
  //==============================

  var $topNavLi = $('#topNav-items li');
  var $topNavDD = $('#topNav-dropdown');
  var $topNavDDWrap = $('#dropdown-wrapper');
  var $topNavDDToggle = $topNavDDWrap.find('.dropdown-toggle li');
  var $topNavDDDdWrap = $topNavDDWrap.find('.dd-wrap');
  var $topNavMoreDD = $('#topNav-more-dd');
  var $topNavMore = $('#topNav-more');

  // PROG NAV TOGGLE
  $('#todaysProg-toggle').on('click', function () {
    $(this).parent().toggleClass('active');
  });

  // TODAYSPROG-DAY LI
  $('#todaysProg-day li').on('click', function () {
    var day = $(this).attr('id');
    $('#todaysProg-wrap').removeClass().addClass('todaysProg-wrap active ' + day);
  });

  // TOP NAV ACCOUNT DD TOGGLE
  $('#nav-login').on('click', function () {
    $(this).hide();
    $('#nav-register').hide();
    $('#nav-account').show();
  });
  $('#nav-account').on('click', function () {
    $('#nav-account-dd').toggleClass('active');
  });

  // SHOW TOP NAV DD 最新上載
  $topNavDDDdWrap.each(function () {
    $(this).children().first().addClass('active');
  });

  // TOP NAV LI MORE MOUSEENTER
  if ($('body').hasClass('mobile')) {
    $topNavMoreDD.on('click', function () {
      $(this).toggleClass('active').siblings().removeClass('hover');
      $topNavDD.removeClass('active');
    });
  } else {
    $topNavMoreDD.on('mouseenter', function () {
      $(this).addClass('active').siblings().removeClass('hover');
      $topNavDD.removeClass('active');
    });
    $topNavMoreDD.on('mouseleave', function () {
      $(this).removeClass('active');
    });
  }

  // TOP NAV LI MOUSEENTER
  $topNavLi.on('mouseenter', function () {
    $(this).addClass('hover').siblings().removeClass('hover');
    if ($(this).hasClass('containDD')) {
      var $thisTopNavType = $(this).attr('id').substring(6);
      var $thisTopNavDDId = '#dropdown' + $thisTopNavType;
      $topNavDD.addClass('active');
      $($thisTopNavDDId).show().siblings().hide();
    } else {
      $topNavDD.removeClass('active');
    }
  });

  // TOP NAV LI MOUSELEAVE
  $topNavLi.on('mouseleave', function () {
    if (!$(this).hasClass('containDD')) {
      $(this).removeClass('hover');
    }
  });

  // TOP NAV DD TOGGLE
  $topNavDDToggle.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var $thisDDToggleID = '#' + $(this).attr('id') + '-dd';
    $($thisDDToggleID).addClass('active').siblings().removeClass('active');
  });

  // TOP NAV DD MOUSELEAVE
  $($topNavDD).on('mouseleave', function () {
    $(this).removeClass('active');
    $topNavLi.removeClass('hover');
  });

  // TOP NAV CART BUTTON (TEMPPPPPP!!!!)
  $('#nav-cart').on('mouseenter', function () {
    $('#nav-cart-pop').addClass('active');
    setTimeout(function () {
      $('#nav-cart-pop').removeClass('active');
    }, 3000);
  });

  //==============================
  // STUFF FOR SIDENAV
  //==============================

  // NAV-SEARCH-TRIGGER
  $('#nav-search-trigger').click(function () {
    $('#pageNav').toggleClass('search-active');
  });

  // SIDE NAV TOGGLE
  $('#sideNav-toggle').click(function () {
    $('body').toggleClass('sideNav-active');
  });
  $('#sideNav-overlay').click(function () {
    $('body').toggleClass('sideNav-active');
  });

  //  SIDENAV DD TOGGLE
  $('#sideNav-ul .sideNav-dd-toggle').click(function (e) {
    e.preventDefault();
    $(this).parent().siblings().toggleClass('active');
    $(this).toggleClass('active');
  });

  //  SIDENAV-SUBNAV DD TOGGLE
  $('#sideNav-prog .dd-header').click(function () {
    $(this).children('ul').toggleClass('active');
  });

  //==============================
  // STUFF FOR DARK MODE
  //==============================

  // ACTUALLY THIS IS NOT WORKING...
  $('#sideNav-theme-trigger, #nav-theme-trigger').on('click', function () {
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark article')) {
      $('#comment .fb-comments').hide().attr('data-colorscheme', 'dark').show();
    } else {
      $('#comment .fb-comments').hide().attr('data-colorscheme', 'light').show();
    }
  });

  //==============================
  // STUFF FOR SHARE SCREEN
  //==============================

  // TOP NAV SHARESCREEN TRIGGER
  $('#nav-shareScreen-trigger, #shareOptionMore, #shareScreen-trigger').on('click', function () {
    $('body').addClass('frozen');
    $('#shareScreen').addClass('active');
  });

  //==============================
  // STUFF FOR ARTICLE COMMENT TICKER
  //==============================

  if ($('#articleComment').length) {
    // CAUSE "HALO" IS A FIXED ELEMENT; AVOID OVERLAP
    $('body').css('padding-bottom', 32);
    // ENABLE LISCROLL & A BIT SLOWER THEN DEFAULT
    $("#articleComment ul#ticker").liScroll({
      travelocity: 0.05
    });
  }

  //==============================
  // STUFF FOR ARTICLE COMMENT VALUE-OPTION
  //==============================

  $('#value-option-wrap li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).hasClass('other')) {
      $(this).parents('.raise-fieldset').addClass('custom');
      $(this).parent().hide().siblings('input').show();
    }
  });

  //==============================
  // NUMBER ONLY INPUT
  //==============================  

  $('input.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
  });

  //==============================
  // RAISE INPUT MIN $100
  //==============================

  $('input.numbersOnly.raise').focus(function () {
    // IN
    return;
  }).blur(function () {
    // OUT
    if ($(this).val() < 100) {
      $(this).val(100);
    } else {
      return;
    }
  });

  //==============================
  // STUFF FOR PROG PAGE HOST
  //==============================

  $('#dd-overlay').on('click', function () {
    $('body').removeClass('host-active');
  });
  $('#prog-host-toggle').on('click', function () {
    $('body').addClass('host-active');
  });
  $('#prog-abstract-toggle').on('click', function () {
    $(this).parent().toggleClass('active');
  });



  //==============================
  // STUFF FOR PROG PAGE AD (MOCKUP ONLY, NEED PHP!!!)
  //==============================

  if ($('body').hasClass('prog')) {
    var epNum = 189;
    for (var i = 0; i < 29; i++) {
      $('#epList').append(ep);
      var ep = '<li class="progEp-module"><div class="media"><a href="prog21ep.html"><div class="imgBox"></div></a><div class="textBox"><h4><a href="article.html">日本老麥慘死之謎、劇場版LoveLive!影評：對School Idol的堅持（劇透全開）、白貓打9星魔神、PAD 30萬寵一蟹不如一蟹？點睇覺醒須佐大蛇</a></h4><h6 class="caption"><div class="progEp-info"><span class="ep">第' + epNum + '集</span><span class="time"><i class="pt-time inline"></i>2 hrs<span> ago</span></span></div><div class="progEp-social"><span class="action"><a href="#"><i class="pt-facebook-like inline"></i>89</a></span><span class="action"><a href="#"><i class="pt-share inline"></i>64</a></span></div></h6></div></div></li>';
      if (i == 4 || i == 10 || i == 16 || i == 22) {
        $('#epList').append('<li class="progEp-module progEp-ad"><div class="rectAd680"><a href="#"><div class="adWrap"><img src="img/ad-s.jpg"></div></a><div class="adInfo"><a href="#">廣告查詢</a></div></div></li>');
      }
      epNum--;
    }
    
    // KEEP THIS
    $('#epList .textBox h4').dotdotdot({
      ellipsis: '⋯',
      watch: 'window'
    });
  }
  
  //==============================
  // STUFF FOR PROG PAGE
  //==============================

  // PROG INFO MOBILE TOGGLE
  $('#pInfoM-toggle li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var $newID = '#' + $(this).attr('id').slice(0, -7);
    $($newID).addClass('active').siblings().removeClass('active');
  });
    
  //==============================
  // STUFF FOR SIDE COLUMN
  //==============================

  // GLOBALIZATION INFO TOGGLE
  $('#globalization-toggle, #side-globalization-toggle').on('click', function () {
    $(this).toggleClass('active').parent().siblings('.globalization').toggleClass('active');
  });
  
  // SIDE-ARTICLE-TOGGLE SHOW MORE
  $('#side-article-toggle').on('click', function () {
    $(this).siblings('.side-article').addClass('viewMore');
  });
  
  
  //==============================
  // STUFF FOR HOTPOST TOGGLE 全城熱話
  //==============================

  // HOTPOST TOGGLE
  $('#mp-hotPost-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('#mp-hotPost-option').toggleClass('active');
    $('body').toggleClass('section-toggle-active');
  });
  // HOTPOST OPTION TOGGLE
  $('#mp-hotPost-option li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var windowsize = $window.width();
    if (windowsize <= 420) {
      // EXIT FULLSCREEN
      $('#mp-hotPost-toggle').removeClass('active');
      $('#mp-hotPost-option').removeClass('active');
      $('body').removeClass('section-toggle-active');
    }
  });
  $('#mp-hotPost-showMore').on('click', function () {
    $(this).siblings('.hotPost-wrap').addClass('more');
  });
  
  
  //==============================
  // STUFF FOR SEARCH FILTER
  //==============================
  
  $('#search-filter').on('click', function () {
    $('#search-order').removeClass('active')
    $(this).toggleClass('active')
    $('body').toggleClass('section-toggle-active');
  });
  $('#search-order').on('click', function () {
    $('#search-filter').removeClass('active')
    $(this).toggleClass('active')
    $('body').toggleClass('section-toggle-active');
  });
  
  //==============================
  // STUFF FOR SHARESCREEN
  //==============================
  
  $('.shareScreenTrigger').on('click', function () {
    $('body').addClass('frozen');
    $('#shareScreen').addClass('active');
  });

  $('#share-exit, #shareScreen, #share-overlay').on('click', function () {
    $('body').removeClass('frozen');
    $('#shareScreen').removeClass('active');
  });

  $('#siteMap-toggle').on('click', function () {
    $('body').addClass('frozen');
    $('#siteMap').addClass('active');
  });

  $('#siteMap-exit, #siteMap-overlay').on('click', function () {
    $('body').removeClass('frozen');
    $('#siteMap').removeClass('active');
  });

  $('#siteMap-toggle').on('click', function () {
    $('.siteMap').addClass('active')
  });
  
  //==============================
  // DROPDOWN OVERLAP EXIT
  //==============================
  
  $('#dd-overlay').on('click', function () {
    if ($('body').hasClass('section-toggle-active')) {
      if ($('#mp-hotPost-toggle').hasClass('active')) {
        $('#mp-hotPost-toggle').removeClass('active');
        $('#mp-hotPost-option').removeClass('active');
      } else if ($('body').hasClass('search')) {
        if ($('#search-filter').hasClass('active') || $('#search-order').hasClass('active')) {
          $('#search-filter, #search-order').removeClass('active');
        }
      }
      $('body').removeClass('section-toggle-active');
    }
  });
  
  
  if ($('#progep-download')) {
    $('#progep-download').on('click', function () {
      $(this).toggleClass('active');
      $('#dd-overlay').toggleClass('progep-download-overlay');
    });
  }
  if ($('#dd-overlay.progep-download-overlay')) {
    $('#dd-overlay').on('click', function () {
      $(this).removeClass('progep-download-overlay');
      $('#progep-download').removeClass('active');
    });
  }

  $('#progTable .utilityMenu li').on('click', function () {
    var selectedDay = $(this).attr('id').substr(5);
    $('#progTable').removeClass('day1 day2 day3 day4 day5 day6 day7').addClass('asideSection progTable ' + selectedDay);
  });

  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 1023) {
      if ($('body').hasClass('article') || $('body').hasClass('progep')) {
        $(window).scroll(function (event) {
          var st = $(this).scrollTop();
          var shareH = $('#mainShare').height();
          var aBodyTop = $('#article .article-body').offset().top - 24;
          var aLC = $('#article .article-body:last-child');
          var aLCBottom = aLC.offset().top + aLC.height() - shareH - 32;
          if (st > aBodyTop) {
            $('#mainShare').addClass('stick');
            if ( $('#topNavCon').hasClass('stick slideup slidedown') ){
              $('#mainShare').addClass('topNav-slidedown');
            } else {
              $('#mainShare').removeClass('topNav-slidedown');
            }
            if (st > aLCBottom) {
              $('#mainShare').addClass('stickBottom');
            } else {
              $('#mainShare').removeClass('stickBottom');
            }
          } else {
            $('#mainShare').removeClass('stick stickBottom');
          }
        });
      }
    }
    
    $('#search-result-list .textBox p').dotdotdot({
      ellipsis: '⋯',
      watch: 'window'
    });
    $('#search-result-list .textBox h4').dotdotdot({
      ellipsis: '⋯',
      watch: 'window'
    });
    $('#relatedPost .textBox h4').dotdotdot({
      ellipsis: '⋯',
      watch: 'window'
    });
    $('#dropdown-wrapper .textBox h4').dotdotdot({
      ellipsis: '⋯',
      watch: 'window'
    });
    $('#mainWrap-list .textBox h3').dotdotdot({
      ellipsis: '⋯',
      watch: 'window'
    });
    $('#mainWrap-list .textBox p').dotdotdot({
      ellipsis: '⋯',
      watch: 'window'
    });
  }
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

  //==============================
  // USELESS! MOCKUP FOR PROG PAGE ONLY! DELETE ME!!!
  //==============================
  
  var currentClass = 0;
  $('.page-Navbar').on('click', function () {
    var cl = ['prog72', 'prog51', 'prog21', 'prog85'];

    if (currentClass < 3) {
      currentClass += 1;
    } else {
      currentClass = 0;
    }
    console.log(currentClass);
    $('.prog-header-wrap').removeClass('prog51 prog21 prog72 prog85').addClass(cl[currentClass]);
  });

  //  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  //  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  //
  //  if (isChrome) alert("You are using Chrome!");
  //  if (isSafari) alert("You are using Safari!");

  //  var isWebkit = 'WebkitAppearance' in document.documentElement.style;
  //  if (isWebkit === true) {
  //    $('html').addClass('webkit-fontSmoothing');
  //  }
  
  //  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //
  //  } else {
  //    //desktop
  //  }
});