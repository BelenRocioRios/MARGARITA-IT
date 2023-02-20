const {model, schema} = require('mongoose');

const productSchema = new schema ({
    name:{ type: String, require: true, unique: true },
    img:{type: String, require: true},
    inCart:{type: Boolean, default: false},
    price:{type: Number, require: true},
});

module.exports = model('product', productSchema);