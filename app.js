const PORT = 3333;
const db = require("./config/db");
const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/speechRoutes");
const cors = require("cors");
const allowedAPI = [
    "http://localhost:5371",
    "https://something485752.vercel.app"
];

db();

app.use(cors({
    origin: allowedAPI
}));

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server has been started in ${PORT} port`);
});
