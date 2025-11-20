const { getAllProducts } = require('../services/productService');

exports.buyProduct = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
