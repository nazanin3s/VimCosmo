$(document).ready(function(){
    $(".sec1").css({"background-position-y" : "30%" });
  // if (window.matchMedia("(max-width: 1200px)").matches) {
  //
  // }else
  //


  $(window).scroll(function(){
    var scroll_pos = $(window).scrollTop()  ;
    $(".sec1").css({"background-position-y" : + 30 + scroll_pos/15 + "%", });
    var myNav = $(".myNav");
    $(".myNav").toggleClass("sticky" , $(this).scrollTop()>myNav.height());

  });
});
//
// $('.nav-item').on('click', function() {	$(".nav-item.active").removeClass("active");
// $(this).addClass('active');
// });

$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
