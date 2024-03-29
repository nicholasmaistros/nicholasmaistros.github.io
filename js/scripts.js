var scrollAnimation = function (destination) {
  $('html, body').animate({
    scrollTop: $(destination).offset().top
  }, 1000);
};

$(".about-nav").click(function () {
  scrollAnimation("#about");
});
$(".publications-nav").click(function () {
  scrollAnimation("#publications");
});
$(".projects-nav").click(function () {
  scrollAnimation("#projects");
});
$(".media-nav").click(function () {
  scrollAnimation("#media");
});
$(".contact-nav").click(function () {
  scrollAnimation("#contact");
});

$(document).ready(function () {
  var num = Math.floor(Math.random() * (quotes.length));
  $(".quote-fader").html(formatQuote(quotes[num]));
  setInterval(
    function rotateQuote() {
      var num = Math.floor(Math.random() * (quotes.length));
      $(".quote-fader").fadeOut(function () {
        $(".quote-fader").html(formatQuote(quotes[num]));
      });
      $(".quote-fader").fadeIn(function () {
        $(".quote-fader").html(formatQuote(quotes[num]));
      });
    }, 15000);
});

function formatQuote(quoteObject) {
  return "<p>" + quoteObject.content + "</p>" + "<p> -" + quoteObject.source + "</p>";
}

// Quotes can be added here and will be generated above
var quotes = [
  {
    content: 'They brushed the snow from their eyelashes, and they looked out across the divide. It was hard to picture a steam engine here, grinding and huffing behind them, but the Major\'s notebooks were filling with inky measurements. He could see it. And what a view.',
    source: 'These Imaginary Acts',
  },
  {
    content: 'A real thwack, on that rubbery dead cheek. And she must have thought that would bring his awful ugly soul back into him, because she ran, out of the room and right into me.',
    source: 'These Imaginary Acts',
  },
  {
    content: 'And you miss all the ways you could have been admired and loved and hated by lovers and enemies and coworkers in cities like New York, or better than New York, cities that don\'t even exist.',
    source: 'The Brights',
  },
  {
    content: 'He was firm in who he was and had been, a certainty, not because he felt it was right, nothing so patriotic-American, but because the wrong things never happened to him.',
    source: 'All the Crowned Ruffians That Ever Lived',
  },
  {
    content: 'Missy was in this bathroom on a yacht. Her father was recovering in someone\'s island mansion. Manny was shooting at the Taliban. No one was where they were supposed to be.',
    source: 'All the Crowned Ruffians That Ever Lived',
  },
  {
    content: 'A nice thing, as poor as we were, living in an apartment below the sanctuary of an old Lutheran church…listening to the organ and the congregation through the pipes as Buddy dreamt of our future prospects, as I put them off.',
    source: 'The Young Ones',
  },
  {
    content: 'While we joked about his ailments, and about my murdering him, I never told Walt how much, at times, I truly wanted him to die.',
    source: 'Full of Life Now',
  },
  {
    content: 'Jim McNally, fifty-four, con boss, learned how to become a con boss while doing time in Alcatraz, studying and taking notes from other con bosses.',
    source: 'Someone Else\'s Boys',
  },
  {
    content: 'Corey\'s unknowing contribution...serving scones only days ago, hardly on anyone\'s mind, and now the body and blood in a ceremony of artists, and now the eye of a wave of crackdowns and broken windows and these revolving red and blue lighthouses, pitched along the tectonic fault lines of the city.',
    source: 'Desperate Living Creatures',
  },
  {
    content: 'Her latest drawing: the Mother crossing the glossy expanse of the Oculus, snowstorms making TV static of the mall-station\'s narrow windows between its long white bones, the Mother\'s pregnant shadow preceding her as she makes her way toward the incongruent gathering of tents in the belly of the whale...',
    source: 'Desperate Living Creatures',
  },
  // {
  //   content: 'I\’d waited for him to come to my side of the room, had been pretending to admire, for too long, something that looked as though it had once been Apollo and Daphne but was now melting like hot wax.',
  //   source: 'The Young Ones',
  // },
  {
    content: 'Something was lost in the predictability of the small-town boy come to the big city... He watched the arteries of distant traffic like strands of jewelry. His shirt collar was flipped, but I didn’t reach out to right it.',
    source: 'The Young Ones'
  }
];
