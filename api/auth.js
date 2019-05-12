const {authLogin} = require('../models')
const encryption = require('./encryption')
const jwt = require('./jwt')
const login = async (req,res) => {
    console.log('======login======')
    console.log('req.body===', req.body)

    const email = req.body.data.username
    const password = req.body.data.password

    const loginInfo = await authLogin.findOne({where:{email}})
    const pwChk = await encryption(password,loginInfo.dataValues.salt)


    console.log('pwChk =',pwChk)
    if(loginInfo.dataValues.password === pwChk.password){
        //res.json({body:loginInfo.dataValues.email})

        const token = jwt.signToken(loginInfo.dataValues.email)
        console.log(token)

        res.json({body:token})
    }else {
        res.status(401).json({errro:'not find login info'})
    }



    const resLogin = await authLogin.findOne({
        attributes: [
            'id',
            'email',
            [authLogin.sequelize.fn('left', authLogin.sequelize.col('createdAt'), 10), 'date']
        ],
        where: { email, password }
    })

    console.log("resLogin============",resLogin)
    if (resLogin) {
        res.json({body: resLogin.dataValues})
    } else {
        res.status(401).json({error: 'NOT FINT LOGIN INFO'})
    }
}

const join = async(req,res) => {
    console.log('===join===')
    console.log('req.body===',req.body)

    let {usermail ,password} = req.body.form

    const pwObj = await encryption(password)
    console.log('pwObj===',pwObj)

    const joinResult = await authLogin.create({
        email:usermail,
        password:pwObj.password,
        salt:pwObj.salt
    })
    console.log('joinResult===',joinResult)
    if(joinResult) res.json({body:joinResult.email})
    else res.status(401).json({error:'join erorr'})


}

module.exports ={ 
    login,
    join
}