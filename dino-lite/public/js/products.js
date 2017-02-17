var ProductList = {
  'USB Microscope': {
    'Dino Lite Edge': {
      img: 'public/images/product1.jpg',
      url: 'products-list.html?category=Dino Lite Edge'
    },
    'Dino Lite Premier': {
      img: 'public/images/product2.jpg',
      url: 'products-list.html?category=Dino Lite Premier'
    },
    'Dino Lite Basic':{
      img: 'public/images/product3.jpg',
      url: 'products-list.html?category=Dino Lite Basic'
    }
  },
  'TV/VGA/D-Sub': {},
  'EyePiece': {},
  'Accessories': {},
  'DinoCapture': {},
  'Mobile Solutions':{}
}
var ProductItem = '<li class="item">' +
    '<a href="{$url}">' +
      '<img src="{$src}" />' +
      '<div class="text">{$text}</div>' +
    '</a>' +
  '</li>';
$(function(){
  urlHandler();
});
function urlHandler() {
  var search = location.search.slice(1).split('&');
  var searchList = parseSearch(search);
  var category = searchList.category;
  if(category){
    $('.body .page-title .page-text').text(searchList.category);
    $('.body .page-title .sub-text').text(searchList.sub);
    var productItem = [];
    for( var product in ProductList[category]) {
      var item = ProductItem;
      var itemToHTML = item.replace(/\{\$url\}|\{\$src\}|\{\$text\}/g,function(matched
      ){
        var returnVal = matched;
        var productInfo = ProductList[category][product];
        switch (matched) {
          case '{$url}':
            returnVal = productInfo.url;
            break;
          case '{$src}':
            returnVal = productInfo.img;
            break;
          case '{$text}':
            returnVal = product;
            break;
        }
        return returnVal;
      });
      productItem.push(itemToHTML);
    }
    $('.body .page-content .products-list').html(productItem);
  }
  else {
    $('.body .page-title .page-text').text('Product Category');
    $('.body .page-title .sub-text').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  }
  function parseSearch(searchItem){
    var searchList = {};
    for(var i=0, total=searchItem.length; i<total; i++) {
      var item = searchItem[i].split('=');
      searchList[item[0]] = decodeURI(item[1]);
    }
    return searchList;
  }
}
