const express = require('express');
const customerRouter = require('./http/customers/customer.routes');
const pushWaRouter = require('./http/push-wa/push-wa.routes');
const app = express();

app.get('/', (req, res) => res.send('Express on Vercel'));

app.use('/customer', customerRouter);
app.use('/push-wa', pushWaRouter);

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
