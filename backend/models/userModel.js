const mongoose= require('mongoose');
//json body 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},
{

timeStamps:true

});

const User = mongoose.model('users',userSchema);

module.exports = User;