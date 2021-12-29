const router = require('express').Router();
const accountController = require('../controller/accountController');

router.route('/').post(accountController.createAccount);

router
  .route('/:id')
  .get(accountController.getAccount)
  .put(accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = router;
