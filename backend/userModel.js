const {  mongoose } = require("mongoose")

const userModel = mongoose.Schema({

    name:{type:String,trim:true},
    email:{type:Object,trim:true},
    age:{type:String,trim:true},
    pic:{type:String}

})


const User = mongoose.model("User",userModel)
module.exports = User