let start = 1;
const limit = 25;
let apikey = {
  key: '0abf8b92-6e02-4b3f-8fa3-e60b344c0a4d',
};

fetch(
  `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?start=${start}&limit=${limit}&CMC_PRO_API_KEY=${apikey.key}`
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        `Erro ao executar a requisição, status ${response.status}`
      );
    return response.json();
  })
  .then((api) => {
    console.log(api.data);
    api.data.map((coin) => {
      let texto = '';
      texto = `
        <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
            <h5 class="mt-2">${coin.name}</h5>
            <p>${coin.symbol}</p>
            </div>
        </div>
        `;
      return (document.getElementById('coins').innerHTML += texto);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
