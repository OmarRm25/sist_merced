const controller = {};

controller.list = (req, res) => {
  const email = req.session.email;
  if (req.session.loggedin) {
    let info = {};
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM contact', (err, contacts) => {
     if (err) {
      res.json(err);
     }else{
     info.data = contacts
     info.email = email
    }
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT id_organization, org_name FROM organization', (err, orgs) =>{
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
  })
  } else {
    res.redirect("/");
  }
}; 


controller.save = (req, res) => {
  const data = req.body;
  
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO contact set ?', data, (err, contacts) => {
      if(err){
        res.json(err);
      }else{
      res.redirect('/contact');
      }
    });
  })
};

controller.edit = (req, res) => {
  const { id_contact } = req.params;
  let info = {};
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM contact WHERE id_contact = ?", id_contact, (err, rows) => {
      info = rows [0];
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM organization', (err, orgs) =>{
      if (err) {
        res.json(err);
       }else{
       info.orgs = orgs;
       info.org_name = info.id_organization != undefined ? orgs[info.id_organization -1].org_name : null;
       res.render('contact_edit', {data:info});
       } 
      });
  });
};

controller.update = (req, res) => {
  const { id_contact } = req.params;
  const newContact = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE contact set ? where id_contact = ?', [newContact, id_contact], (err, rows) => {
    if(err){
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
    var email = req.session.email;

    if(email == 'vcardin@fundacionmerced.org.mx'){

  const { id_contact } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM contact WHERE id_contact = ?', id_contact, (err, rows) => {
      res.redirect('/contact');
    });
  })
}else{
  res.send("<script>alert('No cuenta con permiso para eliminar este registro'); window.location.href = '/contact'; </script>");
}
}

module.exports = controller;