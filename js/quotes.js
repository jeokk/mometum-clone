const quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
];

const quote = document.querySelector("#quotes p:first-child");
const author = document.querySelector("#quotes p:nth-child(2)");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
