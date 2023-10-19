const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('./upload'))
app.use(bodyParsee.urlencoded({ extennded: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '.')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('ERRO')
        }
        res.end('Concluido')
    })
})

app.listen(8080, () => console.log('Executando...'))