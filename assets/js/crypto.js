const myHeaders = new Headers();

const myRequest = new Request(apiUrl, {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});



var apiKey = "coinranking31372a0279a88b1cc0538d1885e1627c3a8da8f9b1e7e1b1";
var apiUrl = 'http://api.coinranking.com/v2/coinranking31372a0279a88b1cc0538d1885e1627c3a8da8f9b1e7e1b1';
var searchForm = document.getElementById("search-form");

 //function getCoin

console.log (apiUrl);
fetch(myRequest)
.then(function(response) {
    // request was successful
    console.log(JSON.stringify(response));
    if (response.ok) {
        response.json().then(function(data) {
            console.log(data);
        })
    }
});