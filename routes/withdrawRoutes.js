const router = require('express').Router();
const withdrawController = require('../controller/withdrawController');

router.route('/:id').post(withdrawController.createWithdraw);

module.exports = router;
