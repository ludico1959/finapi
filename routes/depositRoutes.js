const router = require('express').Router();
const depositController = require('../controller/depositController');
const statementController = require('../controller/statementController');

router.route('/:id').patch(statementController.addStatement, depositController.createDeposit);

module.exports = router;
