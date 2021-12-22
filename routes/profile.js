const router = require("express").Router();
const profileController = require("../controllers/profileController");
const isAuth = require("../middlewares/isAuth");
// http://localhost:5000/api/profiles/newProfile
// create a profile
//
router.post("/newProfile", isAuth, profileController.createProfile);

// http://localhost:5000/api/profiles/
// get a profile
//
router.get("/", isAuth, profileController.getProfile);

// http://localhost:5000/api/profiles/:id
// get a profile by id
//
router.get("/:id", isAuth, profileController.getProfileById);

// http://localhost:5000/api/profiles/deleteProfile/:id
// delete profile
//
router.delete("/deleteProfile/:id", isAuth, profileController.deleteProfile);

// http://localhost:5000/api/profiles/editProfile/:id
// edit profile
//
router.put("/editProfile/:id", isAuth, profileController.editProfile);

module.exports = router;
