const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Middleware para ler arquivos JSON no body params.
app.use(express.json());

const customers = [];

/**
 * cpf => string
 * name => string
 * id => uuid (third partu madule)
 * statement []
 */
app.post('/api/v1/account', (req, res) => {
  const { cpf, name } = req.body;
  const id = uuidv4();

  const customerAlreadyExists = customers.some(element => element.cpf === cpf);

  if (customerAlreadyExists) {
    return res.status(400).json({
      status: 'fail',
      message: `CPF ${cpf} already exists in our system.`
    });
  }

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

const port = 3333;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
