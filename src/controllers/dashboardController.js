const controller = {};

controller.home = (req, res) =>{
 res.render('dashboard');
}

controller.program = (req, res) => {
    res.redirect('/program');
}

module.exports = controller;