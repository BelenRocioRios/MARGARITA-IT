const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


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
app.use(express.urlencoded({extended:false}));




//Global variables

//Routas
app.use(require('./routes/index.routes'));

//static files

app.use(express.static(path.join(__dirname,  'public')));



module.exports = app; 


//ME FALTA RESOLVER RUTAS EN Y AGREGAR LAS VISTAS, ARMAR BASE DE DATOS EN FORMULAIRO Y LOGIN