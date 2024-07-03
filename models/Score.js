const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  player: String,
  score: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Score', scoreSchema);
