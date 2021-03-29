const router = require('express').Router();

const signinController = require('../controllers/signinController');

router.get('/', signinController.show);
router.post('/auth',signinController.auth);
router.get('/dashboard',signinController.home);
router.get('/logout',signinController.die);

module.exports = router;