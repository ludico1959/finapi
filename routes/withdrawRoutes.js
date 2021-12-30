const router = require('express').Router();
const withdrawController = require('../controller/withdrawController');
const statementController = require('../controller/statementController');

router.route('/:id').patch(statementController.addStatement, withdrawController.createWithdrawal);

module.exports = router;
