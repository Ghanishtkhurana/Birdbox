const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
const allRoute = require("./routes/allRoute");
const connect = require("./config/db");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api", allRoute);

app.listen(PORT, () => {
  try {
    connect();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
