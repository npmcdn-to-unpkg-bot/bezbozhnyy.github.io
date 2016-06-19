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
})(jQuery);;$(function () {
  $('.carousel').carousel();
  var html = $('.user-profile').html();
  var body = $('body');

  var userData = {
      lfname: 'Безбожный Владимир Леонидович',
      photo: 'img/myphoto.jpg',
      prevJob: 'Преподаватель ВУЗа',
      goal_cources: 'Хочу изучать Front-end потому что:',
      whyDo1: 'Это чертовски интересно и увлекательно',
      whyDo2: 'Здесь не "заржавеешь", новые идеи и задачи',
      whyDo3: 'Это перспектино и благодарно',
      tel: '+380661885001',
      fb: 'https://www.facebook.com/bezbozhnyy',
      feadback: 'Таки могёмЪ :-)'
    };
/*Simple JavaScript Templating John Resig*/
  var content = tmpl(html, userData);

  body.append(content);

/*-----LoDash-----*/
  var template = _.template('<p class="bonus">LoDash (bonus)</p>' + html);
  var contentLow = template(userData);
  body.append(contentLow);

});;// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();