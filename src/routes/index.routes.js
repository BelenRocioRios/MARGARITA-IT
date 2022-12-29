const {Router} = require('express')
const router = Router();

const{renderIndex, renderBeauty, renderGcard , renderLogin, renderColeccion,renderCarteras , renderAccesorios, renderLibreria} = require('../controllers/index.controllers')

router.get('/' , renderIndex );
router.get('/about.hbs' , renderBeauty);
router.get('/giftcard.hbs' , renderGcard);
router.get('/login.hbs' , renderLogin);
router.get('/coleccion.hbs' , renderColeccion);
router.get('/carteras.hbs' , renderCarteras);
router.get('/accesorios.hbs' , renderAccesorios);
router.get('/libreria.hbs' , renderLibreria);



module.exports = router;

