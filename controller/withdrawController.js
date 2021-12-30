const Account = require('../models/accountModel');

////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.createWithdrawal = async (req, res) => {
  try {
    const { withdrawal } = await req.body;
    const account = await Account.findById(req.params.id);
    const newAmount = await (account.amount - withdrawal);

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
      message: `🚫 Account with ID ${req.params.id} not found`
    });
  }
};
