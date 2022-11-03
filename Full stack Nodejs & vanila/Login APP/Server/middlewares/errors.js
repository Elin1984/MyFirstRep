function errorHandler (err,res,next){
    if(typeof err ==="string"){
        return res.status (400).json ({ massage: err});
    }

    if(typeof err ==="ValidationErro"){
        return res.status (400).json ({ massage: err.massage});
    }

    if(typeof err ==="UnauthorizedErro"){
        return res.status (400).json ({ massage: err.massage});
    }

    return res.status (500).json ({ massage: err.massage});



}

module.exports ={
    errorHandler,
};