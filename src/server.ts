import express from 'express';
import fetch from 'node-fetch';

const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello XRP!');
});

app.get('/value', () => {
  fetch('https://api.coinmarketcap.com/v1/ticker/', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => {
    console.log(res.body);
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${process.env.PORT || PORT}...`);
});
