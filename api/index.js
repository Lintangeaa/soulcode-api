const express = require('express');
const serverless = require('serverless-http');
const emailRouter = require('./app/email/email.routes');
const { PORT } = require('./libs');

const app = express();
const port = PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express + pnpm + Serverless!');
});

app.use('/email', emailRouter);

// ✅ Export handler untuk Serverless (Vercel, Netlify, AWS Lambda)
module.exports.handler = serverless(app);

if (process.env.NODE_ENV === 'development') {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}
