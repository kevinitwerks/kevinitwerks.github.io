$(function(){
  var currentURL = encodeURI(window.location.href);
  //facebook need to register an app on https://developers.facebook.com/ to use the share link function
  //change the app_id after register the app
  $('.facebook-share').on('click', function(){
    window.open('https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href='+currentURL+'&redirect_uri='+currentURL);
  });
  $('.twitter-share').on('click', function(){
    window.open('https://twitter.com/intent/tweet?url='+currentURL);
  });
  $('.google-share').on('click', function(){
    window.open('https://plus.google.com/share?url='+currentURL);
  })
})
