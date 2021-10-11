const controller = {};

controller.list = (req, res) => {
  const email = req.session.email;
    if (req.session.loggedin) {
      req.getConnection((err, conn) => {
        conn.query('SELECT * FROM organization', (err, organizations) => {
         if (err) {
          res.send("<script>alert('No es posible cargar la información por el momento, favor de verificar su conexión'); window.location.href = '/organization'; </script>");       
        }
         res.render('organization', {
            data: organizations,
            email
         });
        });
      })
    } else {
      res.redirect("/");
    }
  };
  
  controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, conn) => {
      conn.query('INSERT INTO organization set ?', data, (err, organizations) => {

       if(err){
            console.log(err);
            res.send("<script>alert('Error en el registro o RFC duplicado'); window.location.href = '/organization'; </script>");

        }else{    
        console.log(organizations)
        res.redirect('/organization');
        }
      });
    })
  };
  
  controller.edit = (req, res) => {
    const { id_organization } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM organization WHERE id_organization = ?", id_organization , (err, rows) => {
        res.render('organization_edit', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { id_organization } = req.params;
    const newOrganization = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE organization set ? where id_organization = ?', [newOrganization, id_organization], (err, rows) => {
      if(err){
        console.log(err);
        res.send("<script>alert('Error en la actualización o RFC duplicado'); window.location.href = '/organization'; </script>");
        
    }else{  
      res.redirect('/organization');
    }

    })
    })
  };

  controller.cancel = (res) => {
    res.redirect('/');
  }
  
  controller.delete = (req, res) => {
    email = req.session.email;

    if(email == 'v.cardin@fundacionmerced.org.mx'){
      const { id_organization } = req.params;
      req.getConnection((err, conn) => {
        conn.query('DELETE FROM organization WHERE id_organization = ?', id_organization, (err, rows) => {
          console.log(rows);
          res.redirect('/organization'); 
        });
      })
    }else{
      res.send("<script>alert('No cuenta con permiso para eliminar este registro'); window.location.href = '/organization'; </script>");
    }
    
  }
  
  module.exports = controller;