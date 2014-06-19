$(function() {
  var WarmupView, warmupView, QuizView, quizView;
  
  WarmupView = Backbone.View.extend ({
    
    events: {
      'click .js-get-ready': 'warmupUpdate'
    },
    
    warmupUpdate: function(e) {
      var answer = $('.js-total1').html($('.js-answer1').val());
    },
    
    render: function() {
      var generate;
      
      generate = _.template($('#warmup_template').text());
      this.$el.html(generate);
    }
    
  });
  
  QuizView = Backbone.View.extend ({
    
    events: {
      'click .js-score': 'getScore'
    },
    
    getScore: function(e) {
      var total, $dropAnswer, answerTotals, scores;
      
      $dropAnswer = $('.js-answer');

      scores = $dropAnswer.map(function(i, el) {
        var answer;

        answer = $(el).val();
        
        if (answer == 0) {
          $(el).css("background-color", "red");
        } else {
          $(el).css("background-color", "green");
        }

        return answer;
      }).toArray();

      total = _.reduce(scores, function(memo, score) {
        return memo + Number(score);
      }, 0);
      console.log(scores);

      $('.js-total').html('<p>Points:</p>' + total);
    },

    render: function() {
      var generate;
      
      generate = _.template($("#quiz_template").text());
      this.$el.html(generate);
    }
    
  });
  
  warmupView = new WarmupView();
  warmupView.render();
  $('.js-warmup-view').html(warmupView.$el);
  
  quizView = new QuizView();
  quizView.render();
  $('.js-quiz-view').html(quizView.$el);
 
});
