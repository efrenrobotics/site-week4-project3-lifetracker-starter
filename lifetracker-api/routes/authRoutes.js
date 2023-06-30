/* Authentication Routes */
const express = require("express");
const router = express.Router();
const User = require("../models/user");

// POST register endpoiht
router.post("/api/register", async (req, res, next) => {
  try {
    const { username, first_name, last_name, email, password } = req.body;
    const user = await User.register(
      username,
      password,
      first_name,
      last_name,
      email
    );
    // user registration succesful
    return res.status(200).json({ user });
  } catch (e) {
    next(e);
  }
});

// POST login endpoint
router.post("/api/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    // user authentication succesful, authorized user
    return res.status(201).json({ user });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
