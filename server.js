const express = require('express')
const router = require('./app/routes/routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(router)

app.listen(
    3000,
    () => console.log("Server running on port 3000")
)
