const controller = {};

controller.list = (req, res) => {
  let info = {};
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM admon_file', (err, admFiles) => {
     if (err) {
      res.json(err);
     }else{
     info.data = admFiles
    }
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM organization', (err, orgs) =>{
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
    
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO admon_file set ?', data, (err, programs) => {
      if(err){
        console.log(err);
        res.json(err);
      }else{
      console.log(programs)
      res.redirect('/admon');
      }
    });
  })
};

controller.edit = (req, res) => {
  const { id_admon } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM admon_file WHERE id_admon = ?", id_admon, (err, rows) => {
      res.render('admon_edit', {
        data: rows[0]
      })
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
  const { id_admon } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM admon_file WHERE id_admon = ?', [id_admon] , (err, rows) => {
      console.log(rows);
      res.redirect('/admon');
    });
  });
}

module.exports = controller;
