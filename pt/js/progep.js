$(document).ready(function(){
  

  $('#progMainBtn1, #progMainBtn2, #progMainBtn3').on('click', function(){
    if ($(this).hasClass('active')) {
      return;
    } else {
      $('#progMainBtn1, #progMainBtn2, #progMainBtn3').removeClass('active');
      $(this).addClass('active');
      
      if ($(this).attr('id') === 'progMainBtn1') {
        $('#prog-abstract, #prog-post, #videoList').removeClass('active');
        $('#prog-post').addClass('active');
      } else if ($(this).attr('id') === 'progMainBtn2') {
        $('#prog-abstract, #prog-post, #videoList').removeClass('active');
        $('#videoList').addClass('active');
      } else {
        $('#prog-abstract, #prog-post, #videoList').removeClass('active');
        $('#prog-abstract').addClass('active');
      }
    };
  });
  
  $('#moreProg-btn').on('click', function(){
    $(this).html() == "顯示全部" ? $(this).html('隱藏') : $(this).html('顯示全部');
    $('#moreProg').toggleClass('active');
  });
  

  
  
  var epNum = 190;
  for (var i = 0; i < 10; i++) {
    epNum--
    var ep = '<div class="media vAlign tb"><div class="imgBox"><a href="prog21ep.html"><img src="img/thumbnail.jpeg" /></a></div><div class="textBox"><h4><a href="prog21ep.html">使徒，沒來、LoverLicker瀨板學生哥請注意衛生、懷舊Game之夜州長大戰外星人、白貓備戰一週年</a></h4><h6 class="caption"><span class="ep">第'
    + epNum +
    '集</span><span class="date"><i class="fa fa-clock-o"></i>AUG. 4, 2014</span><span class="action"><i class="fa fa-thumbs-up"></i>8.9k</span><span class="action"><i class="fa fa-share"></i>710</span></h6></div></div>';
    
    var epAd = '<div class="media vAlign tb"><div class="bannerAd"><img src="img/ad0.jpg" /></div></div>';

    
    $('#videoEp').append(ep);
    
    if (i === 4) {
      $('#videoEp').append(epAd);
    }
    
  }
  

//	$('.videoList .textBox h4').dotdotdot({
//    watch: 'window'
//  });
//	$('#videoEpList .textBox h4').dotdotdot({
//    watch: 'window'
//  });
//  
  
  
  
  function checkWidth() {
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize > 768) {
    }
    if (windowsize <= 568) {
    } else if (windowsize > 568 && windowsize < 736) {
    } else if (windowsize >= 736 && windowsize <= 1024) {
    } else if (windowsize > 1024) {
    }
    if (windowsize < 1024) {
    }
    
	$('.videoList .textBox h4').dotdotdot({
    watch: 'window'
  });
	$('#videoEpList .textBox h4').dotdotdot({
    watch: 'window'
  });
  

    return;
  };
  
  
  
  // Bind event listener

  $(window).load(function(){
    
  });
  checkWidth();
  $(window).resize(checkWidth);
});