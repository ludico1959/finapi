////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.getBalance = (req, res) => {
  function getBalance(statement) {
    const balance = statement.reduce((acc, operation) => {
      if (operation.type === 'credit') {
        return acc + operation.amount;
      } else {
        return acc - operation.amount;
      }
    }, 0); // valor inicial do reduce.

    return balance;
  }

  const { customer } = req;

  const balance = getBalance(customer.statement);

  return res.status(200).json({
    status: 'sucess',
    data: {
      balance: balance
    }
  });
};
