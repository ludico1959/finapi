const express = require('express');
const morgan = require('morgan');
const accountRouter = require('./routes/accountRoutes');
const balanceRouter = require('./routes/balanceRoutes');
const depositRouter = require('./routes/depositRoutes');
const statementRouter = require('./routes/statementRoutes');
const withdrawRouter = require('./routes/withdrawRoutes');
// const { v4: uuidv4 } = require('uuid');

const app = express();

////////////////////////////////////////////////////
/// MIDDLEWARES:

// os middlewares dentro de app.use() são chamados antes de todas as rotas.
app.use(express.json());

app.use((req, res, next) => {
  console.log('A request just reached the server 📬\nDetails below: 📧');

  next();
});

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

////////////////////////////////////////////////////
/// ROUTES:

app.use('/api/v2/account', accountRouter);
app.use('/api/v2/balance', balanceRouter);
app.use('/api/v2/deposit', depositRouter);
app.use('/api/v2/statement', statementRouter);
app.use('/api/v2/withdraw', withdrawRouter);

module.exports = app;
