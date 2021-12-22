const jwt = require("jsonwebtoken");
const User = require("../models/User");



const isAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  const decoded = await jwt.verify(req.headers.authorization, "SecretKey");
  if (!decoded) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  // find user
  const user = await User.findOne({ _id: decoded.userId });
  req.user = user;
  next();
};
module.exports = isAuth;
