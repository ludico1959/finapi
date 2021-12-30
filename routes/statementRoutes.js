const router = require('express').Router();
const statementController = require('../controller/statementController');

router.route('/:id').get(statementController.getStatement);

module.exports = router;
