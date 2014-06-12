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
      'change .js-answer2': 'pointUpdate',
      'change .js-answer3': 'pointUpdate'
    },
    
    pointUpdate: function(e) {
      var answer2 = $('.js-answer2').val();
      var answer3 = $('.js-answer3').val();
      var answerTotals = parseInt(answer2) + parseInt(answer3);
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
