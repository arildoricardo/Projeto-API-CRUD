const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://arildo:myhero@cluster0.bygm65p.mongodb.net/api-nodejs-mongodb?retryWrites=true&w=majority", {}, (error)=>{
       if (error){
        console.log('Falha autenticar com mongodb');
        console.log(error);
        return;
       }

       console.log('Conexão com mongodb estável');
})

mongoose.Promise = global.Promise;

module.exports = mongooose; 