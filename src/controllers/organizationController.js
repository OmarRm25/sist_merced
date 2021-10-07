const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM organization', (err, organizations) => {
       if (err) {
        res.send("<script>alert('No es posible cargar la información por el momento, favor de verificar su conexión'); window.location.href = '/organization'; </script>");       }
       res.render('organization', {
          data: organizations
       });
      });
    });
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
    const { id_organization } = req.params;
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM organization WHERE id_organization = ?', id_organization, (err, rows) => {
        if (err){
          res.send("<script>alert('No fue posible eliminar el registro, favor de intentar de nuevo'); window.location.href = '/organization'; </script>");
        }else{
        console.log(rows);
        res.redirect('/organization');
        }
      });
    });
  }
  
  module.exports = controller;