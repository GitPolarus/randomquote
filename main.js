// https://type.fit/api/quotes
let quoteElement = document.querySelector(".quote");
let authorElement = document.querySelector(".author");
let quotes = [];

//activer le bouton
//fetch data de l'url api
//créer une fonction qui sert a integrer le resultat recherché dans l'html

let btn = document.querySelector(".new-quote");

function getquotes() {
  //declare  var where stoccking info
  fetch(`https://type.fit/api/quotes`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      quotes = response;
      let quote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteElement.textContent = quote.text;
      authorElement.textContent = quote.author;
    })
    .catch((error) => console.log(error));
}

/*  
async allow to define asynchronose function and it returns a promise
 await is always use within async function and it allows to wait until the response is available
*/
async function loadQuote() {
  // use try catch to handle error and prevent the code to crach
  try {
    let response = await fetch(`https://type.fit/api/quotes`);
    resultat = await response.json();
    quotes = resultat;
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = quote.text;
    authorElement.textContent = quote.author == null ? "Inconnu" : quote.author;
  } catch (error) {
    console.log(error);
  }
}

// load quote when the file is loaded
// getquotes();
loadQuote();

btn.addEventListener("click", loadQuote);
