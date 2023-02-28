const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');




//initialiations
const app = express();

//settings (configuracion)

app.set('port' , process.env.PORT || 3050); 
app.set('views' , path.join(__dirname,  'views') ); 
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'Partials'),
    extname: '.hbs',

}));

app.set('view engine', '.hbs');


//Middlewares 
app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.set('json spaces', 1);

app.use(session ({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}));
app.use(flash());






//Global variables

app.use((req, res, next)=>
{
    res.locals.error_msg = req.flash('error_msg');
    next();
});

//Routas
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));



//static files

app.use(express.static(path.join(__dirname,  'public')));



module.exports = app; 


