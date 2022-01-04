if (process.env.ENV === "dev") require("dotenv").config();
const mongoose = require("mongoose");
const connection = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
/* Display message in the console if the connection is successful. */
mongoose.connection.once("open", () => {
  console.log("connected!");
});
