var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

app.set('secret', 'homemavestruz')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

consign({cwd: 'app'})
    .include('models')
    .then('api')
    //.then('routes/auth.js')
    .then('routes')
    .into(app)

module.exports = app