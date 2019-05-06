const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

require('./vendor')

const router = _module('app::router')

// start
const app = express()

app.use(cors())

// before body parse
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// after body parse
// load router
app.use('/', router)


const port = process.env.PORT || 5000

app.listen(port)

// eslint-disable-next-line
console.info('application serve on port ' + port)
