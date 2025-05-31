const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  image: String,
  vibe: String,
  quote: String
});

module.exports = mongoose.model('Post', postSchema);
