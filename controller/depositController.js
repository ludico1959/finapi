const Account = require('../models/accountModel');

////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.createDeposit = async (req, res) => {
  try {
    const { deposit } = await req.body;
    const account = await Account.findById(req.params.id);
    const newAmount = await (account.amount + deposit);

    const updatedAccount = await Account.findByIdAndUpdate(
      req.params.id,
      { amount: newAmount },
      {
        new: true,
        runValidators: true
      }
    );

    return res.status(200).json({
      status: 'success',
      data: {
        updatedAccount: updatedAccount
      }
    });
  } catch (error) {
    return res.status(404).json({
      status: 'fail',
      message: `🚫 ERROR: ${error}`
    });
  }
};
