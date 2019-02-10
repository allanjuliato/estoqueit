var mongoose = require('mongoose')

var schema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    quantidade: {
        type: Number,
        required: true
    },

    descricao : {
        type: String,
    },

    qtdmin: {
        type: Number,
    }
})

mongoose.model('Item', schema)
