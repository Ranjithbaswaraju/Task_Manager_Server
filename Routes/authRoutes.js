// const express=require("express")
// const router=express.Router()
// const{loginController,signupController}=require("../Controllers/authControllers.js")
// const {signupValidator,loginValidator}=require("../Validators/authValidators.js")

// router.post("/signup",signupValidator,signupController)

// router.post("/login",loginValidator,loginController)





// module.exports=router

const express = require("express");
const Router = express.Router();
const {
  loginController,
  signupController,
} = require("../Controllers/authControllers.js");
const {
  signupValidator,
  loginValidator,
} = require("../Validators/authValidators.js");
Router.post("/signup", signupValidator, signupController);
Router.post("/login", loginValidator, loginController);

module.exports = Router;