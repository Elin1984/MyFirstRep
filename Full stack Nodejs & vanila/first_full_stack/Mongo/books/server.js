const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DATABASE_ENDPOINT = process.env.DATABASE_LOCAL_ENDPOINT;
mongoose
  .connect(DATABASE_ENDPOINT)
  .then(() => console.log("Successfully connect to MongoDB"))
  .catch(() => console.log("Failed connecting to MongoDB"));

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`App running on ${PORT}`));
