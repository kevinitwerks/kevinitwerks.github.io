$(function(){
  var imageArea = $('.images-area');
  var names = imageArea.find('.name');
  var imagesAreaTop = names.offset().top;
  $(window).on('scroll', function(){
    if($(this).scrollTop() > imagesAreaTop){
      imageArea.addClass('float');
    }
    else {
      imageArea.removeClass('float');
    }
  });
})
