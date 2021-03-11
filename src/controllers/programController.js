const controller = {};

controller.list = (req, res) => {
  let info = {};
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM program', (err, programs) => {
     if (err) {
      res.json(err);
     }else{
     info.data = programs
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
    
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO program set ?', data, (err, programs) => {
      if(err){
        console.log(err);
        res.json(err);
      }else{
      console.log(programs)
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
      console.log(err);
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
  const { id_program } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM program WHERE id_program = ?', [id_program] , (err, rows) => {
      console.log(rows);
      res.redirect('/program');
    });
  });
}

module.exports = controller;
