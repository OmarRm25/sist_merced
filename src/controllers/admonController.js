const controller = {};

controller.list = (req, res) => {
  const email = req.session.email;
  if (req.session.loggedin) {
    let info = {};
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM admon_file', (err, admFiles) => {
     if (err) {
      res.json(err);
     }else{
     info.data = admFiles
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
       res.render('admon', {data : info});
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
    conn.query('INSERT INTO admon_file set ?', data, (err, programs) => {
      if(err){
        res.json(err);
      }else{
      res.redirect('/admon');
      }
    });
  })
};

controller.edit = (req, res) => {
  const { id_admon } = req.params;
  let info = {};
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM admon_file WHERE id_admon = ?", id_admon, (err, rows) => {
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
       res.render('admon_edit', {data: info});
    }
  });
});
};

controller.update = (req, res) => {
  const { id_admon } = req.params;
  const newFile = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE admon_file set ? where id_admon = ?', [newFile, id_admon], (err, rows) => {
    if(err){
      console.log(err);
    }else{
    res.redirect('/admon');
    }
  });
  });
};

controller.cancel = (res) => {
  res.redirect('/');
}

controller.delete = (req, res) => {
  email = req.session.email;

  if(email == 'v.cardin@fundacionmerced.org.mx'){
    const { id_admon } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM admon_file WHERE id_admon = ?', [id_admon] , (err, rows) => {
      res.redirect('/admon');
    });
  })
  }else{
    res.send("<script>alert('No cuenta con permiso para eliminar este registro'); window.location.href = '/admon'; </script>");

  }

}

module.exports = controller;
