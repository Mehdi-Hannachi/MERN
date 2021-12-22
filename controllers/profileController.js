const Profile = require("../models/Profile");
module.exports = {
  createProfile: async (req, res) => {
    try {
      const newProfile = new Profile({
        userId: req.user._id,
        ...req.body,
      });
      const profile = await newProfile.save();

      res.json({ msg: "profile created", profile });
    } catch (error) {
      res.status(500).send("server error");
    }
  },
  getProfile: async (req, res) => {
    try {
      const profiles = await Profile.find().populate("userId");
      res.json({ profiles });
    } catch (error) {}
  },
  deleteProfile: async (req, res) => {
    try {
      const profileDeleted = await Profile.findOneAndDelete({
        _id: req.params.id,
      });
      res.json({ msg: "profile deleted", profileDeleted });
    } catch (error) {
      res.send("server error");
    }
  },
  editProfile: async (req, res) => {
    try {
      const editedProfile = await Profile.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );

      res.json({ msg: "Profile updated", editedProfile });
    } catch (error) {
      res.send("server error");
    }
  },
  getProfileById: async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.id).populate("userId");
      res.json({ msg: "profile loaded", profile });
    } catch (error) {
      res.send("server error");
    }
  },
};
