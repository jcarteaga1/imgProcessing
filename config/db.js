const mongoose = require("mongoose");
const uri = "mongodb+srv://jcarteaga1:jcarteaga@cluster0-adrdo.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log("Database connection established!");
  },err=>{
    console.log("Error connecting Database instance due to: ", err);
  });
