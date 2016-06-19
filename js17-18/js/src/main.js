$(function () {
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

});