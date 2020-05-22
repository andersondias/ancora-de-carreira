function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

var anchors = {
  "TF": {
    "questions": [1,9,17,25,33],
    "slug": "competencia-tecnica-funcional",
  },
  "GG": {
    "questions": [2, 10, 18, 26, 34],
    "slug": "competencia-para-gerencia-geral",
  },
  "AI": {
    "questions": [3, 11, 19, 27, 35],
    "slug": "autonomia-independencia",
  },
  "SE": {
    "questions": [4, 12, 20, 28, 36],
    "slug": "seguranca-estabilidade",
  },
  "CE": {
    "questions": [5, 13, 21, 29, 37],
    "slug": "criatividade-empreendedora",
  },
  "SD": {
    "questions": [6,14,22,30,38],
    "slug": "servico-dedicacao-a-uma-causa",
  },
  "DP": {
    "questions": [7, 15, 23, 31, 39],
    "slug": "desafio-puro",
  },
  "EV": {
    "questions": [8, 16, 24, 32, 40],
    "slug": "estilo-de-vida",
  }
};

$.fn.upform = function() {
  var $this = $(this);
  var container = $this.find(".upform-main");

  var choosenTopAnswers = [];

  $(document).ready(function() {
    var previousResult = getQueryVariable("r");
    if(Object.keys(anchors).includes(previousResult)) {
      var scoreByAnchors = {};
      for(anchorKey in anchors) {
        scoreByAnchors[anchorKey] = getQueryVariable(anchorKey);
      }
      scroolToResults(previousResult, scoreByAnchors);
    } else {
      $(container).find(".input-block").first().click();
    }
  });

  var greatestKey;

  $($this).find("form").submit(function() {
      return false;
  });

  $('#answer').click(function(){
    var stop = false;
    var answersByScore = {};

    $('.question').each(function(index) {
      var question = index + 1;
      var answer = $(this).find('input[type="radio"]:checked');
      var answerValue = answer.val();
      if(answerValue === undefined) {
        $(this).find('.input-control').click();
        stop = true;
        return false;
      } else {
        if(answersByScore[answerValue] === undefined) {
          answersByScore[answerValue] = []
        }
        answersByScore[answerValue].push(question)
      }
    });

    if(stop) {
      return false;
    }

    var topAnswers = [];
    var topAnswerValue;
    for(topAnswerValue of Object.keys(answersByScore).reverse()) {
      var topAnswer;
      for(topAnswer of answersByScore[topAnswerValue]) {
        topAnswers.push(topAnswer);
      }
      if(topAnswers.length >= 3) {
        break;
      }
    }

    for(topAnswerNumber of topAnswers) {
      var question = $('#question-' + topAnswerNumber);
      $("#top-answers #options").append('<label><input type="checkbox" class="top-answer" name="top-answers" value="'+topAnswerNumber+'"> ' + question.text() + '</label><br>');
    }

    $("#top-answers").show();
    rescroll($("#top-answers"));

    return false;
  });

  var maxNumberOfTopAnswers = 3;
  $('#top-answers').on('change', '.top-answer', function(evt) {
    var choosenAnswers = $(this).parent().parent().find('.top-answer:checked').length;
    if(choosenAnswers > maxNumberOfTopAnswers) {
       this.checked = false;
    } else if(choosenAnswers == maxNumberOfTopAnswers) {
       $('#top-answers button').prop('disabled', false);
    } else {
      $('#top-answers button').prop('disabled', true);
    }
  });

  $('#select-top-answers').click(function(){
    choosenTopAnswers = $('#top-answers .top-answer:checked').map(function(){ return parseInt($(this).val()) }).toArray()
    var anchorKey;
    var greatestScore = 0;
    var scoreByAnchors = {};

    for (anchorKey in anchors) {
      var anchor = anchors[anchorKey];
      var score = anchor.questions.reduce(sumAnswers, 0) / 5.0;
      scoreByAnchors[anchorKey] = score;

      if(score > greatestScore) {
        greatestKey = anchorKey;
        greatestScore = score;
      }
    }

    scroolToResults(greatestKey, scoreByAnchors);
    return false;
  });

  $(container)
    .find(".input-block")
    .not(".input-block input")
    .on("click", function() {
    rescroll(this);
  });

  $(container).find(".input-block input").keypress(function(e) {
    if (e.which == 13) {
      if ($(this).hasClass("required") && $(this).val() == "") {
      } else moveNext(this);
    }
  });

  $(container).find('.input-block input[type="radio"]').change(function(e) {
    moveNext(this);
  });

  $(window).on("scroll", function() {
    $(container).find(".input-block").each(function() {
      var etop = $(this).offset().top;
      var diff = etop - $(window).scrollTop();

      if (diff > 100 && diff < 300) {
        reinitState(this);
      }
    });
  });

  function scroolToResults(greatestKey, scoreByAnchors) {
    var anchor = anchors[greatestKey].slug;
    var url = window.location.protocol + "//" + window.location.host + window.location.pathname + 'resultado/' + anchor + '.html?';

    var scoreByAnchor;
    for(anchorKey in scoreByAnchors) {
      scoreByAnchor = scoreByAnchors[anchorKey]
      if(scoreByAnchor) {
        url += "" + anchorKey + "=" + scoreByAnchor+"&";
      }
    }
    window.location = url;
  }

  function sumAnswers(total, question) {
      var answer = $('input[name = "q' + question + '"]:checked').val();
      if(answer === undefined) {
        answer = 0
      } else {
        answer = parseFloat(answer)

        if(choosenTopAnswers.includes(question)) {
          answer = answer + 4
        }
      }
      return total + answer;
    }

  function reinitState(e) {
    $(container).find(".input-block").removeClass("active");

    $(container).find(".input-block input").each(function() {
      $(this).blur();
    });
    $(e).addClass("active");
    /*$(e).find('input').focus();*/
  }

  function rescroll(e) {
    $(window).scrollTo($(e), 200, {
      offset: { left: 100, top: -200 },
      queue: false
    });
  }

  function reinit(e) {
    reinitState(e);
    rescroll(e);
  }

  function moveNext(e) {
    $(e).closest('.input-block').next().click();
  }

  function movePrev(e) {
    $(e).closest('.input-block').prev().click();
  }
};

