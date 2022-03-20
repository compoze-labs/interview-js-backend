const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post("/feedback", (req, res) => {
    const body = req.body

    if (body.name === "" || body.name === undefined
    || body.comments === "" || body.comments === undefined) {
        res.statusCode = 400
    } else {
        res.statusCode = 201
    }

    res.send()
})

module.exports = app