$(function(){
  $('.bottom-links .download-link').on('click', function(){
    $('.popup.product').removeClass('close');
  });
  $('.product.popup').on('click', function(e){
    if(e.target == this) {
      $(this).addClass('close')
    }
  });
})
