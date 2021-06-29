const controller = {};

controller.list = (req, res) => {
  let info = {};
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM invsoc_participation', (err, invParticipations) => {
     if (err) {
      res.json(err);
     }else{
     info.data = invParticipations
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
       }
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM consultor', (err, consultor) =>{
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
        conn.query('SELECT * FROM program', (err, programs) =>{
          if (err) {
            res.json(err);
           }else{
           info.programs = programs;
           info.data.forEach((p) => {
             p.program_name = p.id_program != undefined ? programs[p.id_program -1].program_name : null;
           });
           res.render('invParticipation', {data : info});
           }
        });
        
      });
}

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO invsoc_participation set ?', data, (err, participations) => {
      if(err){
        console.log(err);
        res.json(err);
      }else{
      console.log(participations)
      res.redirect('/invParticipation');
      }
    });
  })
};

controller.edit = (req, res) => {
  const { id_partIS } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM invsoc_participation WHERE id_part = ?", id_part, (err, rows) => {
      res.render('invParticipation_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_partIS } = req.params;
  const newParticipation = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE invsoc_participation set ? where id_part = ?', [newParticipation, id_partIS], (err, rows) => {
    if(err){
      console.log(err);
    }else{
    res.redirect('/invParticipation');
    }
  });
  });
};

controller.cancel = (res) => {
  res.redirect('/');
}

controller.delete = (req, res) => {
  const { id_partIS } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM invsoc_participation WHERE id_part = ?', [id_partIS] , (err, rows) => {
      console.log(rows);
      res.redirect('/invParticipation');
    });
  });
}

module.exports = controller;
