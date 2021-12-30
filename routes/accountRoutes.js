const router = require('express').Router();
const accountController = require('../controller/accountController');

router.route('/').get(accountController.getAllAccounts).post(accountController.createAccount);

router
  .route('/:id')
  .get(accountController.getAccount)
  .put(accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = router;
