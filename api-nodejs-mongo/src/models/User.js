const mongoose = require("../database");

 const UserSchema = new mongoose.Schema ({
     name: {
         type: String, 
         required: true,   
    }, 
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
      password: {
      type: String,
      required: true,
      select: false,  
     },
     createdAT: {
        type: Date,
        default: Date.now
     }
 });

 const User = mongoose.model("User", UserSchema);

 module.exports = User; 
 