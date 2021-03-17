const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const dashboardRoutes = require('./routes/dashboard');
const programRoutes = require('./routes/program');
const organizationRoutes = require('./routes/organization');
const contactRoutes = require('./routes/contact');
const admonRoutes= require('./routes/admon');
const participationRoutes = require('./routes/participation');

// settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'merced',
  password: '123456',
  port: 3306,
  database: 'Merced_DB'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/dashboard', dashboardRoutes);
app.use('/program', programRoutes);
app.use('/organization', organizationRoutes);
app.use('/contact', contactRoutes);
app.use('/admon', admonRoutes);
app.use('/participation', participationRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
