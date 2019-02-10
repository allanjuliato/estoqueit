var mongoose = require('mongoose')

module.exports = (app) => {

    var api = {}

    var model = mongoose.model('Item')

    api.lista = (req, res) => {

        model.find()
        .then((item) => {
            res.json(item)
        }, (error) => {
            console.log(error);
            res.sendStatus(500)
        })
    };

    api.buscaPorId = (req, res) => {
        model.findById(req.params.id)
        .then((item) => {
            if(!item) throw new Error('Foto não Encontrada')
            res.json(foto)
        }, (error) => {
            console.log(error);
            res.sendStatus(500)
        })
    };

    api.removePorId = (req, res) => {
        model.remove({'_id' : req.params.id})
        .then(() => {
            res.sendStatus(200)
        }, (error) => {
            console.log(error);
            res.sendStatus(500)
        })
    };

    api.adiciona = (req, res) => {
        model.create(req.body)
        .then((item) => {
            res.json(item)
        }, (error) => {
            console.log('não conseguiu')
            console.log(error);
            res.sendStatus(500)
        })
    };

    api.atualiza = (req, res) => {
        model.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => {
            res.json(item)
        }, (error) => {
            console.log('não conseguiu')
            console.log(error);
            res.sendStatus(500)
        })
    }

    return api
}