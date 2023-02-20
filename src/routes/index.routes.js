const {Router} = require('express')
const router = Router();

const{renderIndex, renderBeauty, renderGcard , renderColeccion,renderCarteras , renderAccesorios, renderLibreria} = require('../controllers/index.controllers')

router.get('/' , renderIndex );
router.get('/about.hbs' , renderBeauty);
router.get('/giftcard.hbs' , renderGcard);
router.get('/coleccion.hbs' , renderColeccion);
router.get('/carteras.hbs' , renderCarteras);
router.get('/accesorios.hbs' , renderAccesorios);
router.get('/libreria.hbs' , renderLibreria);





module.exports = router;

