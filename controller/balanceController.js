const Account = require('../models/accountModel');

////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.getBalance = async (req, res) => {
  try {
    const account = await Account.findOne({ cpf: req.headers.cpf });

    return res.status(200).json({
      status: 'success',
      data: {
        balance: account.amount
      }
    });
  } catch {
    return res.status(404).json({
      status: 'fail',
      message: `🚫 ERROR: ${error}`
    });
  }
};
