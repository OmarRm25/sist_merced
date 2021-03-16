const router = require('express').Router();

const participationController = require('../controllers/participationController');

router.get('/', participationController.list);
router.post('/add', participationController.save);
router.get('/update/:id_organization', participationController.edit);
router.post('/update/:id_organization', participationController.update);
router.get('/delete/:id_organization', participationController.delete);
router.get('/cancel', participationController.cancel);

module.exports = router;

