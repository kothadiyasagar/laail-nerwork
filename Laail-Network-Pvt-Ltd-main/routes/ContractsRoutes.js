const express = require("express");
const { contractsModel } = require("../models/Contracts.model");
const { userModel } = require("../models/user.model");
const contractsController = express.Router();

/// Create a contract
contractsController.post("/", async (req, res) => {
  const {
    LenderId,
    BorrowerId,
    Principle,
    Interest,
    LoanStartDate,
    LoanDueDate,
    IsRepaid,
  } = req.body;
  const contract = new contractsModel({
    LenderId,
    BorrowerId,
    Principle,
    Interest,
    LoanStartDate,
    LoanDueDate,
    IsRepaid,
  });
  await contract.save();
  res.send("contract creadted");
});

// Get all lenders or borrowers
contractsController.get("/", async (req, res) => {
  const { key } = req.query;
  if (key === "lender") {
    const lenders = await userModel.find().populate("contractsAsLender");
    res.send(lenders);
  } else if (key === "borrower") {
    const borrowers = await userModel.find().populate("contractsAsBorrower");
    res.send(borrowers);
  } else {
    res.status(400).send("Invalid query parameter");
  }
});

module.exports = { contractsController };
