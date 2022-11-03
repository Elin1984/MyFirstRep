const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  pages: {
    type: Number,
    min: [1, "Please Enter a number bigger then 0, got {VALUE}"],
    default: 100,
  },
  author: {
    required: [true, "Please provide author"],
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

module.exports = model("Book", bookSchema);
