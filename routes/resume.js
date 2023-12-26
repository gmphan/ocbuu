module.exports = async (app) => {
    app.get('/api/resume/header', async (req, res) => {
        res.send({hi: 'resume header'})
    })
}