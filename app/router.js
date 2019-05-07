const { router, app } = _module('vendor::router')




// make router here
app.get('/', (req, res) => {
    res.send('expresso success')
})


module.exports = router