import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ok: true, message: "This is default route to tests 😉"});
});

app.listen(3333, () => {
  console.log('The server is running! ✅');
});