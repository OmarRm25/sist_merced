const controller = {};

controller.list = (req, res) => {
  const email = req.session.email;
  if (req.session.loggedin) {
    let info = {};
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM invsoc_participation', (err, invParticipations) => {
     if (err) {
      res.json(err);
     }else{
     info.data = invParticipations
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
       }
    });
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT id_consultor, full_name FROM consultor', (err, consultor) =>{
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
        
      })
  } else {
    res.redirect("/");
  }
}; 

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
    conn.query('SELECT * FROM program', (err, programs) =>{
      if (err) {
        res.json(err);
       }else{
       info.programs = programs;
       info.program_code = info.id_program != undefined ? programs[info.id_program -1].program_code : null;
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
  var email = req.session.email;

  if(email == 'v.cardin@fundacionmerced.org.mx'){
    const { id_partIS } = req.params;
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM invsoc_participation WHERE id_partIS = ?', [id_partIS] , (err, rows) => {
        res.redirect('/invParticipation');
      });
    })
  }else {
    res.send("<script>alert('No cuenta con permiso para eliminar este registro'); window.location.href = '/invParticipation'; </script>");
  }

 
}

module.exports = controller;
