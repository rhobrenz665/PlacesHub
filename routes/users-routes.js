const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controllers");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

// @route   GET api/
// @desc    Get users
// @access  Public
router.get("/", usersController.getUsers);

// @route   POST api/
// @desc    Sign up
// @access  Private
router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);

// @route   POST api/
// @desc    Login
// @access  Private
router.post("/login", usersController.login);

module.exports = router;
