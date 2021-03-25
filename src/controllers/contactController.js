const controller = {};

controller.list = (req, res) => {
  let info = {};
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM contact', (err, contacts) => {
     if (err) {
      res.json(err);
     }else{
     info.data = contacts
    }
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM organization ORDER BY org_name ASC', (err, orgs) =>{
      if (err) {
        res.json(err);
       }else{
       info.orgs = orgs;
       info.data.forEach((p) => {
         p.org_name = p.id_organization != undefined ? orgs[p.id_organization -1].org_name : null;
       });
       res.render('contact', {data : info});
       }
    });
    

  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO contact set ?', data, (err, contacts) => {
      if(err){
        console.log(err);
        res.json(err);
      }else{
      console.log(contacts)
      res.redirect('/contact');
      }
    });
  })
};

controller.edit = (req, res) => {
  const { id_contact } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM contact WHERE id_contact = ?", id_contact, (err, rows) => {
      res.render('contact_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_contact } = req.params;
  const newContact = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE contact set ? where id_contact = ?', [newContact, id_contact], (err, rows) => {
    if(err){
      console.log(err);
      res.json(err);
    }else{
    res.redirect('/contact');
    }
  });
  });
};

controller.cancel = (res) => {
  res.redirect('/');
}

controller.delete = (req, res) => {
  const { id_contact } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM contact WHERE id_contact = ?', id_contact, (err, rows) => {
      console.log(rows);
      res.redirect('/contact');
    });
  });
}

module.exports = controller;