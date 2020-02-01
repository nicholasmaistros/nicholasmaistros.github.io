var quotes = [
  "<p>They brushed the snow from their eyelashes, and they looked out across the divide. It was hard to picture a steam engine here, grinding and huffing behind them, but the Major's notebooks were filling with inky measurements. He could see it. And what a view.</p><p>-These Imaginary Acts</p>",
  "<p>A real thwack, on that rubbery dead cheek. And she must have thought that would bring his awful ugly soul back into him, because she ran, out of the room and right into me.</p><p>-These Imaginary Acts</p>",
  "<p>And you miss all the ways you could have been admired and loved and hated by lovers and enemies and coworkers in cities like New York, or better than New York, cities that don't even exist.</p><p>-The Brights</p>",
  "<p>He was firm in who he was and had been, a certainty, not because he felt it was right, nothing so patriotic-American, but because the wrong things never happened to him. </p><p>-All the Crowned Ruffians That Ever Lived</p>",
  "<p>Missy was in this bathroom on a yacht. Her father was recovering in someone's island mansion. Manny was shooting at the Taliban. No one was where they were supposed to be.</p><p>-All the Crowned Ruffians That Ever Lived</p>",
  "<p>A nice thing, as poor as we were, living in an apartment below the sanctuary of an old Lutheran church…listening to the organ and the congregation through the pipes as Buddy dreamt of our future prospects, as I put them off.</p><p>-The Young Ones</p>",
  "<p>While we joked about his ailments, and about my murdering him, I never told Walt how much, at times, I truly wanted him to die.</p><p>-Full of Life Now</p>",
  "<p>Jim McNally, fifty-four, con boss, learned how to become a con boss while doing time in Alcatraz, studying and taking notes from other con bosses.</p><p>-Someone Else's Boys</p>",
];

$(window).scroll(function() {
    var fromTop = $(this).scrollTop();
    if (fromTop >= $('#banner-box').height()) {
        $('#sticky-section').addClass('fixed');
        $('.main-container').addClass('padded-container');
        $('.anchor').removeClass('nav-padding');
        $('.anchor').addClass('move-anchor');
    } else {
        $('#sticky-section').removeClass('fixed');
        $('.main-container').removeClass('padded-container');
        $('.anchor').addClass('nav-padding');
        $('.anchor').removeClass('move-anchor');
    }
});

var scrollAnimation = function(destination) {
  $('html, body').animate({
    scrollTop: $(destination).offset().top+50
  }, 1000);
};

$(".about-nav").click(function() {
  scrollAnimation("#about");
});
$(".publications-nav").click(function() {
  scrollAnimation("#publications");
});
$(".projects-nav").click(function() {
  scrollAnimation("#projects");
});

$(document).ready(function() {
  var num = Math.floor(Math.random() * (quotes.length));
  $(".quote-fader").html(quotes[num]);
  setInterval(
      function rotateQuote() {
        var num = Math.floor(Math.random() * (quotes.length));
        $(".quote-fader").fadeOut(function() {
          $(".quote-fader").html(quotes[num]);
        });
        $(".quote-fader").fadeIn(function() {
          $(".quote-fader").html(quotes[num]);
        });
      }, 15000);
});
