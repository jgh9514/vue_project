const multer = require('multer')  // 파일업로드를 위한 multer 모듈
const path = require('path')  // 기본 제공하는 path 모듈

const upload = multer({
    storage: multer.diskStorage({ 
      destination: function (req, file, cb) { // 저장 파일경로
        cb(null, 'public/images/')
      },
      filename: function (req, file, cb) {  // 파일이름
        cb(null, new Date().valueOf() + path.extname(file.originalname))  // 날짜 원시값 + 확장자
      },
      fileFilter: function(req, file, cb) { // 파일필터
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
            req.validateErr = '"JPG, PNG 이미지만 업로드 가능합니다."'
            return cb(null, false, new Error('JPG, PNG 이미지만 업로드 가능합니다'));
            } else {
                cb(null, true)
            }
            cb(null, true)
      },
      limits: { fileSize: 5 * 1024 * 1024 }
    }),
})

module.exports = upload