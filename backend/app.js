const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

db();

app.use(cors());

app.use(express.json());

app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});