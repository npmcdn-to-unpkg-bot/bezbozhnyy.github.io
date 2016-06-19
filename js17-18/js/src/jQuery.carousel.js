<<<<<<< HEAD
(function($) {
  $.fn.carousel = function(){
    var leftArrow = $('.leftArrow');
    var rightArrow = $('.rightArrow');
    var elementsList = $('.carouselSlides');
    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
    leftArrow.click(function () {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += 125;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });
    rightArrow.click(function () {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 125;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });
    return this;
  }
=======
(function($) {
  $.fn.carousel = function(){
    var leftArrow = $('.leftArrow');
    var rightArrow = $('.rightArrow');
    var elementsList = $('.carouselSlides');
    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
    leftArrow.click(function () {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += 125;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });
    rightArrow.click(function () {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 125;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });
    return this;
  }
>>>>>>> 5fa02b1f42ab2a0cf9621c1c0479013e41961764
})(jQuery);