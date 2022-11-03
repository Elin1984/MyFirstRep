const userController = require ("../controllers/User.controller");

const express = require ( "express"); 
const Router = express.Router();

Router.post("/register,userController.register");
Router.post("/login,userController.login");
Router.get("/user-profile",userController.user-profile);

module.express = Router; 