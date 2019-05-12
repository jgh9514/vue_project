const { popup } = require('../models')

const create = async(req,res) => {
    console.log('===popup created===')
    console.log('req.body==',req.body)

    const form = JSON.parse(req.body.form)

    console.log('form==',form)
    const { subj, tp, conts, cnnt_url_yn, cnnt_url } = form;

    let filename = '',
        originalname = ''

        if(req.file) {
            filename = req.file.filename   
            originalname = req.file.originalname
        }

        const result = await popup.create({
            subj,tp,conts,cnnt_url_yn, cnnt_url,
            filename,originalname
        })

        console.log('result.dataValues===', result.dataValues)
        if(result.dataValues) res.status(201).json({popupId:result.dataValues.id})
        else res.status(500).json({error:'insert error'})
}

module.exports = {
    create
}