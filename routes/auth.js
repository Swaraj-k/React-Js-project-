const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
//Create a user using :Post "/api/auth/createuser". Doesn't require login
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Enter a valid passwords").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
  ],

  //If there are errors, return Bad request and the errors
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email registered or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with same email exists." });
      }

      //Create a New User
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error Oquired")
    }
  }
);

module.exports = router;
