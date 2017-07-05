module.exports = function(){

    async function checkToken(req){
        let token = await new Promise(resolve => { 
            setTimeout(function(){
                resolve('asdf');
            }, 1000);
        });

        return token;
    }

    return function(req, res, next){
        let requestToken = req.headers['authorization'];
        checkToken(req).then(token => {
            if(token === requestToken){
                next();
            }else{
                throw new Error();
            }
            
        })
        .catch(err => {
            res.redirect('/#login');
        });
    }
}
