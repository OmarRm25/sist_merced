const controller = {};

controller.list = (req, res) => {
  if (req.session.loggedin) {
    let info = {};
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM fort_participation', (err, participations) => {
       if (err) {
        res.json(err);
       }else{
       info.data = participations
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
             res.render('participation', {data : info});
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
  data.population_type = `|${data.population_type.join()}|`;
  }

  if(typeof data.application_state != "string"){
  data.application_state = `|${data.application_state.join()}|`;
  } 

  console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO fort_participation set ?', data, (err, participations) => {
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
  let info = {};
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM fort_participation WHERE id_part = ?", id_part, (err, rows) => {
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
       res.render('participation_edit', {data:info});
       }
    });
  }); 
};

controller.update = (req, res) => {
  const { id_part } = req.params;
  const newParticipation = req.body;

  if(typeof newParticipation.population_type != "string"){
  newParticipation.population_type = `|${newParticipation.population_type.join(",")}|`;
  }
  if(typeof newParticipation.application_state != "string"){
  newParticipation.application_state = `|${newParticipation.application_state.join(",")}|`;
  }

  req.getConnection((err, conn) => {

  conn.query('UPDATE fort_participation set ? where id_part = ?', [newParticipation, id_part], (err, rows) => {
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
  var email = req.session.email;
  if(email == 'v.cardin@fundacionmerced.org.mx'){
    const { id_part } = req.params;
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM fort_participation WHERE id_part = ?', [id_part] , (err, rows) => {
        console.log(rows);
        res.redirect('/participation');
      });
    })
  }else{
    res.send("<script>alert('No cuenta con permiso para eliminar este registro'); window.location.href = '/participation'; </script>");
  }
}

module.exports = controller;
