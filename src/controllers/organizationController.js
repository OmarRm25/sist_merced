const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM organization', (err, organizations) => {
       if (err) {
        res.json(err);
       }
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
            res.json(err);
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
      res.redirect('/organization');
    });
    });
  };

  controller.cancel = (res) => {
    res.redirect('/');
  }
  
  controller.delete = (req, res) => {
    const { id_organization } = req.params;
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM organization WHERE id_organization = ?', id_organization, (err, rows) => {
        if (err){
            res.json(err);
        }else{
        console.log(rows);
        res.redirect('/organization');
        }
      });
    });
  }
  
  module.exports = controller;