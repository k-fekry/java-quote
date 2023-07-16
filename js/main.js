// Array of quotes
var quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
];
var previousQuoteIndex = -1; // Track the index of the previous quote

function generateQuote() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousQuoteIndex); // Repeat if the random index is the same as the previous one

  var quote = quotes[randomIndex];
  previousQuoteIndex = randomIndex; // Update the previous quote index

  document.getElementById("quote-text").textContent = quote.text;
  document.getElementById("quote-author").textContent = quote.author;
}

document
  .getElementById("generate-button")
  .addEventListener("click", generateQuote);
