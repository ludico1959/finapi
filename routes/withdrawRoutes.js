const router = require('express').Router();
const withdrawController = require('../controller/withdrawController');

router.route('/:id').patch(withdrawController.createWithdrawal);

module.exports = router;
