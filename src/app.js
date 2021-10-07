const express = require('express'),
      session =require('express-session'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      passport = require('passport'),
      flash = require('connect-flash'),
      myConnection = require('express-myconnection');

      const { Strategy } = require('passport-local');
      const cookieParser = require('cookie-parser');
      require('./controllers/passport')(passport);
      
const app = express();

// settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))

app.use(myConnection(mysql, {
  host: '',
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

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// importing routes
require('./routes/signin')(app, passport);
const dashboardRoutes = require('./routes/dashboard');
const programRoutes = require('./routes/program');
const organizationRoutes = require('./routes/organization');
const contactRoutes = require('./routes/contact');
const admonRoutes= require('./routes/admon');
const participationRoutes = require('./routes/participation');
const invParticipationRoutes = require('./routes/invParticipation');
const consultorRoutes = require('./routes/consultor');


// routes

app.use('/dashboard', dashboardRoutes);
app.use('/program', programRoutes);
app.use('/organization', organizationRoutes);
app.use('/contact', contactRoutes);
app.use('/admon', admonRoutes);
app.use('/participation', participationRoutes);
app.use('/invParticipation', invParticipationRoutes);
app.use('/consultor', consultorRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
