const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Sleep = require("../models/sleep");

/* SELECT ALL ROWS */
router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const sleepRes = await Sleep.getSleepRows(userId);
    return res.status(200).json({ sleepRes });
  } catch (e) {
    next(e);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const { start_time, end_time, user_id } = req.body;
    const sleepEntry = await Sleep.createSleepEntry(
      start_time,
      end_time,
      user_id
    );
    return res.status(201).json({
      sleep: {
        start_time: sleepEntry.start_time,
        end_time: sleepEntry.end_time,
        user_id: sleepEntry.user_id,
      },
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
