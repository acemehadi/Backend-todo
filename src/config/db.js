const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Mongoconnected fire")),
      .catch((err)  =>
        console.error(err.message)
      )
  } catch {}
};
