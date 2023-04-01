const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DB_CONNECTION_STRING,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db =mongoose.connection;
db.on('error',console.error.bind(console,"Error in connecting to mongoDB"));

db.once('open',()=>{
    console.log("connected to Database :: MongoDB ")
})


module.exports = db;