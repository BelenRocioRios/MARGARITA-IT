
const mongoose = require('mongoose');

const { MARGARITABACK_HOST , MARGARITABACK_DATABASE } = process.env;

const MONGODB_URL = `mongodb://${MARGARITABACK_HOST}/${MARGARITABACK_DATABASE}`;

mongoose.set('strictQuery', true);
mongoose.set('strictQuery', false);



mongoose.connect(MONGODB_URL, {


    useUnifiedTopology:true,
    useNewUrlParser:true,


})

.then(db => console.log('Database is connected') )
.catch(err => console.log(err));







