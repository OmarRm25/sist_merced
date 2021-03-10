const router = require('express').Router();

const organizationController = require('../controllers/organizationController');

router.get('/', organizationController.list);
router.post('/add', organizationController.save);
router.get('/update/:id_organization', organizationController.edit);
router.post('/update/:id_organization', organizationController.update);
router.get('/delete/:id_organization', organizationController.delete);
router.get('/cancel', organizationController.cancel);

module.exports = router;