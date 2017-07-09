module.exports = function(){

    function checkToken(req){
        return new Promise(resolve => { 
            setTimeout(function(){
                resolve('asdf');
            }, 100);
        });;
    }

    return function(req, res, next){
        let requestToken = req.headers['authorization'];
        console.log(req.url);
        checkToken(req).then(token => {
            // if(token === requestToken){
            //     next();
            // }else{
            //     throw new Error();
            // }
            res.redirect('/#login');
            
        })
        .catch(err => {
            res.redirect('/#login');
        });
    }
}
