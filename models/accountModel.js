const mongoose = require('mongoose');

////////////////////////////////////////////////////
/// SCHEMA:

const accountSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  cpf: {
    type: String,
    trim: true,
    required: true
  },
  statement: [String]
});

////////////////////////////////////////////////////
/// MODEL:

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
