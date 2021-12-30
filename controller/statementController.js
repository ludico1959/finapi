const Account = require('../models/accountModel');

////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.addStatement = async (req, res, next) => {
  try {
    const account = await Account.findById(req.params.id);
    const statement = await account.statement;
    const date = new Date();

    if (req.body.deposit) {
      statement.push({
        operation: 'deposit',
        date: date
      });
    }

    if (req.body.withdrawal) {
      statement.push({
        operation: 'withdrawal',
        date: date
      });
    }

    await Account.findByIdAndUpdate(
      req.params.id,
      { statement: statement },
      {
        new: true,
        runValidators: true
      }
    );
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `🚫 ERROR: ${error}`
    });
  }

  next();
};

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
