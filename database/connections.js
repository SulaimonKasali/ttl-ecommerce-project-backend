const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/ttl_ecommerce',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // connectTimeoutMS: 1000
    useFindAndModify:false
});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log("> successfully opened the database");
});

db.on("error", ()=>{
    console.log("> error occured from the database");
});

module.exports = mongoose;
