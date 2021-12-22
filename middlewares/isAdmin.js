const User = require("../models/User");
const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  const decoded = await jwt.verify(req.headers.authorization, "SecretKey");
  if (!decoded) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  // find user
  const user = await User.findOne({ _id: decoded.userId });
  console.log(user);
  if (user.role !== "admin") {
    return res.status(402).json("unauthorized");
  }
  next();
};
module.exports = isAdmin;
