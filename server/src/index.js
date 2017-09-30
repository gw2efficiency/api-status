const path = require('path')
const express = require('express')
const compression = require('compression')
const cors = require('cors')
const logging = require('morgan')

const app = express()

app.use(compression())
app.use(cors())
app.use(logging('tiny'))

const root = path.join(__dirname, '../../')

app.use('/', express.static(path.join(root, '/frontend/build')))

app.get('/api', function (req, res) {
  res.sendFile(path.join(root, '/worker/latest.json'))
})

const port = process.env.PORT || 3123
app.listen(port, function () {
  console.log(`Server listening on port ${port}`)
})
