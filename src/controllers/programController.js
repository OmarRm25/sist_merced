const controller = {};

controller.list = (req, res) => {
  const email = req.session.email;

  if (req.session.loggedin) {
    let info = {};
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM program', (err, programs) => {
       if (err) {
        res.json(err);
       }else{
       info.data = programs
       info.email = email
      }
      });
    });
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM organization', (err, allies) =>{
        if (err) {
          res.json(err);
         }else{
         info.allies = allies;
         info.data.forEach((p) => {
           p.org_name = p.id_organization != undefined ? allies[p.id_organization -1].org_name : null;
         });
         res.render('program', {data : info});
         }
      });
      
    })  } else {
    res.redirect("/");
  }
}; 

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO program set ?', data, (err, programs) => {
      if(err){
        res.json(err);
      }else{
      res.redirect('/program');
      }
    });
  })
};

controller.edit = (req, res) => {
  const { id_program } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM program WHERE id_program = ?", id_program, (err, rows) => {
      res.render('program_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_program } = req.params;
  const newProgram = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE program set ? where id_program = ?', [newProgram, id_program], (err, rows) => {
    if(err){
      res.send("<script>alert('Error en la actualización o Clave de programa duplicada'); window.location.href = '/program'; </script>");

    }else{
    res.redirect('/program');
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
    const { id_program } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM program WHERE id_program = ?', [id_program] , (err, rows) => {
      res.redirect('/program');
    });
  })
  } else{
    res.send("<script>alert('No cuenta con permiso para eliminar este registro'); window.location.href = '/program'; </script>");
  } 
}

module.exports = controller;
