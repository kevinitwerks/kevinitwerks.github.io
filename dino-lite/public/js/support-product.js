$(function(){
  Tabs();
  Accordion();
});

function Tabs() {
  var tabs = $('.tabs');
  var tabsItem = tabs.find('.item');
  tabsItem.on('click', function(){
    tabsItem.removeClass('active');
    $(this).addClass('active');
    $('.tabs-list').removeClass('show');
    $('.tabs-list.'+$(this).attr('data-activate')).addClass('show');
  })
}
function Accordion() {
  var accordion = $('.accordion');
  var opener = accordion.find('.opener');
  opener.on('click', function(){
    var me = $(this);
    if(!me.hasClass('opened')) {
      me.addClass('opened')
        .find('i').removeClass('fa-angle-left').addClass('fa-angle-down');
      me.siblings('.accordion-item').addClass('open');
    }
    else if(me.hasClass('opened')) {
      me.removeClass('opened')
        .find('i').removeClass('fa-angle-down').addClass('fa-angle-left');
      me.siblings('.accordion-item').removeClass('open');
    }
  });
}
