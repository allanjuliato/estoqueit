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
    }
})

mongoose.model('Item', schema)
