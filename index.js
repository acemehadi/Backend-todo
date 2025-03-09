const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todos");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connnected"))
  .catch((err) => console.log(err));

app.use("/api/todos", todoRoutes);
app.listen(port, () => console.log(`server is running nodejs`));
