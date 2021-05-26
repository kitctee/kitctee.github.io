$(document).ready(function(){

    

  $('.shareScreenTrigger').on('click', function(){
    $('body').addClass('frozen');
    $('.shareScreen, .shareModal').addClass('active');


//    $('.shareIcon').each(function(i){
//      var row = $(this);
//      setTimeout(function() {
////        row.addClass('active', !row.hasClass('active'));
//        row.addClass('active');
////      }, 50*i);
//      });
//    });
  });

    $('.shareExit, .shareScreen .shareOverlay').on('click', function(){
        $('body').removeClass('frozen');
        $('.shareScreen, .shareIcon, .shareModal').removeClass('active');

    });


//    $('.drama1Info').on('click', function(){
//        $('body').addClass('frozen');
//
//
//        if ( $(this).hasClass('drama1') ) {
//            $('.infoScreen, .dramaInfo.drama1, .dramaInfoGroup').addClass('active');
//        } else {
//            $('.infoScreen, .dramaInfo.drama2, .dramaInfoGroup').addClass('active');
//
//        };
//    });
    $('.darkOverlay').on('click', function(){
        $('body').removeClass('frozen');
        $('.infoScreen, .dramaInfo, .dramaInfoGroup').removeClass('active');
    });
    

//  // nav scroll function
//  $(window).load(function(){
//    
//    var windowsize = $window.width();
//    var nav = $('.navbar');
//    var nav_top = $('.navbar').offset().top;
//    
//    if (windowsize > 768) {
//    
//      $(window).scroll(function() {
//        var windowpos = $(window).scrollTop();
//
////        if (windowpos > nav_top) {
//        if (windowpos > 34) {
//          nav.addClass('stick');
//        } else {
//          nav.removeClass('stick');
//        }
//      });
//      
//      
//    }
//    
//    
//  });
  
  
  $('.dropdown-header').click(function(){
    $(this).children('ul').toggleClass('active');
  });
  $('.dropdown-toggle .fa-chevron-down').click(function(event){
    event.preventDefault();
    $(this).parent().parent().find('.subNav-menu').toggleClass('active');
    $(this).toggleClass('active');
  });
  
  $('.navbar-toggle').click(function(){
    $('.nav-search input, .dark-overlay-underNav, .utilityNav').removeClass('active')
    $('.navbar-content, .dark-overlay').toggleClass('active');
  }); 
  
  $('.dark-overlay').click(function(){
    $('.navbar-content, .todaysProg, .dark-overlay').removeClass('active');
  });  

  var bool = false;
  $('.search-toggle, .dark-overlay-underNav').on('click', function(event){
    event.preventDefault();
    var input = $('.nav-search input');
    if ( bool ) {
      input.blur();
      bool = false;
      console.log('ddd');
    } else {
      input.focus();
      bool = true;
      console.log('dddddd');
    };
    
    $('.navbar-content, .dark-overlay').removeClass('active');
    $('.nav-search input, .dark-overlay-underNav').toggleClass('active');
  });


  
  $('.tl-navbar-more').on('click', function (e) {
    $(this).toggleClass('hover');
  });
  
  $('body').on('click', function (e) {
    $('.tl-navbar-more').removeClass('hover');
  });
  
  
  
  
  
  
  
  
  
  
  
  
  

  $(window).load(function(){
    var window_top = $(window).scrollTop();
    var share_top = $('#shareAnchor').offset().top - 90;
    var share_bottom = $('#shareAnchor2').offset().top;

    var sV = $('.shareAside.side');
    var pos = $('.mainContent').offset().top;

    var stickermax = share_bottom - $('.shareVert').outerHeight();

    $(window).scroll(function() {
      
      var windowpos = $(window).scrollTop() + 90;

      if (windowpos > pos && windowpos < stickermax) {
        sV.removeClass('stay');
        sV.addClass('stick');
      } else if (windowpos >= stickermax) {
        sV.removeClass('stick');
        sV.addClass('stay');
      } else {
        sV.removeClass('stick');
        sV.removeClass('stay');
      }
    });
  });
  
  
  $('.theme').on('click', function(){
    $('.bodyContainer, .pageHeader, .headerNav, .mainAsideCon, footer').delay(400).toggleClass('dark');
  });



  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 768) {
      $('.subNavCon').hide();
      $('#pg-latest').show();

      $('.pg-latest').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-latest').show();
      });
      $('.pg-weekday').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-weekday').show();
      });
      $('.pg-monday').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-monday').show();
      });
      $('.pg-tuesday').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-tuesday').show();
      });
      $('.pg-wednesday').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-wednesday').show();
      });
      $('.pg-thursday').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-thursday').show();
      });
      $('.pg-friday').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-friday').show();
      });
      $('.pg-saturday').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-saturday').show();
      });
      $('.pg-sunday').on('mouseenter click', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.subNavCon').hide();
        $('#pg-sunday').show();
      });

//      $('.navbar-content, .dark-overlay').removeClass('active');

    }
    if (windowsize < 768) {
      $('.dropdown-subNav').removeClass('active');
      //          $('.chatWrap').addClass('mobile');
    }

    if (windowsize > 1024) {
      if (!$('.liveContainer').hasClass('prog')) {
        progToggle();
      }
      if (!$('.liveContainer').hasClass('chat')) {
        chatToggle();
      }
    }
    if (windowsize < 1024) {
      if ($('.liveContainer').hasClass('prog')) {
        progToggle();
      }
    }

    var asideW = $('.mainAside').width();
    $('.fb-page').attr('data-width', 'asideW');

  }
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

  

  

  
  
  
  for (var i = 0; i < 14; i++) {
    $('.videoEpWrap').find('.videoEp:first').clone().appendTo('.videoEpWrap');
  }  
  
  
});