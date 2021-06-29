const router = require('express').Router();

const invParticipationController = require('../controllers/invParticipationController');

router.get('/', invParticipationController.list);
router.post('/add', invParticipationController.save);
router.get('/update/:id_partIS', invParticipationController.edit);
router.post('/update/:id_partIS', invParticipationController.update);
router.get('/delete/:id_partIS', invParticipationController.delete);
router.get('/cancel', invParticipationController.cancel);

module.exports = router;

