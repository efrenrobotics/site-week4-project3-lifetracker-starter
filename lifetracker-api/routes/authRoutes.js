/* Authentication Routes */
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// GET me endpoint
router.get("/api/me", async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);
    return res.status(200).json({ user });
  } catch (e) {
    next(e);
  }
});

// POST register endpoiht
router.post("/register", async (req, res, next) => {
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
    const token = jwt.sign(
      { userId: user.id, userName: user.name },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    return res.status(201).json({
      message: "registered succesfully",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (e) {
    next(e);
  }
});

// POST login endpoint
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    // user authentication succesful, authorized user
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({
      message: "login successful",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
