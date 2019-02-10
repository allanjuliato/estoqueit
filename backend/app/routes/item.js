module.exports = (app) => {
    var api = app.api.item

    app.route('/v1/item')
        .get(api.lista)
        .post(api.adiciona)

    app.route('/v1/item/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza)
}