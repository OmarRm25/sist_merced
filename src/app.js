const express = require('express'),
      session =require('express-session'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const signinRoutes = require('./routes/signin');
const dashboardRoutes = require('./routes/dashboard');
const programRoutes = require('./routes/program');
const organizationRoutes = require('./routes/organization');
const contactRoutes = require('./routes/contact');
const admonRoutes= require('./routes/admon');
const participationRoutes = require('./routes/participation');
const consultorRoutes = require('./routes/consultor');

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
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', signinRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/program', programRoutes);
app.use('/organization', organizationRoutes);
app.use('/contact', contactRoutes);
app.use('/admon', admonRoutes);
app.use('/participation', participationRoutes);
app.use('/consultor', consultorRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
