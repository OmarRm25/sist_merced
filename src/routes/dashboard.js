const router = require('express').Router();

const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.home);
router.get('/program', dashboardController.program);

module.exports = router;