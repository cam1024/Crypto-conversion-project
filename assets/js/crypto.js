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
