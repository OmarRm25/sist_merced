const router = require('express').Router();

const admonController = require('../controllers/admonController');

router.get('/', admonController.list);
router.post('/add', admonController.save);
router.get('/update/:id_admon', admonController.edit);
router.post('/update/:id_admon', admonController.update);
router.get('/delete/:id_admon', admonController.delete);
router.get('/cancel', admonController.cancel);

module.exports = router;