$(function(){
  $('.filter-select').select2({
    minimumResultsForSearch: Infinity
  });
  $('.filter-select').on('select2:select', function(e){
    var selected = $(this).val();
    if(selected === 'all') {
      $('.news-list .item').show();
    }
    else {
      $('.news-list .item').not('.'+selected).hide();
      $('.'+selected).show();
    }
  })
})
