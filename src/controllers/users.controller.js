const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {

    res.render("users/signup.hbs");

};

usersCtrl.signup = (req, res) => {
    const errors = [];
    const {name, email, password, confirm_password } = req.body;
        if (password != confirm_password) {
            errors.push({text:'passwords do not match'}); 
        }
        if (password.lenght<4 ) {
          errors.push({text: 'Passwords must be at least 4 characters.'});
        }
        if (errors.length>0 ){
            res.render('/users/signup',{
                errors
            })
        }
        else {
            res.send('signup successfully');
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