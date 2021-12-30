const router = require('express').Router();
const depositController = require('../controller/depositController');
const addStatement = require('../middleware/addStatement');

router.route('/:id').patch(addStatement.addStatement, depositController.createDeposit);

module.exports = router;
