const express = require("express");
const userRouter = require("./user/router");
const allRoutes = express.Router();

allRoutes.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

allRoutes.use("/user", userRouter);

module.exports = allRoutes;
