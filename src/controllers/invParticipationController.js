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
             p.program_code = p.id_program != undefined ? programs[p.id_program -1].program_code : null;
           });
           res.render('invParticipation', {data : info});
           }
        });
        
      });
}

controller.save = (req, res) => {
  const data = req.body;

  if(typeof data.population_type != "string"){
  data.population_type = `|${data.population_type.join(",")}|`;
  }

  if(typeof data.application_state != "string"){
  data.application_state = `|${data.application_state.join(",")}|`;
  }

  if(typeof data.fort_theme != "string"){
  data.fort_theme = `|${data.fort_theme.join(",")}|`;  
  }

  console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO invsoc_participation set ?', data, (err, participations) => {
      if(err){
        res.json(err);
      }else{
        res.redirect('/invParticipation');
      }
    });
  })
};

controller.edit = (req, res) => {
  const { id_partIS } = req.params;
  let info = {};
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM invsoc_participation WHERE id_partIS = ?", id_partIS, (err, rows) => {
      info = rows[0];
      console.log(rows);
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM organization', (err, orgs) =>{
      if (err) {
        res.json(err);
       }else{
       info.orgs = orgs;
       info.org_name = info.id_organization != undefined ? orgs[info.id_organization -1].org_name : null;
       }
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM consultor', (err, consultor) =>{
      if (err) {
        res.json(err);
       }else{
       info.consultor = consultor;
       info.full_name = info.id_consultor != undefined ? consultor[info.id_consultor -1].full_name : null;
       res.render('invParticipation_edit', {data:info});
       }
    });
  }); 
};

controller.update = (req, res) => {
  const { id_partIS } = req.params;
  const newParticipation = req.body;

  if(typeof newParticipation.population_type != "string"){
  newParticipation.population_type = `|${newParticipation.population_type.join(",")}|`;
  }

  if(typeof newParticipation.application_state != "string"){
  newParticipation.application_state = `|${newParticipation.application_state.join(",")}|`;
  }

  if(typeof newParticipation.fort_theme != "string"){
  newParticipation.fort_theme = `|${newParticipation.fort_theme.join(",")}|`;
  }

  req.getConnection((err, conn) => {

  conn.query('UPDATE invsoc_participation set ? where id_partIS = ?', [newParticipation, id_partIS], (err, rows) => {
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
    conn.query('DELETE FROM invsoc_participation WHERE id_partIS = ?', [id_partIS] , (err, rows) => {
      console.log(rows);
      res.redirect('/invParticipation');
    });
  });
}

module.exports = controller;
