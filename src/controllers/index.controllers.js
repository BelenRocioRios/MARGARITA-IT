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




module.exports = indexCtrl;
