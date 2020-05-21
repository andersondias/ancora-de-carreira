$.fn.upform = function() {
  var $this = $(this);
  var container = $this.find(".upform-main");
  var anchors = {
    "TF": {
      "questions": [1,9,17,25,33],
      "title": "Competência Técnica / Funcional",
      "description": "Se sua âncora de carreira é a competência em alguma área técnica ou funcional, você não abriria mão da oportunidade de aplicar suas habilidades nessa área e de continuar desenvolvendo essas habilidades a um nível cada vez mais alto.<br><br>Você obtém seu senso de identidade com o exercício dessas habilidades e sente-se totalmente realizado quando seu trabalho lhe permite ser desafiado nessas áreas. Você pode estar disposto a gerenciar outras pessoas em sua área técnica ou funcional, mas não se interessa pelo gerenciamento em si e evitaria a gerência geral, porque precisaria desistir de sua própria área de especialidade."
    },
    "GG": {
      "questions": [2, 10, 18, 26, 34],
      "title": "Competência para Gerência Geral",
      "description": "Se sua ancora de carreira é a competência para a gerência geral, você não abriria mão da oportunidade de subir a um nível alto o suficiente que lhe permita integrar os esforços de outras pessoas em suas funções e ser responsável pelo resultado de determinada unidade da organização.<br><br>Você quer total responsabilidade pelos resultados e identifica seu próprio trabalho com o sucesso da organização para qual trabalha. Se você está em uma área técnica ou funcional atualmente, aceita a situação como uma experiência de aprendizado necessária; entretanto, ambiciona alcançar um cargo com funções generalistas o quanto antes. Ter um alto cargo gerencial técnico não interessa."
    },
    "AI": {
      "questions": [3, 11, 19, 27, 35],
      "title": "Autonomia / Independência",
      "description": "Se sua âncora de carreira é a autonomia/independência, você não renunciaria à oportunidade de definir seu próprio trabalho, à sua própria maneira. Se você está numa organização, quer permanecer em funções que lhe permitam flexibilidade com relação a quando e como trabalhar.<br><br>Se você não tolera regras e restrições organizacionais de qualquer espécie, busca ocupações nas quais tenha a liberdade que procura, tais como ensino ou consultoria. Para manter sua autonomia, você recusa oportunidades de promoção ou avanço. Talvez você até procure Ter seu próprio negócio para alcançar a sensação de autonomia; entretanto este motivo não é o mesmo que a criatividade empreendedora descrita mais adiante."
    },
    "SE": {
      "questions": [4, 12, 20, 28, 36],
      "title": "Segurança / Estabilidade",
      "description": "Se sua âncora de carreira é a segurança/estabilidade, você não abriria mão da sua segurança ou estabilidade no trabalho ou organização.<br><br>Sua principal preocupação é alcançar a sensação de ser bem sucedido, para ficar tranqüilo. A âncora está demonstrada na preocupação pela segurança financeira (tais como aposentadoria e planos de pensão) ou segurança no emprego. Essa estabilidade pode significar trocar sua lealdade e disposição de fazer qualquer coisa que seu empregador lhe peça por uma promessa de garantia de emprego. Você se preocupa menos com o conteúdo do seu trabalho e o posto que pode alcançar, embora possa chegar a um alto nível, se seus talentos assim o permitirem. No que se refere a autonomia, todo mundo tem certas necessidades de segurança e estabilidade,especialmente em épocas que os encargos financeiros são grandes ou quando se está para enfrentar a aposentadoria. Entretanto, as pessoas ancoradas dessa maneira estão sempre preocupadas com essas questões e constroem toda sua auto-imagem em torno do gerenciamento da segurança e estabilidade."
    },
    "CE": {
      "questions": [5, 13, 21, 29, 37],
      "title": "Criatividade Empreendedora",
      "description": "Se sua âncora de carreira é a criatividade empreendedora, você não renunciaria à oportunidade de criar sua própria organização ou empreendimento, desenvolvidas com sua própria capacidade e disposição de assumir riscos e superar obstáculos.<br><br>Você quer provar ao mundo que pode criar um empreendimento que seja o resultado do seu próprio esforço. Talvez você trabalhe para outros em alguma organização, enquanto aprende e avalia oportunidades futuras, mas seguirá seu próprio caminho assim que sentir que tem condições para isso. Você quer que seu empreendimento seja financeiramente bem sucedido, como prova de sua capacidade."
    },
    "SD": {
      "questions": [6,14,22,30,38],
      "title": "Serviço / Dedicação a uma Causa",
      "description": "Se sua âncora de carreira é serviço/dedicação a uma causa, você não renunciaria à oportunidade de procurar um trabalho onde pudesse realizar alguma coisa útil, como por exemplo tornar o mundo um lugar melhor para se viver, solucionar problemas ambientais, melhorar a harmonia entre as pessoas, ajudar aos outros, melhorar a segurança das pessoas, curar doenças através de novos produtos, etc.<br><br>Você busca essas oportunidades, mesmo que isto signifique mudar de organização e não aceita transferências ou promoções que o desviem do trabalho que preencha esses valores."
    },
    "DP": {
      "questions": [7, 15, 23, 31, 39],
      "title": "Desafio Puro",
      "description": "Se sua âncora de carreira é desafio puro, você não abriria mão da oportunidade de trabalhar na solução de problemas aparentemente insolúveis, para vencer oponentes duros ou superar obstáculos difíceis. Para você, a única razão significativa para buscar um trabalho ou carreira é que este lhe permita vencer o impossível.<br><br>Algumas pessoas encontram esse desafio puro em alguns trabalhos intelectuais, como por exemplo, o engenheiro interessado apenas em desenhos extremamente difíceis; outras encontram seu desafio em situações complexas, tais como um consultor estrategista, interessado apenas em clientes à beira da falência e que já esgotaram todos os recursos; algumas o encontram na competição interpessoal, como o atleta profissional ou o vendedor que define cada venda como uma vitória ou derrota. A novidade, variedade e dificuldade tornam-se um fim em si e se alguma coisa é fácil, imediatamente torna-se monótona."
    },
    "EV": {
      "questions": [8, 16, 24, 32, 40],
      "title": "Estilo de Vida",
      "description": "Se sua âncora de carreira é o estilo de vida, você não abriria mão de uma situação que lhe permita equilibrar e integrar suas necessidades pessoais, familiares e as exigências de sua carreira. Você quer fazer todos os principais segmentos de sua vida trabalhar em conjunto para um todo integrado e, portanto, precisa de uma situação de carreira que lhe dê suficiente flexibilidade para alcançar tal integração.<br><br>Talvez você precise sacrificar alguns aspectos da sua carreira (por exemplo, uma mudança geográfica que fosse uma promoção, mas que desestruturaria toda sua situação de vida), e você define o sucesso em termos mais amplos do que simplesmente sucesso na carreira. Você sente que sua identidade está mais vinculada ao modo de viver sua vida como um todo, onde você se estabelece, como lida com sua situação familiar e como você se desenvolve, do que com qualquer trabalho ou organização."
    }
  };

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

  $('.restart').click(function(e) {
    $(container).find('.input-block input[type="radio"]').prop('checked', false);
    rescroll($('#beginning'));
    $("#results").hide();
    $("#top-answers").hide();
    $('#top-answers .top-answer').each(function() { $(this).parent().remove()});
    for (anchorKey in anchors) {
      $('#score-'+anchorKey).text('');
    }
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({path: newurl},'',newurl);
      }
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
    var anchor = anchors[greatestKey];
    $("#results h1").html("Sua âncora de carreira atual é <br><b>"+ anchor.title+"</b>");
    $("#results p").html(anchor.description);
    $("#results").show();

    var shareSubject = "Minha âncora de carreira atualmente é " + anchor.title + ". Descubra mais sobre âncoras de carreira.";
    var encodedShareSubject = encodeURIComponent(shareSubject);
    var shareLink = "https://andersondias.com.br/ancora-de-carreira/?r=" + greatestKey;
    var scoreByAnchor;
    for(anchorKey in scoreByAnchors) {
      scoreByAnchor = scoreByAnchors[anchorKey]
      if(scoreByAnchor) {
        shareLink += "&" + anchorKey + "=" + scoreByAnchor;
        $('#score-'+anchorKey).text(' (Sua nota: '+ scoreByAnchor + ')');
      }
    }

    var endodedShareLink = encodeURIComponent(shareLink);

    $("#share-link").attr('href', shareLink);

    var emailBody = "Recentemente descobri que minha âncora de carreira atualmente é " + anchor.title + ".";
        emailBody += " Você pode ver mais detalhes sobre minha âncora em " + shareLink + ".";
    var emailHref = "mailto:?subject="+ encodedShareSubject+ "&body=" + encodeURIComponent(emailBody)
    $("#share-email").attr('href', emailHref)

    var facebookHref= "https://www.facebook.com/sharer/sharer.php?u=" + endodedShareLink + "&quote=" + encodedShareSubject;
    $("#share-facebook").attr('href', facebookHref)

    var twitterHref = "https://twitter.com/intent/tweet?source="+endodedShareLink+"&text=" + encodedShareSubject + ":%20" + endodedShareLink;
    $("#share-twitter").attr('href', twitterHref)

    var linkedinHref = "https://www.linkedin.com/sharing/share-offsite/?url=" + endodedShareLink + "&title="+ encodedShareSubject + "&summary=&source=" + endodedShareLink;
    $("#share-linkedin").attr('href', linkedinHref)

    rescroll($("#results"));
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
};

$(".upform").upform();
