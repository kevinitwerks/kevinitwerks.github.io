$(function(){
  var scrollLeftRecord = scrollLeftRecorder(scrollLeftRecord);
  $('.popup .popup-close').on('click', function(){
    $('.popup').addClass('close');
  });
  resizeBody();
  homepageProductsAnimation($('.body .submenu a').eq(0).attr('data-show'));
  $('.body .submenu a').on('click', function(){
    var me = $(this);
    var show = me.attr('data-show');
    $('.body .submenu a').removeClass('active');
    me.addClass('active');
    scrollToDown();
    if(window.innerWidth < 667) {
      $('.body .submenu').scrollLeft(scrollLeftRecord[$('.body .submenu a').index($(this))] - 100);
    }
    homepageProductsAnimation(show);
  });
  $('.body .banner .scroll-down').on('click', function(){
    scrollToDown();
  });
  $(window).on('resize', function(){
    scrollLeftRecord = scrollLeftRecorder(scrollLeftRecord);
    resizeBody();
  })
});
function resizeBody(){
  $('.body').height($('.body .banner').height() + $('.body .submenu').height() + $('.homepage-products').outerHeight(true));
}
function homepageProductsAnimation(show) {
  $('.homepage-products.'+show).show(function(){
    $('.homepage-products.'+show).find('.item').each(function(i){
      $(this).delay(i*150).animate({
        left: 0
      }, 150);
    })
  });
  $('.homepage-products').not('.'+show).fadeOut(function(){
    $(this).find('.item').css({
      left: '100%'
    })
  });
}
function scrollToDown() {
  var scrollTop = $('.body .submenu').offset().top;
  $('body,html').animate({
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
