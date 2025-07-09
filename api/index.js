import express from 'express';
import serverless from 'serverless-http';
import emailRouter from './app/email/email.routes.js';
import { NODE_ENV, PORT } from './libs/index.js';

const app = express();
const port = PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('✅ Hello from Express + Serverless!');
});

app.use('/email', emailRouter);

// ✅ Tambah catch-all
app.use((_req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

export default serverless(app);

if (NODE_ENV === 'development') {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}
