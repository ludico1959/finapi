const router = require('express').Router();
const statementController = require('../controller/statementController');

router.route('/:id').get(statementController.getStatement);

router.route('/:id/date').get(statementController.getStatementByDate);

module.exports = router;
