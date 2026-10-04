const PORT = 3333;
const db = require("./config/db");
const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/speechRoutes");

db();

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server has been started in ${PORT} port`);
});
