var test = {
  testBody: document.body,
  testForm: document.createElement("form"),
  testHead: document.createElement("header"),
  testName: document.createElement("h1"),
  testButton: document.createElement("button"),
  qCounter: 0,

    createTest: function () {
      this.testHead.innerHTML = "Тест по программированию";
      this.testButton.innerHTML = "Проверить Мои результаты";
      this.testForm.classList.add('test');
      this.testHead.classList.add('test__header');
      this.testName.classList.add('test__name');
      this.testButton.classList.add('test__button');
      test.testBody.appendChild(this.testForm);
      this.testForm.appendChild(this.testHead);
      this.testHead.appendChild(this.testName);
      this.testForm.appendChild(this.testButton);
    },

         createQuestionOfTest: function() {
        var questionBody = document.createElement('div');
        var questionHead = document.createElement('div');
        var questionName = document.createElement('h3');
        var questionAnswerCheckbox;
        var questionAnswerLabel;
        questionBody.classList.add('questions');
        questionHead.classList.add('questions__header');

        questionName.innerHTML = ((this.qCounter+1) + '. Вопрос №' + (this.qCounter+1) );

        questionBody.appendChild(questionHead);
        questionHead.appendChild(questionName);

        this.qCounter++;
          for (var i = 0; i < 3; i++) {
          var labelInput = document.createTextNode('Вариант ответа №'+(i+1) );
          questionAnswerLabel =  document.createElement('label');
          questionAnswerCheckbox =  document.createElement('input');
          questionAnswerCheckbox.type = "checkBox";
          questionAnswerLabel .classList.add('questions__label');
          questionBody.appendChild(questionAnswerLabel);
          questionAnswerLabel.appendChild(questionAnswerCheckbox);
          questionAnswerLabel.appendChild(labelInput);
        }
        this.testForm.insertBefore(questionBody, this.testButton);
      }
};

test.createTest();
test.createQuestionOfTest();
test.createQuestionOfTest();
test.createQuestionOfTest();
