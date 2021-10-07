/*const router = require('express').Router();

const signinController = require('../controllers/signinController');

router.get('/', signinController.show);
router.post('/auth',signinController.auth);
router.get('/dashboard',signinController.home);
router.get('/logout',signinController.die);

module.exports = router;*/

const { isLoggedIn } = require('../controllers/auth');

module.exports = function(app, passport) {

	//global variables
app.use((req, res, next) => {
	app.locals.loginMessage = req.flash('loginMessage');
	next();
  })

	/*app.get('/', function(req, res) {
		res.render('signin.ejs'); // load the index.ejs file
		console.log("estoy en el login");
	});*/

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signin.ejs', { 
			loginMessage: req.flash('loginMessage') 
		});
        console.log("login con flash message");
		
	});

	// process the login form
	app.post('/signin', passport.authenticate('local-login', {
        
            successRedirect : '/dashboard', // redirect to the secure profile section
            failureRedirect : '/signin', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            console.log("passport funciona");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

	// =====================================
	// ACCESS VALIDATION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/dashboard', isLoggedIn, function(req, res) {
		res.render('dashboard.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

