
$(function () {
  var $texts = $('.verticalscroll span'),
      $container = $texts.find('.text-container'),
      textheight = $texts.height(),
      textCount = $texts.size(),
      margins = 30;

  function slideUp () {
    $texts.animate({ 'bottom': textheight+margins}, 1000, function(){
      var firstText =  $texts.eq(0).clone();
      $('.verticalscroll').append(firstText);
      $texts.eq(0).remove();
      setTimeout(function(){
        slideUp(); // recursively loop.
      }, 1000);
    });
  }

  slideUp(); // trigger slideUp on page load.

});

