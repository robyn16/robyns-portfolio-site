 $('.piece img').each(function(i, img) {
    
      var currentImgHeight = $(img).height();
      // var currentImgWidth = $(img).width();
      
      // set piece
      $(img).parent().height(currentImgHeight);
      // $(img).parent().width(currentImgWidth);
      
      // set caption
      $(img).next().height(currentImgHeight);
 });
