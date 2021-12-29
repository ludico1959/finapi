////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.getStatement = (req, res) => {
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
};

exports.getStatementByDate = (req, res) => {
  const { customer } = req;
  const { date } = req.query;

  const dateFormat = new Date(date + '00:00');

  const statement = customer.statement
    .filter(statement => statement.create_at.toDateString() === new Date(dateFormat))
    .toDateString();

  return res.status(200).json({
    status: 'success',
    data: {
      name: customer.name,
      statement: statement
    }
  });
};
