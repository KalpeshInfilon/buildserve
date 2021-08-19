const express = require('express')
const app = express()
const port = 3636 | process.env.PORT
const bodyParser = require('body-parser');
const fieldRouter = require('./Router/fieldRouter')
const cors = require('cors');
require('./config/db')


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/field', fieldRouter)

app.get('/', (req, res) => {
    console.log("Main Call")
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port port!`))