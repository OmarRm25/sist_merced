const router = require('express').Router();

const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.start);
router.post('/program', dashboardController.program);

module.exports = router;