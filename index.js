const express = require('express');
const emailRouter = require('./src/app/email/email.routes');
const { PORT } = require('./src/libs');
const app = express();
const port = PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from Express + pnpm!');
});

app.use('/email', emailRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
