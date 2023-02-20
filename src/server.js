const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');



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
app.use(express.urlencoded({extended:false}));




//Global variables

//Routas
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));



//static files

app.use(express.static(path.join(__dirname,  'public')));



module.exports = app; 


