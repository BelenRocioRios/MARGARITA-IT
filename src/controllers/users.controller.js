const usersCtrl = {};

const user = require('../models/user');

usersCtrl.renderSignUpForm = (req, res) => {

    res.render("users/signup.hbs");

};

usersCtrl.signup = async (req, res) => {


    const errors = [];
   

    
    const {name, email, password, confirm_password } = req.body;

       if (password != confirm_password) {
           errors.push({text:'password do not match'}); 
           
        }
       if (password.length < 4 ) {
          errors.push({text: 'Passwords must be at least 4 characters.'});
        }
        if (errors.length > 0 ){
            res.render('users/signup.hbs',{
                errors,
                name,
                email
            })
        }else{
            
            const emailUser = await user.findOne({email : email});

            if(emailUser){
                
                req.flas('error_msg' , 'the mailis alreqady in use ');
                req.redirect('/user/signup.hbs ');

            } else{
                const newUser = new user({name, email, password});
                await newUser.save();
                res.redirect('/users/signin.hbs')
            }
        }

        
};
    

usersCtrl.renderSigninForm = (req, res) => {

    res.render('users/signin.hbs')

};

usersCtrl.signin = (req, res) => {
    res.render('signin');
};


/*para salir del login*/

usersCtrl.logout = (req, res) => {
    res.send('logout');

};

module.exports = usersCtrl;