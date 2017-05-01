const request = require('request')
const cors = require('cors')
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())

app.get('/carburantes', function (req, res) {
  var url = process.env.URL
  request(url, function (error, response, body) {
    if (error) throw error
    res.json(JSON.parse(body))
  })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))

