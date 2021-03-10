const router = require('express').Router();

const contactController = require('../controllers/contactController');

router.get('/', contactController.list);
router.post('/add', contactController.save);
router.get('/update/:id_contact', contactController.edit);
router.post('/update/:id_contact', contactController.update);
router.get('/delete/:id_contact', contactController.delete);
router.get('/cancel', contactController.cancel);

module.exports = router;