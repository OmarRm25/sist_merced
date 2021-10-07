const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM consultor', (err, consultors) => {
       if (err) {
        res.json(err);
       }
       res.render('consultor', {
          data: consultors
       });
      });
    });
  };
  
  controller.save = (req, res) => {
    const data = req.body;
    
    if(typeof data.prof_speciality != "string"){
      data.prof_speciality = `|${data.prof_speciality.join(",")}|`;
      }

    req.getConnection((err, conn) => {
      conn.query('INSERT INTO consultor set ?', data, (err, consultors) => {
        if(err){
            console.log(err);
            res.send("<script>alert('Error en el registro o RFC duplicado'); window.location.href = '/consultor'; </script>");
            
        }else{    
        console.log(consultors)
        res.redirect('/consultor');
        }
      });
    })
  };
  
  controller.edit = (req, res) => {
    const { id_consultor } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM consultor WHERE id_consultor = ?", id_consultor , (err, rows) => {
        res.render('consultor_edit', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { id_consultor } = req.params;
    const newConsultor = req.body;

    if(typeof newConsultor.prof_speciality != "string"){
      newConsultor.prof_speciality = `|${newConsultor.prof_speciality.join(",")}|`;
      }

    req.getConnection((err, conn) => {
  
    conn.query('UPDATE consultor set ? where id_consultor = ?', [newConsultor, id_consultor], (err, rows) => {
      if(err){
        console.log(err);
        res.send("<script>alert('Error en la actualización o RFC duplicado'); window.location.href = '/consultor'; </script>");
        
    }else{  
      res.redirect('/consultor');
    }

    })
    })
  };

  controller.cancel = (res) => {
    res.redirect('/');
  }
  
  controller.delete = (req, res) => {
    const { id_consultor } = req.params;
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM consultor WHERE id_consultor = ?', id_consultor, (err, rows) => {
        if (err){
            res.json(err);
        }else{
        console.log(rows);
        res.redirect('/consultor');
        }
      });
    });
  }
  
  module.exports = controller;