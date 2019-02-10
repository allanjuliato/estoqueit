var http = require('http')
var app = require('./config/express')
require('./config/database')('mongodb://localhost/estoque')

http.createServer(app).listen(3000, () => {
    console.log('Servidor Backend Iniciado');
})