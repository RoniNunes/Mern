
const jwt = require('jsonwebtoken');
const config = require('../config/nodemon')


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, config.JWT_KEY);
        req.userData = decoded;
        console.log("START                                               => MODULO CHECK-AUTH LINE 11",req.userData)
        console.log("END                                                 => MODULO CHECK-AUTH LINE 11")
        next();
    } catch (error) {
        return res.status('401').json({
            message: 'Auth failed'
        });
    }
};
