const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userController } = require("./routes/userRoutes");
const { contractsController } = require("./routes/ContractsRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userController);
app.use("/contract", contractsController);

app.listen(process.env.PORT || 8080, async (req, res) => {
  await connection;
  console.log("connected to Database");
  console.log(`server is rinning on http://localhost:${process.env.PORT}`);
});
