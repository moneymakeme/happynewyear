// Array of quotes
const quotes = [
    '"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt',
    '"New Year, New Beginnings." — Unknown',
    '"Cheers to a new year and another chance for us to get it right." — Oprah Winfrey',
    '"A new year is the beginning of a new chapter in your life. Make it amazing!" — Unknown',
    '"The best way to predict the future is to create it." — Abraham Lincoln',
    '"This is a new year. A new beginning. And things will change." — Unknown'
];

let currentQuoteIndex = 0;

// Elements
const quoteElement = document.getElementById('quote');
const nextQuoteBtn = document.getElementById('nextQuoteBtn');

// Function to change the quote
function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex];
    quoteElement.style.opacity = 1; // Make sure the quote is visible
}

// Initially set the first quote
quoteElement.textContent = quotes[currentQuoteIndex];
quoteElement.style.opacity = 1;

// Event listener for the button to change quote
nextQuoteBtn.addEventListener('click', () => {
    changeQuote();
});
