const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)


const videoSchema = new Schema({

    code : {
        type : String,
        unique : true,
        required : true
    },

    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    videoURL : {
        type : String,
        required : true
    },

    comments : {
        type : [{ "_id" : Schema.Types.ObjectId}],
        ref : 'Comment'
    },

    thumbnail : {
        type : String,
        required : true
    },

    position : {
        type : Number,
        default : 0
    },

    display : {
        type : Boolean,
        default : true
    },

    githubURL : {
        type : String
    },

    codeSnippet : {
        type : String
    },

    subSection : {
        type : Schema.Types.ObjectId,
        ref : 'SubSection',
        required : true
    },

    section : {
        type : Schema.Types.ObjectId,
        ref : 'Section',
        required : true
    },

    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },

    view : {
        type : Number,
        default : 0
    },

    ceatedAt : {
        type : Date,
        default : Date.now()
    }
})

// videoSchema.virtual('comment', {
//     ref : 'Comment',
//     localField : 'comments._id',
//     foreignField : '_id'
// })

const Video = mongoose.model('Video', videoSchema)

module.exports = Video
