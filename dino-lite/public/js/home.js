$(function(){
  $('.popup .popup-close').on('click', function(){
    $('.popup').addClass('close');
  })
  $('.body .submenu a').on('click', function(){
    var scrollTop = $('.body .submenu').offset().top;
    $('.body .submenu a').removeClass('active');
    $(this).addClass('active');
    $('body').animate({
      scrollTop: scrollTop
    }, 300);
  });
})
