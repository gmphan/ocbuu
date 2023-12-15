module.exports = async (app) => {
    app.get('/api/1', async (req, res) => {
        res.send({hi: 'api1'})
    })
}