module.exports = (uri) => {
    var mongoose = require('mongoose')

    mongoose.connect(uri, { useNewUrlParser: true })

    mongoose.connection.on('connected', () => {
        console.log('Conectado ao MongoDB');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Erro na Conexão: ' + error);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Desconectado do MongoDB');
    })

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Aplicação Terminada, conexão fechada');
            process.exit(0)
        })
    })

}