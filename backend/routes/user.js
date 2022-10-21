const router = require("express").Router();
const userController = require("../controllers/user");
const { body } = require("express-validator");
const User = require("../models/user");

router.get("/viewJobs", userController.viewJobs);

router.put("/applyForJob/:jobId", userController.applyForJob);

router.post("/login", userController.login);

router.post(
  "/signup",
  [
    body("username").trim().isLength({ min: 2 }),
    body("email")
      .isEmail()
      .withMessage("Enter a valid email address")
      .custom((value, { req }) => {
        return User.findOne({ email: value })
          .then((user) => {
            if (user) {
              Promise.reject("User already exists");
            }
          });
      }).normalizeEmail(),
    body("password").trim().isLength({min: 5}).withMessage("Password too short"),
    body('cgpa').trim().isLength({min: 1, max: 3}).withMessage('Please enter valid cgpa'),
    body('branch').trim().not().isEmpty()
  ],
  userController.signup
);

module.exports = router;