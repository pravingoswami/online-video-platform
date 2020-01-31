const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.set('useCreateIndex', true)

const sectionSchema = new Schema({
    code : {
        type : String,
        unique : true,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    sectionImage : {
        type : String,
        required : true
    },

    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Section = mongoose.model('Section', sectionSchema)

module.exports = Section