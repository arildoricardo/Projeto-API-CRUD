const express = require("express");

const UserModel = require("../models/User") ;

const router = express.Router();

router.post("/register", (req, res ) => {
    console.log(req.body); 
    return res.json({
        error: false,
        message:"Registred with sucess!"
    });
})

module.exports = router; 