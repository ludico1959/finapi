const router = require('express').Router();
const depositController = require('../controller/depositController');

router.route('/:id').post(depositController.createDeposit);

module.exports = router;
