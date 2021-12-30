const router = require('express').Router();
const withdrawController = require('../controller/withdrawController');
const addStatement = require('../middleware/addStatement');

router.route('/:id').patch(addStatement.addStatement, withdrawController.createWithdrawal);

module.exports = router;
