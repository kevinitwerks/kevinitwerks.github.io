$(function(){
  expandController();
});
function expandController() {
  $('.body .page-content .filter.sidebar .expand-controller').on('click', function(){
    var item = $(this).parents('.item');
    if(!item.hasClass('close')) {
      item.addClass('close').find('.expand-controller i').addClass('fa-plus').removeClass('fa-minus');
    }
    else {
      item.removeClass('close').find('.expand-controller i').removeClass('fa-plus').addClass('fa-minus');
    }
  })
}
