const express = require('express')
const app = express()
const cors = require('cors')()
const sequelize = require('./models').sequelize
const notice = require('./api/notice')
const auth = require('./api/auth')
const upload = require('./api/upload')

app.use(cors)
app.use(express.json())
sequelize.sync()


app.use(express.static('public'))

app.post('/notice', notice.create)
app.get('/notice/:noticeId', notice.detail)
app.get('/notice', notice.list)
app.put('/notice/:noticeId', notice.modify)
app.delete('/notice/:noticeId', notice.destroy)
app.post('/login', auth.login)
app.post('/popup', upload.single('image'), require('./api/popup').create)
app.post('/registration', auth.join)
app.get('/userInfo', require('./api/jwt').returnAuth())

app.use((req,res,next) => {
    res.status = 404
    next(Error('not found'))
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(res.statusCode || 500)
    res.json({error:err.message || 'internal server error'})
})

app.listen(3000, () => {
    console.log("3000port 대기중!!")
})
