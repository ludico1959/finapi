////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.createAccount = (req, res) => {
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
};

exports.getAccount = (req, res) => {
  const { customer } = req;

  return res.status(200).json({
    status: 'success',
    data: {
      account: customer
    }
  });
};

exports.updateAccount = (req, res) => {
  const { customer } = req;
  const { name } = req.body;

  const oldName = customer.name;
  customer.name = name;

  return res.status(201).json({
    status: 'success',
    data: {
      oldName: oldName,
      newName: name
    }
  });
};

exports.deleteAccount = (req, res) => {
  const { customer } = req;

  customers.splice(customer, 1);

  return res.status(200).json({
    status: 'success',
    data: {
      removedCustomer: customer,
      remainCustomers: customers
    }
  });
};
