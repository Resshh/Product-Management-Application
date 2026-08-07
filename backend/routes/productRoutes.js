const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// POST - Add Product
router.post("/", async (req, res) => {

    try {

        const product = new Product(req.body);

        await product.save();

        res.status(201).json({
            message: "Product Added Successfully",
            product
        });

    }
    catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

});

// GET - Fetch All Products
router.get("/", async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// PUT - Update Product
router.put("/:id", async (req, res) => {

    try {

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }https://desktop.postman.com/?desktopVersion=11.99.0&userId=42744344&teamId=13775287&region=us

        res.status(200).json({
            message: "Product Updated Successfully",
            updatedProduct
        });

    }
    catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

});


// DELETE - Delete Product
router.delete("/:id", async (req, res) => {

    try {

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product Deleted Successfully"
        });

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


module.exports = router;