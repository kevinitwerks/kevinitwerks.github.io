var searchBar = '<div class="search-bar">'+
  '<form action="search-result.html"><input type="text" name="search" class="search-input" /><input class="search-button" type="submit" value="Search" /></form>' +
'</div>';
var filterBar = new FilterBar();
$(function(){
  var search = $('.header .menu .search');
  $(document).on('click', function(e){
    var clickSearchBtn = $(e.target).is('.header .menu .search, .header .menu .search *');
    if(clickSearchBtn && $(this).hasClass('clicked')) {
      hideSearch(search);
    }
    else if(clickSearchBtn && !$(this).hasClass('clicked')) {
      showSearch(search)
    }
    else if(search.hasClass('clicked') && !$(e.target).is('.search-bar *')){
      hideSearch(search);
    }

  })
  mobileSideBar();
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
function mobileSideBar() {
  function closeSideBar() {
    $('body').removeClass('show-mobilemenu');
  }
  function openSideBar() {
    $('body').addClass('show-mobilemenu');
  }
  $('.header .mobile-menu').on('click', function(){
    openSideBar();
  });
  $('.header .navigator').on('click', function(e){
    if(!$(e.target).is('.header .link')) {
      closeSideBar();
    }
  })
}
function FilterBar() {
  var me = this;
  var mobileFilter = $('.mobile-filter');
  function showFilter(elem) {
    mobileFilter.find('.title i').removeClass('fa-angle-down').addClass('fa-times');
    $('.body .page-content .sidebar').addClass('show');
    $('.body .page-content .products-list.right, .body .page-content .download-content').addClass('hide');
  }
  this.closeFilter = function(elem) {
    mobileFilter.find('.title i').removeClass('fa-times').addClass('fa-angle-down');
    $('.body .page-content .sidebar').removeClass('show');
    $('.body .page-content .products-list.right, .body .page-content .download-content').removeClass('hide');
  }
  mobileFilter.on('click', function(){
    if(mobileFilter.find('.title i').hasClass('fa-angle-down')){
      showFilter();
    }
    else {
      me.closeFilter();
    }
  });
}
