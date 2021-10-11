const controller = {};

controller.home = (req, res) => {
    if (req.session.loggedin) {
        res.render('dashboard');
        } else {
      res.redirect("/");
    }
  }; 

controller.program = (req, res) => {
    res.redirect('/program');
}

controller.organization = (req, res) => {
    res.redirect('/organization');
}

controller.contact = (req, res) => {
    res.redirect('/contact');
}

controller.admon = (req, res) => {
    res.redirect('/admon');
}

module.exports = controller;