module.exports = async (app) => {
    app.get('/slash', async (req, res) => {
        res.send({hi: 'slash'})
    })
}