$(function(){
  expandController();
  compareItemSelectedHandler();
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
function compareItemSelectedHandler() {
  var selected = 0;
  var compareContent = $('.compare-content');
  var instruction = compareContent.find('.instruction');
  var compareBtn = compareContent.find('.compare-button');
  var compareItem = compareContent.find('.products-list .item a');
  compareItem.on('click', function(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected');
      selected-=1;
    }
    else if(selected < 2) {
      $(this).addClass('selected');
      selected+=1;
    }
    checkSelected();
  });
  compareBtn.on('click', function(){
    if(selected === 2) {
      window.location.href="products-compare-details.html";
    }
  });
  function checkSelected() {
    switch (selected) {
      case 2:
        instruction.html('&nbsp;');
        compareBtn.removeClass('disabled');
        compareItem.not('.selected').addClass('disabled');
        break;
      case 1:
        compareItem.removeClass('disabled');
        compareBtn.addClass('disabled');
        instruction.text('Select another model to compare');
        break;
      case 0:
        compareItem.removeClass('disabled');
        compareBtn.addClass('disabled');
        instruction.text('Select two models for a more detailed comparison');
        break;
    }
  }
}
