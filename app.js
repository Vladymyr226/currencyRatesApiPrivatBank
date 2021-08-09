// https://www.npmjs.com/package/axios

const axios = require('axios');

axios({
    method: 'get',
    url: 'https://api.privatbank.ua/p24api/exchange_rates?json&date=08.08.2021'
})
    .then(response => {
        console.log(response.data.exchangeRate);
    })
    .catch(function (error) {
        console.log(error);
    });