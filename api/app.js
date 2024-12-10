const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const apirouter = require('./routers/router')




app.use(express.json())
app.use(apirouter)

const PORT = process.env.PORT
app.listen(PORT,()=>{0
    console.log(`server is running on ${PORT}`)
})