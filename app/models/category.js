const mongoose = require('mongoose')


const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)

const categorySchema = new Schema({
    code : {
        type : String,
        unique : true,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category