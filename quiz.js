$(function() {
  var QuizletteView, quizletteView, QuizView, quizView;
  
  QuizletteView = Backbone.View.extend ({
    
    events: {
      'change .js-answer': 'pointUpdate'
    },
    
    pointUpdate: function(e) {
      $('.js-total').html($('.js-answer').val());
    },
    
    render: function() {
      var generate;
      
      generate = _.template($('#quizlette_template').text());
      this.$el.html(generate);
    }
    
  });
  
  QuizView = Backbone.View.extend ({
    
    events: {
      'click .js-score': 'getScore'
    },
    
    getScore: function(e) {
      var answer1 = $('.js-answer1').val();
      if (answer1 == 0) {
        $('.js-answer1').css("background-color", "red");
      } else {
        $('.js-answer1').css("background-color", "lightgreen");
      }

      var answer2 = $('.js-answer2').val();
      if (answer2 == 0) {
        $('.js-answer2').css("background-color", "red");
      } else {
        $('.js-answer2').css("background-color", "lightgreen");
      }

      var answer3 = $('.js-answer3').val();
      if (answer3 == 0) {
        $('.js-answer3').css("background-color", "red");
      } else {
        $('.js-answer3').css("background-color", "lightgreen");
      }
      var answerTotals = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);
      $('.js-total2').html(answerTotals);
    },

    render: function() {
      var generate;
      
      generate = _.template($("#quiz_template").text());
      this.$el.html(generate);
    }
    
  });
  
  quizletteView = new QuizletteView();
  quizletteView.render();
  $('.js-quizlette-view').html(quizletteView.$el);
  
  quizView = new QuizView();
  quizView.render();
  $('.js-quiz-view').html(quizView.$el);
 
});
