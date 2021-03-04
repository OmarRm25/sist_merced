const router = require('express').Router();

const programController = require('../controllers/programController');

router.get('/', programController.list);
router.post('/add', programController.save);
router.get('/update/:id_program', programController.edit);
router.post('/update/:id_program', programController.update);
router.get('/delete/:id_program', programController.delete);

module.exports = router;

