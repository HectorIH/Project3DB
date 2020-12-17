const { Schema, model } = require("mongoose");

const LinkSchema = new Schema({
  link: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
});

const LinkModel = model("Link", LinkSchema);

module.exports = LinkModel;