$.fn.showResult = function() {
  var $this = $(this);

  $(document).ready(function() {
    var anchorTitle = $('#anchor-title').text()

    var shareSubject = "Minha âncora de carreira atualmente é " + anchorTitle + ". Descubra mais sobre âncoras de carreira.";
    var encodedShareSubject = encodeURIComponent(shareSubject);
    var shareLink = window.location;

    var scoreByAnchor;
    for(anchorKey in anchors) {
      scoreByAnchor = getQueryVariable(anchorKey);
      if(scoreByAnchor) {
        $('#score-'+anchorKey).text(' (Sua nota: '+ scoreByAnchor + ')');
      }
    }

    var endodedShareLink = encodeURIComponent(shareLink);

    $("#share-link").attr('href', shareLink);

    var emailBody = "Recentemente descobri que minha âncora de carreira atualmente é " + anchorTitle + ".";
        emailBody += " Você pode ver mais detalhes sobre minha âncora em " + shareLink + ".";
    var emailHref = "mailto:?subject="+ encodedShareSubject+ "&body=" + encodeURIComponent(emailBody)
    $("#share-email").attr('href', emailHref)

    var facebookHref= "https://www.facebook.com/sharer/sharer.php?u=" + endodedShareLink + "&quote=" + encodedShareSubject;
    $("#share-facebook").attr('href', facebookHref)

    var twitterHref = "https://twitter.com/intent/tweet?source="+endodedShareLink+"&text=" + encodedShareSubject + ":%20" + endodedShareLink;
    $("#share-twitter").attr('href', twitterHref)

    var linkedinHref = "https://www.linkedin.com/sharing/share-offsite/?url=" + endodedShareLink + "&title="+ encodedShareSubject + "&summary=&source=" + endodedShareLink;
    $("#share-linkedin").attr('href', linkedinHref)
  });
};

$(".upform").upform();
$("#result").showResult();
