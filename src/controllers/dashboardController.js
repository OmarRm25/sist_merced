const controller = {};

controller.home = (req, res) =>{
 res.render('dashboard');
}

controller.program = (req, res) => {
    res.redirect('/program');
}

controller.organization = (req, res) => {
    res.redirect('/organization');
}

controller.contact = (req, res) => {
    res.redirect('/contact');
}

module.exports = controller;