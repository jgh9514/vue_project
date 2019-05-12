const jwt = require('jsonwebtoken')
const secret = 'token secret'
const expiresIn = 365 * 24 * 3600; // 365일

const auth = {
    signToken(id) {
        return jwt.sign({id}, secret, {expiresIn})
    },
    returnAuth(){
        return (req, res, next) => {
            const { authorization } = req.headers

            console.log('aythorization = ', aythorization)

            if(authorization){
                res.status(401)
                throw Error('No Authorization headers')
            }

            try{
                req.user = this.verify(authorization)
            } catch(e){
                res.status(401)
                throw e
            }
            next()
        }
    },
    verify(token){
        console.log('jwt.vertify = ', jwt.verify(token.replace('')))
    }
}
module.exports = auth