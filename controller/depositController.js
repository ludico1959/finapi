////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.createDeposit = (req, res) => {
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
};
