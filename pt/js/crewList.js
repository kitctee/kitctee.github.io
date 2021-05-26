$(document).ready(function () {

var $window = $(window);
  $('.raise-infoTrigger').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.raiseModule').toggleClass('reveal-hostInfo');
  });

  $('#raise-abstract-toggle').on('click', function () {
    $('#raise-abstract').toggleClass('active');
  });

  $('#section-toggle .toggle-option-list').hide();

  function removeRaiseToggle() {
    $('body').removeClass('frozen');
    $('#dd-overlay').removeClass('section-toggle-overlay');
    $('#section-toggle .toggle-option-list').removeClass('active');
    setTimeout(function () {
      $('.toggle-option-list').hide();
    }, 410);
  }

  $('#section-toggle .toggle-option-list li').on('click', function () {
    $('.toggle-option-list li.active').removeClass('active');
    $(this).toggleClass('active');
    $('#dd-overlay').removeClass('section-toggle-overlay');
  });
  $('.section-toggle-option').on('click', function () {
    $(this).siblings('.section-toggle-option').find('.toggle-option-list').removeClass('active');
    if (!$('body').hasClass('frozen')) {
      $('#dd-overlay').addClass('section-toggle-overlay');
    }
    var thisRaiseOption = $(this).find('.toggle-option-list');
    thisRaiseOption.show();
    setTimeout(function () {
      thisRaiseOption.toggleClass('active');
    }, 10);
  });
  $('#dd-overlay').on('click', function () {
    if ($('#dd-overlay').hasClass('section-toggle-overlay')) {
      removeRaiseToggle();
    }
  });

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize < 420) {
      removeRaiseToggle();
      $('.section-toggle-option').on('click', function () {
        $('body').toggleClass('frozen');
      });
    }
    if (windowsize > 420) {
      removeRaiseToggle();
    }
  }
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);



});
