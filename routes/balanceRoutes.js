const router = require('express').Router();
const balanceController = require('../controller/balanceController');

router.route('/').get(balanceController.getBalance);

module.exports = router;
