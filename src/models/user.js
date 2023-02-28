const {Schema , model } = require('mongoose');
const bcrypt =   require('bcryptjs');


const userSchema = new Schema ({
    name:{type: String, require: true} ,
    email:{type: String, require: true, unique: true},
    password:{type: String, require: true}
}, {
    timestamps:true
});

userSchema.method.encryPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return  await bcrypt.hash(password, salt);
};

userSchema.methods.matchsPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports  = ('User', userSchema);



