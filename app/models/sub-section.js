const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)


const subSectionSchema = new Schema({
    code : {
        type : String,
        unique : true,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    section : {
        type : Schema.Types.ObjectId,
        ref : "Section",
        required : true
    },

    category : {
        type : Schema.Types.ObjectId,
        ref : "Category",
        required : true
    },

    subSectionImage : {
        type : String,
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const SubSection = mongoose.model('SubSection', subSectionSchema)

module.exports = SubSection