let apiUrl = "https://api.quotable.io/quotes/random?limit=1?maxLength=40";

let getQuotebtn = document.getElementById("newQuote");

const quoteDisplay = document.getElementById("quote")
const authorName = document.getElementById("author")

getQuotebtn.addEventListener("click", async function getQuotes() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    quoteDisplay.innerHTML = data[0].content;
    authorName.innerHTML = "—" + data[0].author;
})