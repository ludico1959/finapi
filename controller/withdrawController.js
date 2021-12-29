////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.createWithdraw = (req, res) => {
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
};
