const Account = require('../models/accountModel');

////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.getStatement = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    const statement = await account.statement;

    return res.status(200).json({
      status: 'success',
      data: {
        statement: statement
      }
    });
  } catch (error) {
    return res.status(404).json({
      status: 'fail',
      message: `🚫 ERROR: ${error}`
    });
  }
};
