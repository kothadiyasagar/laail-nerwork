const { Schema, model } = require("mongoose");

const contractsSchema = new Schema({
  LenderId: { type: Schema.Types.ObjectId, ref: "user" },
  BorrowerId: { type: Schema.Types.ObjectId, ref: "user" },
  Principle: Number,
  Interest: Number,
  LoanStartDate: String,
  LoanDueDate: String,
  IsRepaid: Boolean,
});

const contractsModel = model("contract", contractsSchema);

module.exports = { contractsModel };
