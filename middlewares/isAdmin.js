const User = require("../models/User");
const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  const decoded = await jwt.verify(token, "SecretKey");
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
