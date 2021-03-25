const controller = {};

controller.list = (req, res) => {
  let info = {};
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM program_organization', (err, participations) => {
     if (err) {
      res.json(err);
     }else{
     info.data = participations
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
       }
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM consultor ORDER BY full_name ASC', (err, consultor) =>{
      if (err) {
        res.json(err);
       }else{
       info.consultor = consultor;
       info.data.forEach((p) => {
         p.full_name = p.id_consultor != undefined ? consultor[p.id_consultor -1].full_name : null;
       });
       }
    });
  });
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM program ORDER BY program_name ASC', (err, programs) =>{
          if (err) {
            res.json(err);
           }else{
           info.programs = programs;
           info.data.forEach((p) => {
             p.program_name = p.id_program != undefined ? programs[p.id_program -1].program_name : null;
           });
           res.render('participation', {data : info});
           }
        });
        
      });
}

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO program_organization set ?', data, (err, participations) => {
      if(err){
        console.log(err);
        res.json(err);
      }else{
      console.log(participations)
      res.redirect('/participation');
      }
    });
  })
};

controller.edit = (req, res) => {
  const { id_part } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM program_organization WHERE id_part = ?", id_part, (err, rows) => {
      res.render('participation_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_part } = req.params;
  const newParticipation = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE program_organization set ? where id_part = ?', [newParticipation, id_part], (err, rows) => {
    if(err){
      console.log(err);
    }else{
    res.redirect('/participation');
    }
  });
  });
};

controller.cancel = (res) => {
  res.redirect('/');
}

controller.delete = (req, res) => {
  const { id_part } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM program_organization WHERE id_part = ?', [id_part] , (err, rows) => {
      console.log(rows);
      res.redirect('/participation');
    });
  });
}

module.exports = controller;
