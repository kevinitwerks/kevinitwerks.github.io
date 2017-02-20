$(function(){
  var scrollLeftRecord = scrollLeftRecorder(scrollLeftRecord);
  $('.popup .popup-close').on('click', function(){
    $('.popup').addClass('close');
  })
  $('.body .submenu a').on('click', function(){
    $('.body .submenu a').removeClass('active');
    $(this).addClass('active');
    scrollToDown();
    if(window.innerWidth < 667) {
      $('.body .submenu').scrollLeft(scrollLeftRecord[$('.body .submenu a').index($(this))] - 100);
    }
  });
  $('.body .banner .scroll-down').on('click', function(){
    scrollToDown();
  });
  $(window).on('resize', function(){
    scrollLeftRecord = scrollLeftRecorder(scrollLeftRecord);
  })
})
function scrollToDown() {
  var scrollTop = $('.body .submenu').offset().top;
  $('body').animate({
    scrollTop: scrollTop
  }, 300);
}
function scrollLeftRecorder() {
  var scrollLeftRecord = {};
  $('.body .submenu a').each(function(i){
    scrollLeftRecord[i] = $(this).offset().left;
  });
  return scrollLeftRecord;
}
