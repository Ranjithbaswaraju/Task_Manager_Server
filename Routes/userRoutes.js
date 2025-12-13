const express = require("express");
const router = express.Router();
const { getProfile, editProfile } = require("../Controllers/userControllers");
const {upload}=require("../Utils/multerFileUpload.js")
const {
  tokenValidator,
  validateMiddleware,
  editProfileValidator,
} = require("../Validators/authValidators.js");
const { checkAuth } = require("../Middlewares/authMiddleware.js");
router.get(
  "/profile",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  getProfile
);

router.put(
  "/editProfile",
  tokenValidator,
  editProfileValidator,
  validateMiddleware,
  checkAuth,
  upload.single("profilePic"),
  editProfile
);

module.exports = router;
