
const express=require("express")
const router=express.Router()
const auth=require("../controllers/authController")
const isAuth = require("../middlewares/isAuth")
const {registerRules,validator,loginRules}=require("../middlewares/validator")
//  http://localhost:5000/api/auth/register
// register 
// public
router.post("/register",registerRules,validator,auth.register)
//  http://localhost:5000/api/auth/login
// login 
// public
router.post("/login",loginRules,validator,auth.login)
//  http://localhost:5000/api/auth/me
// login 
// public
router.get("/me",isAuth,auth.getCurrentUser)



module.exports=router