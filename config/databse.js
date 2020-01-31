const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/dct-video-platform',{useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
        console.log('connect to database')
        })

        .catch(err => console.log(err))
}

module.exports = setupDB