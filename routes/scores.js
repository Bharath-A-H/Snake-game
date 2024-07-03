const express = require('express');
const Score = require('../models/Score');
const router = express.Router();

// Get all scores
router.get('/', async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new score
router.post('/', async (req, res) => {
  const score = new Score({
    player: req.body.player,
    score: req.body.score,
  });

  try {
    const newScore = await score.save();
    res.status(201).json(newScore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
