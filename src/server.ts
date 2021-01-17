import express from 'express';

import './database';

import routes from './routes';

const app = express();

app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`✅ The server is running on port ${port}!`);
});
