const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  register: async (req, res) => {
    const { email, password, name, role } = req.body;
    try {
      // test if user email exist
      let user = await User.findOne({ email });
      if (user) {
        return res.status(409).json({ msg: "you already have an account" });
      }
      // create user
      user = new User({
        ...req.body,
      });

      // hash pass
      const salt = 10;
      const hashed = await bcrypt.hash(password, salt);

      user.password = hashed;
      await user.save();
      // generate token
      const payload = {
        userId: user._id,
      };
      const token = await jwt.sign(payload, "SecretKey", { expiresIn: "7d" });

      res.json({ msg: "user registered", token });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      // test if user exist
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(408).json({ msg: "you need to be registered" });
      }
      // test if pass entered matchs with pass in db
      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        return res.status(403).json({ msg: "bad credentials" });
      }
      //  generate token
      const payload = {
        userId: user._id,
      };
      const token = await jwt.sign(payload, "SecretKey", { expiresIn: "7d" });
      res.json({ msg: "user logged", token: `Bearer ${token}` });
    } catch (error) {
      res.status(500).json("server error");
    }
  },
  getCurrentUser: (req, res) => {
    res.json({ user: req.user });
  },
};
