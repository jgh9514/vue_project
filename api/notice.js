const { notice } = require('../models')

const create = async(req,res) => {
    console.log('===notice register ===')
    console.log('req.body', req.body)

    const form = req.body.form
    const register = await notice.create({
        subj:form.subj,
        conts:form.conts,
        tp:form.tp,
        init:form.init + ''
    })
    console.log("register ==== ", register)
    res.status(201).json({noticeId:register.dataValues.id})
}

const detail = async(req,res) =>{
    console.log('===notice detail ===')
    console.log('req.params======',req.params )

    const noticeDetail = await notice.findOne({where:{id:req.params.noticeId}})
    console.log('noticeDetail ==== ', noticeDetail.dataValues)

    if(!noticeDetail.dataValues) res.status(401).end('NOT FOUND ID')

    res.status(201).json({form:noticeDetail.dataValues})
}

const list = async(req,res) => {
    console.log('===NOTICE LIST ====')
    const noticeList = await notice.findAll()
    const noticeData =[]
    noticeList.map(list => {
        noticeData.push(list.dataValues)
    })
    console.log(noticeData)
    res.json({noticeData})

}

const modify = async(req,res) => {
    console.log('====NOTICE NODIFY====')
    console.log('req.params', req.params)
    console.log('req.body', req.body)

    const noticeId = req.params.noticeId
    const form = req.body.form

    const { subj, conts, tp, init} = form

    const noticeIdYn = await notice.findOne({
        where:{id:noticeId}
    })
    await notice.update(
        {subj,conts,tp:tp, init:init + ''},
        {where: {id:noticeId}}
    )
    res.json({noticeId})

}

const destroy = async(req,res) => {
    console.log('req.params===', req.params)
    const id = req.params.noticeId
    await notice.destroy({where:{id}})
    res.status(204).end()
}

module.exports = {
    create,
    detail,
    list,
    modify,
    destroy
}