const {Router} = require('express')
const router = Router();

const{renderIndex, renderBeauty, renderGcard , renderLogin, renderColeccion} = require('../controllers/index.controllers')

router.get('/' , renderIndex );
router.get('/about.hbs' , renderBeauty);
router.get('/giftcard.hbs' , renderGcard);
router.get('/login.hbs' , renderLogin);
router.get('/coleccion.hbs' , renderColeccion);


module.exports = router;

