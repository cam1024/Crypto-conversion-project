<<<<<<< HEAD
var searchForm = document.getElementById("search-form");
var display = document.getElementById("par");
var coin1 = document.getElementById('coin-1');
var coin2 = document.getElementById('coin-2');
var coin3 = document.getElementById('coin-3');
var coin4 = document.getElementById('coin-4');
var coin5 = document.getElementById('coin-5');
var coin6 = document.getElementById('coin-6');
var coin7 = document.getElementById('coin-7');
var coin8 = document.getElementById('coin-8');
var coin9 = document.getElementById('coin-9');
var coin10 = document.getElementById('coin-10');

let p = document.createElement('p');


const options = {
    method: 'GET',
    headers: {
    }
};

fetch('https://api.coinlore.net/api/global/', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        p.textContent = 'There are currently ' + response[0].coins_count + ' total Cryptocurrencies.';
        display.append(p)
    })
    .catch(err => console.error(err));


    fetch('https://api.coinlore.net/api/tickers/', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        var data = response.data;
        coin1.textContent = data[0].rank + ': ' + data[0].name + ': $' + data[0].price_usd;
        coin2.textContent = data[1].rank + ': ' + data[1].name + ': $' + data[1].price_usd;
        coin3.textContent = data[2].rank + ': ' + data[2].name + ': $' + data[2].price_usd;
        coin4.textContent = data[3].rank + ': ' + data[3].name + ': $' + data[3].price_usd;
        coin5.textContent = data[4].rank + ': ' + data[4].name + ': $' + data[4].price_usd;
        coin6.textContent = data[5].rank + ': ' + data[5].name + ': $' + data[5].price_usd;
        coin7.textContent = data[6].rank + ': ' + data[6].name + ': $' + data[6].price_usd;
        coin8.textContent = data[7].rank + ': ' + data[7].name + ': $' + data[7].price_usd;
        coin9.textContent = data[8].rank + ': ' + data[8].name + ': $' + data[8].price_usd;
        coin10.textContent = data[9].rank + ': ' + data[9].name + ': $' + data[9].price_usd;

    })
    .catch(err => console.error(err));

=======
const apiKey = 'coinranking31372a0279a88b1cc0538d1885e1627c3a8da8f9b1e7e1b1';
const url = 'https://api.coinranking.com/v2/coins';
const resultsContainer = document.getElementById('results');
const queryString = new URLSearchParams({
  'x-access-token': apiKey,
  search: 'Bit',
});
// Add the API key to the querystring
fetch(`${url}?${queryString}`)
  .then((response) => response.json())
  .then((response) => {
    if (response.status === 'success') {
      const html = response.data.coins.map((coin) => `
        <tr>
          <td>${coin.rank}</td>
          <td>${coin.name}</td>
          <td>${coin.price}</td>
        </tr>
      `);

      resultsContainer.innerHTML = html.join('');
    } else {
      // Show error message if the request failed
      resultsContainer.innerHTML = `<tr><td colspan="3">${response.message}</td></tr>`;
    }
  })
  .catch((error) => {
    console.error(error);
  });
>>>>>>> e92b0d759e91a79d3c000cf81fa2ce52a7970329
