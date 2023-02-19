const express = require('express');
const AuthController = require("./Controllers/AuthController");

const app = express(); 

app.use("/auth", AuthController)

 app.listen(3000, ()=>{
     console.log('Server is running');
 })   
