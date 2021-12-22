const express = require("express");
const router = express.Router();
const User = require("../models/User");
const userController = require("../controllers/userController");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");

// path: http://localhost:5000/api/users/
// get all users
//
router.get("/", isAuth, isAdmin, userController.getUsers);

module.exports = router;
