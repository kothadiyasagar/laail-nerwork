const { Router } = require("express");
const { userModel } = require("../models/user.model");

const userController = Router();

// Create a lender
userController.post("/lenders", async (req, res) => {
  const { Name, MobileNumber } = req.body;
  const user = new userModel({
    Name,
    MobileNumber,
  });
  await user.save();
  res.send("lender created");
});

// Create a borrower
userController.post("/borrowers", async (req, res) => {
  const { Name, MobileNumber } = req.body;
  const user = new userModel({
    Name,
    MobileNumber,
  });
  await user.save();
  res.send("borrower created");
});

// Get all lenders or borrowers
userController.get("/", async (req, res) => {
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

module.exports = { userController };
