import express from 'express';
import { PORT } from './libs';
import serverless from 'serverless-http';

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

export default serverless(app);

if (process.env.NODE_ENV === 'development') {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}
