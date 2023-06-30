const express = require("express");
const router = express.Router();

const User = require("../models/user");

// POST register endpoint
router.post("/api/register", async (req, res) => {
  const { username, password, first_name, last_name, email } = req.body;
  const user = await User.register(
    username,
    first_name,
    last_name,
    email,
    password
  );

  res.send(201).json({ user });
});

// POST login endpoint
router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
});

module.exports = router;
