const router = require('express').Router();
const depositController = require('../controller/depositController');

router.route('/:id').patch(depositController.createDeposit);

module.exports = router;
