const express = require('express');
const customerRouter = require('./http/customer.routes');
const app = express();

app.get('/', (req, res) => res.send('Express on Vercel'));

app.use('/customer', customerRouter);

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
