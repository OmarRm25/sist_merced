const controller = {};

//render login window in root directory
controller.show = (req, res) => {
  res.render("signin");
};


//Credentials transaction and validation
controller.auth = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  console.log(email);

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * from employee WHERE email = ? && password = ?",
      [email, password],
      (err, results) => {
        console.log(err);
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.email = email;
          res.redirect("/dashboard/init");
        } else {
            res.render("signin_error");
        }
      }
    );
  });
};

//redirect to dashboard after authentication
controller.home = (req, res) => {
  if (req.session.loggedin) {
    res.redirect("/dashboard/init");
  } else {
    res.redirect("/");
  }
};

//session killer
controller.die = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });
  };

module.exports = controller;
