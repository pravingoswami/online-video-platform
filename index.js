const express = require('express')
const setupDB = require('./config/databse')
const router = require('./config/routes')
const cors = require('cors')


const app = express()
app.use(cors())
setupDB()


app.use(express.json())
app.use('/', router)
app.use(cors())


app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
    res.json('welcome to the video platform')
})


const port = 3011

app.listen(port, () => {
    console.log('listening on port', port)
})