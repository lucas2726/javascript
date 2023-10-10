const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParsee.urlencoded({ extennded: true}))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, console.log('Executando...'))