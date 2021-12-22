const { request } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

/**
 * Middleware para ler arquivos JSON no body params.
 * os middlewares dentro de app.use() são chamados antes de todas as rotas.
 */
app.use(express.json());
// app.use(verifyIfExistAccountCPF);

const customers = [];

// Middlewares recebem um terceiro parâmetro chamado 'next'.
function verifyIfExistAccountCPF(req, res, next) {
  const { cpf } = req.headers;

  const customer = customers.find(element => element.cpf === cpf);

  if (!customer) {
    return res.status(404).json({
      status: 'fail',
      message: `CPF ${cpf} not found.`
    });
  }

  req.customer = customer;

  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credito') {
      return acc - operation.amount;
    } else {
      return acc + operation.amount;
    }
  }, 0); // valor inicial do reduce.

  return balance;
}

app.post('/api/v1/account', (req, res) => {
  const { cpf, name } = req.body;
  const id = uuidv4();

  customers.push({
    id: id,
    cpf: cpf,
    name: name,
    statement: []
  });

  return res.status(201).json({
    status: 'success',
    data: {
      account: {
        id: id,
        cpf: cpf,
        name: name
      }
    }
  });
});

// statement = extrato bancário
app.get('/api/v1/statement/', verifyIfExistAccountCPF, (req, res) => {
  const { customer } = req;

  if (!customer) {
    return res.status(404).json({
      status: 'fail',
      message: `The following CPF ${cpf} does not exist in our system.`
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      name: customer.name,
      statement: customer.statement
    }
  });
});

app.post('/api/v1/deposit', verifyIfExistAccountCPF, (req, res) => {
  const { description, amount } = req.body;
  const { customer } = req;

  const statementOperration = {
    description: description,
    amount: amount,
    create_at: new Date(),
    type: 'credit'
  };

  customer.statement.push(statementOperration);

  return res.status(201).json({
    status: 'success',
    data: {
      name: customer.name,
      statement: customer.statement
    }
  });
});

// withdraw = retirar/sacar
app.post('/api/v1/withdraw', verifyIfExistAccountCPF, (req, res) => {
  const { customer } = req;
  const { amount } = req.body;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return res.status(400).json({
      status: 'error',
      message: `Balance: $ ${balance}. Insuficient funds!`
    });
  }

  const statementOperration = {
    amount: amount,
    create_at: new Date(),
    type: 'debit'
  };

  customer.statement.push(statementOperration);

  return res.status(201).json({
    status: 'success',
    data: {
      name: customer.name,
      type: customer.type,
      amount: amount
    }
  });
});

const port = 3333;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
