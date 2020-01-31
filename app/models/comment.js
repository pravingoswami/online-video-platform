const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.set('useCreateIndex', true)

const reply = new Schema({
    title : {
        type : String,
        required : true
    },

    body : {
        type : String
    },

    commentBy : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const commentSchema = new Schema({
    code : {
        type : String,
        unique : true,
        required : true
    },

    title : {
        type : String,
        required : true
    },

    body : {
        type : String
    },

    commentBy : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    reply : [reply],

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment