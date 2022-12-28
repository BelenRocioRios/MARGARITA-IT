const { timeStamp } = require('console');
const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title : {
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true

    }
},{
    timeStamp: true
})

module.exports  =('Note', NoteSchema);