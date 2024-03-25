const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookInstanceSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  imprint: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
    due_back: { type: Date, default: Date.now },
  },
});
// Virtual for bookInstance url
bookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookInstance/${this._id}`;
});

module.exports = mongoose.model("BookInstance", bookInstanceSchema);
