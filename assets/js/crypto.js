var apiKey = "coinranking31372a0279a88b1cc0538d1885e1627c3a8da8f9b1e7e1b1"
 var apiUrl = 'https://api.coinranking.com/v2/coins'
 var searchForm = document.getElementById("search-form");

 function getCoin

 console.log (apiUrl)
 fetch(apiUrl)
 .then(function(response) {
     // request was successful
     if (response.ok) {
     response.json().then(function(data) {

     console.log(data)