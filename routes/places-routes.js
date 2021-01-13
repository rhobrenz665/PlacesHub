const express = require("express");
const { check } = require("express-validator");

const placesController = require("../controllers/places-controllers");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/auth");

const router = express.Router();

// @route   GET api/places/:pid
// @desc    Get places
// @access  Public
router.get("/:pid", placesController.getPlaceById);

// @route   GET api/places/user/:uid
// @desc    Get User
// @access  Public
router.get("/user/:uid", placesController.getPlacesByUserId);

// @authentication
router.use(checkAuth);

// @route   POST api/places/
// @desc    Create Place
// @access  Private
router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesController.createPlace
);

// @route   PATCH api/places/
// @desc    Update Place
// @access  Private
router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesController.updatePlace
);

// @route   POST api/places/
// @desc    Delete Place
// @access  Private
router.delete("/:pid", placesController.deletePlace);

module.exports = router;
