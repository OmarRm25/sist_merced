const router = require('express').Router();

const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.home);
router.get('/program', dashboardController.program);
router.get('/organization', dashboardController.organization);
router.get('/contact', dashboardController.contact);

module.exports = router;