const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  Name: String,
  MobileNumber: String,
});

const userModel = model("user", userSchema);

module.exports = { userModel };
