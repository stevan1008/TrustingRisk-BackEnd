const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const costumers = require('./routes/constumers')

const connectDB = require('./db/connect')

const app = express()
const port = 8081

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/costumers', costumers)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()