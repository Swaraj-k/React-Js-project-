const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
//Create a user using :Post "/api/auth". Doesn't require Auth
router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Enter a valid passwords").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)
    res.json({error:'Please Enter a unique Value for mail', message: err.message})})

  }
);

module.exports = router;
