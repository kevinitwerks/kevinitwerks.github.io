$(function(){
  Tabs();
  CatSidebar();
  ReleaseNotePopUp();
});

function Tabs() {
  var tabs = $('.tabs');
  var tabsItem = tabs.find('.item');
  tabsItem.on('click', function(){
    tabsItem.removeClass('active');
    $(this).addClass('active');
    $('.download-list').removeClass('show');
    $('.download-list.'+$(this).attr('data-activate')).addClass('show');
  })
}
function CatSidebar() {
  var cat = $('.sidebar.category');
  var catItem = cat.find('.item');
  catItem.on('click', function(){
    var cat = $(this).attr('data-cat');
    catItem.removeClass('active');
    $(this).addClass('active');
    if(cat === 'all') {
      $('.download-list .item').show();
    }
    else {
      $('.download-list .item').hide();
      $('.download-list .item.'+cat).show();
    }
  })
}
function ReleaseNotePopUp() {
  var releaseNote = $('.release-notes');
  var popup = $('.releasenotes.popup');
  var productName = popup.find('.product-title');
  var versionList = popup.find('.version-list');
  var close = popup.find('.popup-close');
  releaseNote.on('click', function(){
    var json = JSON.parse($(this).attr('data-releasenotes'));
    var releaseNoteHTML = '';
    var details = json.details;
    popup.find('.product-title').text(json.name);
    for(var i=0, total=details.length; i<total; i++) {
      var currentDetails = details[i];
      var notes = currentDetails.notes;
      releaseNoteHTML += '<li class="version-item">' +
        '<div class="main-title">' +
          '<span class="version">'+ currentDetails.version +'</span>' +
          '<span class="date">('+currentDetails.date+')</span>' +
        '</div>' +
      '<ul class="briefs">';
      for(var j=0,totalJ=notes.length; j<totalJ; j++) {
        var currentNotes = notes[j];
        var list = currentNotes.list;
        releaseNoteHTML += '<li class="briefs-item">' +
          '<div class="sub-title">'+currentNotes.title+'</div>' +
            '<ul class="sub-details">';
        for(var k=0, totalK=list.length; k<totalK; k++) {
          releaseNoteHTML += '<li>'+list[k]+'</li>';
        }
        releaseNoteHTML+='</ul></li>';
      }
      releaseNoteHTML+='</ul></li>'
    }
    versionList.html(releaseNoteHTML);
    popup.removeClass('close');
  });
  close.on('click', function(){
    popup.addClass('close');
  })
}
