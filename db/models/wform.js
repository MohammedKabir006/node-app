const mongoose  = require("mongoose")


const wformSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    number:{
        type:String
    },
    email:{
        type:String
    },
    business:{
        type:String
    },
    description:{
        type:String
    }
})
module.exports = mongoose.model('wform', wformSchema);