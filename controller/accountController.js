const Account = require('../models/accountModel');

////////////////////////////////////////////////////
/// ROUTES HANDLERS:

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);

    return res.status(201).json({
      status: 'success',
      data: {
        newAccount: newAccount
      }
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: `🚫 Bad request`
    });
  }
};

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();

    return res.status(200).json({
      status: 'success',
      results: accounts.length,
      data: {
        accounts: accounts
      }
    });
  } catch (error) {
    return res.status(404).json({
      status: 'fail',
      message: `🚫 Accounts not found`
    });
  }
};

exports.getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);

    return res.status(200).json({
      status: 'success',
      data: {
        account: account
      }
    });
  } catch (error) {
    return res.status(404).json({
      status: 'fail',
      message: `🚫 Account with ID ${req.params.id} not found`
    });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const modifiedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    return res.status(200).json({
      status: 'success',
      data: {
        modifiedAccount: modifiedAccount
      }
    });
  } catch (error) {
    return res.status(404).json({
      status: 'fail',
      message: `🚫 Account with ID ${req.params.id} not found`
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);

    return res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    return res.status(404).json({
      status: 'fail',
      message: `🚫 Account with ID ${req.params.id} not found`
    });
  }
};
