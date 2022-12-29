const indexCtrl = {};

indexCtrl.renderIndex = (req,res)=>{
    res.render('index')
};


indexCtrl.renderBeauty = (req,res)=>{
    res.render('beauty')
};

indexCtrl.renderGcard = (req,res)=>{
    res.render('giftcard')
};
indexCtrl.renderLogin = (req,res)=>{
    res.render('login')
};

indexCtrl.renderColeccion = (req,res)=>{
    res.render('coleccion')
};
indexCtrl.renderCarteras = (req,res)=>{
    res.render('carteras')
};

indexCtrl.renderAccesorios = (req,res)=>{
    res.render('accesorios')
};

indexCtrl.renderLibreria = (req,res)=>{
    res.render('libreria')
};


module.exports = indexCtrl;
