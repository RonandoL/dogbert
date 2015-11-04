$(document).ready(function() {
  $(".click-text").click(function() {
    $(".convo-hidden").toggle();
    $(".convo-shown").toggle();
  });

  $("button.hungry").click(function() {
    $("ul.dog-think").prepend("<li>FOOD!! MY FAVRIT THING!!</li>");
    $("ul.dog-says").prepend("<li>Bark! Bark! Bark!</li>");
    $("ul.cat-hears").prepend("<li>I ate your shoe, now can I shit on the carpet?</li>");
    /* Remove Line */
    $("ul.dog-think").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.dog-says").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.cat-hears").children("li").first().click(function() {
      $(this).remove()
    });
  });

  $("button.happy").click(function() {
    $(".dog-think").prepend("<li>YAAA! MY FAVRIT THING!!!</li>");
    $(".dog-says").prepend("<li>Ruff! Ruff!Ruff! Ruff!!</li>");
    $(".cat-hears").prepend("<li>With such low intellect, I please easily.");
    /* Remove Line */
    $("ul.dog-think").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.dog-says").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.cat-hears").children("li").first().click(function() {
      $(this).remove()
    });
  });

  $("button.squirrel").click(function() {
    $(".dog-think").prepend("<li>SQUIRREL!! MY FAVRIT THING!!</li>");
    $(".dog-says").prepend("<li>Grrrrrr......</li>");
    $(".cat-hears").prepend("<li>I see food that I shall catch for the cat.");
    /* Remove Line */
    $("ul.dog-think").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.dog-says").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.cat-hears").children("li").first().click(function() {
      $(this).remove()
    });
  });

  $("button.play").click(function() {
    $(".dog-think").prepend("<li>I WANNA PLAY! MY FAVRIT THING!!</li>");
    $(".dog-says").prepend("<li>Pant, Pant, Pant, WOOF! Pant, Pant, Pant</li>");
    $(".cat-hears").prepend("<li>Let's see if I can piss off the cat enough to kill me.");
    /* Remove Line */
    $("ul.dog-think").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.dog-says").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.cat-hears").children("li").first().click(function() {
      $(this).remove()
    });
  });

  $("button.cat").click(function() {
    $(".dog-think").prepend("<li>CAT!! MY BUDDY! MY FAVRIT THING!!</li>");
    $(".dog-says").prepend("<li>Woof! Woof! Pant, Pant, WOOF! Pant, Pant</li>");
    $(".cat-hears").prepend("<li>LET'S BUG CAT! K - A - T! CAT!!");
    /* Remove Line */
    $("ul.dog-think").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.dog-says").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.cat-hears").children("li").first().click(function() {
      $(this).remove()
    });
  });

  $("button.danger").click(function() {
    $(".dog-think").prepend("<li>DANGER! MY FAVRIT THING!!</li>");
    $(".dog-says").prepend("<li>GRRRRRRRR!!!!!!</li>");
    $(".cat-hears").prepend("<li>Oh, an intruder...yawwwnnn......");
    /* Remove Line */
    $("ul.dog-think").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.dog-says").children("li").first().click(function() {
      $(this).remove()
    });
    $("ul.cat-hears").children("li").first().click(function() {
      $(this).remove()
    });
  });

/* Images */
  $("button.dog-image").click(function() {
    $(".convo-shown").after("<img class='remove' src='images/dog.jpg'>");
    $("img.remove").click(function() {
      $(this).remove();
    });
  });
  $("button.cat-image").click(function() {
    $(".convo-shown").after("<img class='remove' src='images/cat.jpg'>");
    $("img.remove").click(function() {
      $(this).remove();
    });
  });
  $("button.squirrel-image").click(function() {
    $(".convo-shown").after("<img class='remove' src='images/squirrel.jpg'>");
    $("img.remove").click(function() {
      $(this).remove();
    });
  });
  
});
