const router = require('express').Router();

const consultorController = require('../controllers/consultorController');

router.get('/', consultorController.list);
router.post('/add', consultorController.save);
router.get('/update/:id_consultor', consultorController.edit);
router.post('/update/:id_consultor', consultorController.update);
router.get('/delete/:id_consultor', consultorController.delete);
router.get('/cancel', consultorController.cancel);

module.exports = router;