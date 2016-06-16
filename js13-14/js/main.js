'use strict';

(function ($) {
  $(function () {

    var questionsArray = [
        {
          question: 'The question №1 (right №1&2)',
          nameOfElements: 'groupAnswers1',
          options: ['The answer variant 1', 'The answer variant 2', 'The answer variant 3'],
          multiReturn: true,
          answer: ['groupAnswers1.0', 'groupAnswers1.1']
        },
        {
          question: 'The question №2 (right №1&3)',
          nameOfElements: 'groupAnswers2',
          options: ['The answer variant 1', 'The answer variant 2', 'The answer variant 3'],
          multiReturn: true,
          answer: ['groupAnswers2.0', 'groupAnswers2.2']
        },
        {
          question: 'The question №3 (right №1)',
          nameOfElements: 'groupAnswers3',
          options: ['The answer variant 1', 'The answer variant 2', 'The answer variant 3'],
          multiReturn: false,
          answer: ['groupAnswers3.0']
        }
    ];
    
    window.localStorage.setItem('test123', JSON.stringify({ data: questionsArray }));
    var data = JSON.parse(localStorage.getItem('test123'));
    
    var questions = $('#test').html();
    var test = tmpl(questions, data);
    $('.testForm').append(test);

    $('.submit').on('click', function () {
      checkAnswers();
      showModal();
      return false;
    });

    questionsArray = data.data;
    var result = [];

    function checkAnswers() {
      var $questions = $('.testForm').find('article');

      for (var i = 0; i < $questions.length; i++) {
        var $answers = $($questions[i]).find('input');
        var selectedAnswers = $answers.map(function (index, item) {
          if ($(item).prop('checked')) return $(item).attr('id');
        })
                                       .get();

        if (selectedAnswers.toString() === questionsArray[i].answer.toString()) {
          result.push(questionsArray[i].question + '- right');
        } else {
          result.push(questionsArray[i].question + '- wrong');
        }
      }
    }

    function showModal() {
      var modal = $('#result').html();
      var summary = tmpl(modal, { data: result });
      $('body').append(summary);

      $('.modal button').one('click', function () {
        $('input').prop('checked', false);
        result = [];
        $('.overlay').remove();
        return false;
      });
    }

  });
})(jQuery);
