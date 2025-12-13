const express=require("express")
const router=express.Router()
const{loginController,signupController}=require("../Controllers/authControllers.js")
const {signupValidator,loginValidator}=require("../Validators/authValidators.js")

router.post("/signup",signupValidator,signupController)

router.post("/login",loginValidator,loginController)





module.exports=router