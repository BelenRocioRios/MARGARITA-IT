const { Router } = require('express');
const router = Router();


const { renderSignUpForm, renderSigninForm, signup, signin, logout } = require('../controllers/users.controller')


router.get('/users/signup.hbs', renderSignUpForm);

router.post('/users/signup', signup);

router.get('/users/signin.hbs', renderSigninForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);


module.exports = router;


