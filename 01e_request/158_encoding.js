const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');

request({
  url: 'https://www.google.com/search',
  encoding: null,
  method: 'GET',
  qs: { q: '신사역 맛집' },
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10,
},
(error, response, body) => {
  if (!error && response.statusCode === 200) {
    const enc = charset(response.headers, body);
    const decodedResult = iconv.decode(body, enc);
    console.log(decodedResult);
  } else {
    console.log(`error${response.statusCode}`);
  }
});

