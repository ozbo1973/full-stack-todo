const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Must input name."
  },
  completed: {
    type: Boolean,
    default: false
  },
  create_date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Todo", TodoSchema);
