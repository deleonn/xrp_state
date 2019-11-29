import express from 'express';
import fetch from 'node-fetch';

const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello XRP!');
});

const qs = '?symbol=XRP&convert=MXN';

app.get('/value', async () => {
  const value = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest${qs}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-CMC_PRO_API_KEY': '94f06b4e-0d1b-4177-8eec-067ad81384df',
      },
    }
  )
    .then(res => res.json())
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));

  console.log(JSON.stringify(value));
  return value;
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${process.env.PORT || PORT}...`);
});
