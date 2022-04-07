const express = require('express')
require('dotenv').config()

const server = express()

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})