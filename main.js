var quotePhrase = document.getElementById("quote-phrase");
var quoteOwner = document.getElementById("quote-owner");

var quotes = [
  {
    phrase: "“Be yourself; everyone else is already taken.”",
    owner: "-- Oscar Wilde",
  },
  {
    phrase: "“Be yourself; everyone else is already taken.”",
    owner: "-- Oscar Wilde",
  },
  {
    phrase: "“So many books, so little time.”",
    owner: "-- Frank Zappa",
  },
  {
    phrase: "“A room without books is like a body without a soul.”",
    owner: "-- Marcus Tullius Cicero",
  },
  {
    phrase: "“Without music, life would be a mistake.”",
    owner: "-- Friedrich Nietzsche",
  },
  {
    phrase:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    owner: "-- Albert Einstein",
  },
  {
    phrase:
      "“ The future belongs to those who believe in the beauty of their dreams.”",
    owner: "-- Hinata Shoyo",
  },
  {
    phrase: " “I hate confidence that has no basis.”",
    owner: "-- Ushijima Wakatoshi",
  },
  {
    phrase:
      "“Repetition, being methodical, and being through just feels nice.”",
    owner: "-- Kita Shinsuke",
  },
  {
    phrase: "“Being strong is being free.”",
    owner: "-- Yamaguchi Tadashi",
  },
  {
    phrase: "“Humans have no wings, so they search for a way to fly.”",
    owner: "--  Ukai Keishin",
  },
  {
    phrase: "“If you think that it will never come, it probably never will.”",
    owner: "--  Oikawa Tooru",
  },
];

function getNewQuote() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  quotePhrase.innerText = quote.phrase;
  quoteOwner.innerText = quote.owner;
}
