const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const Schema = mongoose.Schema

const userSchema = new Schema({
    code : {
        type : String,
        unique : true,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        unique : true,
        required : true
    },

    profile : {
        type : String,
        default : ''
    },

    mobile : {
        type : String,
        minlength : 10,
        maxlength : 10,
        require : true
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }

})

const User = mongoose.model('User', userSchema)

module.exports = User