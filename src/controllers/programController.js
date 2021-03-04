const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM program', (err, programs) => {
     if (err) {
      res.json(err);
     }
     res.render('program', {
        data: programs
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  //console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO program set ?', data, (err, programs) => {
      //console.log(programs)
      res.redirect('/');
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
    res.redirect('/');
    }
  });
  });
};

controller.delete = (req, res) => {
  const { id_program } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM program WHERE id_program = ?', [id_program], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
