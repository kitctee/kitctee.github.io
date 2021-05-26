/*!
 * jQuery stayInWebApp Plugin
 * version: 0.4 (2012-06-19)
 */
(function($){$.extend({stayInWebApp:function(b){"standalone"in window.navigator&&window.navigator.standalone&&(b||(b="a"),$("body").delegate(b,"click",function(b){if($(this).attr("target")==void 0||$(this).attr("target")==""||$(this).attr("target")=="_self"){var c=$(this).attr("href");if(!c.match(/^http(s?)/g))b.preventDefault(),self.location=c}}))}})})(jQuery);
$(document).ready(function () {
  $.stayInWebApp();

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').addClass('mobile');
  } else {
    $('body').addClass('desktop');
  }


  $('#chatVoteBtn1, #chatVoteBtn2, #chatVoteBtn3').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    } else {
      $('#chatVoteBtn1, #chatVoteBtn2, #chatVoteBtn3').removeClass('active');
      $(this).addClass('active');

      var thisID = $(this).attr('id');

      if (thisID === 'chatVoteBtn1') {
        $('#liveFooter, #vote, #videoSetting, #chatContainer').removeClass('tabActive');
        $('#chatContainer').addClass('tabActive');
      } else if (thisID === 'chatVoteBtn2') {
        $('#liveFooter, #vote, #videoSetting, #chatContainer').removeClass('tabActive');
        $('#vote').addClass('tabActive');
      } else {
        $('#liveFooter, #vote, #videoSetting, #chatContainer').removeClass('tabActive');
        $('#videoSetting, #liveFooter').addClass('tabActive');
      }
    };
  });

  $('#liveThemeToggle').on('click', function () {
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark')) {
      $(this).html('白介面');
    } else {
      $(this).html('黑介面');
    };
  });

  $('#expandToggle').on('click', function () {
    $('#chatContainer, #chatVoteCon, #chatVoteConM').toggleClass('expand');
    $('#expandToggle').toggleClass('pt-arrow-up pt-arrow-down');
  });

  var live = $('#liveContainer');
  var prog = $('#progContainer');
  var chat = $('#chatContainer');
  var darkOverlay = $('#dark-overlay');

  function progToggle() {
    prog.toggleClass('hide');
    live.toggleClass('prog');
    $('#progToggle2 i').toggleClass('pt-left pt-right');
    $('#progToggle i').toggleClass('pt-left pt-right');
    console.log('progToggle clicked');
  }

  function chatToggle() {
    chat.toggleClass('hide');
    live.toggleClass('chat');
    $('#chatToggle2 i').toggleClass('pt-right pt-left');
    $('#chatToggle i').toggleClass('pt-right pt-left');
    console.log('chatToggle clicked');
  }

  function overlayToggle() {
    darkOverlay.toggleClass('active');
  }

  function checkWidth() {
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize <= 568) {
      if (!live.hasClass('prog') && !prog.is('.hide')) {
        progToggle();
      }
      if (!chat.is('.hide')) {
        chatToggle();
      }
    } else if (windowsize > 568 && windowsize < 736) {
      if (live.hasClass('chat') && !chat.is('.hide')) {
        chatToggle();
      }
    } else if (windowsize >= 736 && windowsize <= 1024) {

    } else if (windowsize > 1024) {
      darkOverlay.removeClass('active');
      if (!live.hasClass('prog') && prog.is('.hide')) {
        progToggle();
      }
      if (!live.hasClass('chat') && chat.is('.hide')) {
        chatToggle();
      }
    }
    if (windowsize < 1024) {
      darkOverlay.removeClass('active');
      if (live.hasClass('prog') && !prog.is('.hide')) {
        progToggle();
      }
    }
    return;
  };

  $('#progToggle, #progToggle2, #chatToggle, #chatToggle2, #dark-overlay').on('click', function () {
    var $window = $(window);
    var windowsize = $window.width();
    var thisID = $(this).attr('id');
    if (windowsize < 768) {
      if (thisID === 'dark-overlay') {
        if (!chat.is('.hide') && prog.is('.hide')) {
          chatToggle(), overlayToggle();
        } else if (chat.is('.hide') && !prog.is('.hide')) {
          progToggle(), overlayToggle();
        }
      }
    }
    if (windowsize <= 413) {
      if (thisID === 'progToggle' || thisID === 'progToggle2') {
        progToggle(), overlayToggle();
      }
    } else if (windowsize > 413 && windowsize < 736) {
      if (!prog.is('.hide') && chat.is('.hide')) {
        if (thisID === 'progToggle' || thisID === 'progToggle2') {
          progToggle(), overlayToggle();
        }
        if (thisID === 'chatToggle' || thisID === 'chatToggle2') {
          progToggle(), chatToggle();
        }
      } else if (prog.is('.hide') && !chat.is('.hide')) {
        if (thisID === 'progToggle' || thisID === 'progToggle2') {
          progToggle(), chatToggle();
        }
        if (thisID === 'chatToggle' || thisID === 'chatToggle2') {
          chatToggle(), overlayToggle();
        }
      } else if (prog.is('.hide') && chat.is('.hide')) {
        if (thisID === 'progToggle' || thisID === 'progToggle2') {
          progToggle(), overlayToggle();
        }
        if (thisID === 'chatToggle' || thisID === 'chatToggle2') {
          chatToggle(), overlayToggle();
        }
      }
    } else if (windowsize >= 736 && windowsize <= 1024) {
      if (thisID === 'progToggle' || thisID === 'progToggle2') {
        progToggle(), overlayToggle();
      } else if (thisID === 'chatToggle' || thisID === 'chatToggle2') {
        chatToggle();
      } else if (thisID === 'dark-overlay') {
        if (!prog.is('.hide')) {
          progToggle(), overlayToggle();
        }
      }
    } else if (windowsize > 1024) {
      if (thisID === 'progToggle' || thisID === 'progToggle2') {
        progToggle();
      } else if (thisID === 'chatToggle' || thisID === 'chatToggle2') {
        chatToggle();
      }
    }
    return;
  });

  $('#progTable .utilityMenu li').on('click', function () {
    var selectedDay = $(this).attr('id').substr(5);
    $('#progTable').removeClass().addClass('progTable ' + selectedDay);
  });

  $('#iLoveIE').on('click', function () {
    $('#browserupgrade').hide();
  });

  checkWidth();
  $(window).resize(checkWidth);

});