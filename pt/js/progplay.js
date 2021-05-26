$(document).ready(function () {
  function checkWidth() {
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize > 768) {}
    if (windowsize <= 568) {} else if (windowsize > 568 && windowsize < 736) {} else if (windowsize >= 736 && windowsize <= 1024) {} else if (windowsize > 1024) {}
    if (windowsize < 1024) {}

    return;
  };



  // Bind event listener

  $(window).load(function () {

  });
  checkWidth();
  $(window).resize(checkWidth);
});