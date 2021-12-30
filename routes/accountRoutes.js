const router = require('express').Router();
const accountController = require('../controller/accountController');
const testCPF = require('../middleware/testCPF');

router.route('/').get(accountController.getAllAccounts).post(testCPF.testCPF, accountController.createAccount);

router
  .route('/:id')
  .get(accountController.getAccount)
  .put(accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = router;
