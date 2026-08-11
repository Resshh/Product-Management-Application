const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

db();

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

app.use(express.json());
app.disable("x-powered-by");
app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
