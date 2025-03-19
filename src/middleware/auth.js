const jwt = require('jsonwebtoken');
const SECRET_KEY = 'SUACHAVESECRETA';

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];

    if(!authHeader){
        return res.sendStatus(401);
    }

    jwt.verify(authHeader, SECRET_KEY, (err, user) => {
        if(err){
            return res.sendStatus(403);
        }

        next();
    })
}

module.exports = authenticateToken;