const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static(`${__dirname}/../dist`))

app.use(bodyParser.json())

const port = 4200

app.listen(port, () => {
  console.log(`The magic is happening on port ${port}`)
})
