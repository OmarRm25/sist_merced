const controller = {};

controller.show = (req, res) => {
    res.render('signin');
}

controller.auth = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

    if(email && password){
        req.getConnection((err, conn)=> {
            conn.query('SELECT * from employee WHERE email = ? && password = ?'),
        [email,password], 
        function(err, results,fields){
            if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/dashboard');
                
        }else{
            res.send('Contraseña y/o correo incorrectos');
        }
        res.end();
    }
        });   
    }else {
    res.send('Por favor ingrese su correo y contraseña');
    res.end();
      }
}

controller.home = (req, res) => {
    if(req.session.loggedin){
        res.redirect('/dashboard');
    }else{
        res.send('Por favor inicia sesión para ver esta página');
    }
    res.end();
}


module.exports = controller;