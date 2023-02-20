const {model, schema} = require('mongoose');

const cartSchema = new schema ({
    name:{ type: String, require: true, unique: true },
    img:{type: String, require: true},
    amount:{type: Number, require: true},
    price:{type: Number, require: true},
});

module.exports = model('cart', cartSchema);