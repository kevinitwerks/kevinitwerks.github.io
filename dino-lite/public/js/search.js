var searchBar = '<div class="search-bar">'+
  '<form action="search-result.html"><input type="text" name="search" class="search-input" /><input class="search-button" type="submit" value="Search" /></form>' +
'</div>';
$(function(){
  var search = $('.header .menu .search');
  search.on('click', function(){
    if($(this).hasClass('clicked')){
      hideSearch(search);
    }
    else if(!$(this).hasClass('clicked')) {
      showSearch(search);
    }
  });
})
function showSearch(search) {
  search.addClass('clicked');
  $('body').append(searchBar);
  $('.search-input').focus();
}
function hideSearch(search) {
  search.removeClass('clicked');
  $('.search-bar').remove();
}
