const mongoose= require('mongoose');
const connect = mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;

connection.on('connected',()=>
{
    console.log("MOngodb is connected");
})

connection.on('error',()=>
{
    console.log("Errot",error);
})

module.exports=mongoose;
