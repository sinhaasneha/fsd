const express = require("express");
const { createOrder, getOrders } = require("../controllers/orderController");
const router = express.Router();

router.post("/", createOrder);   // POST /api/orders
router.get("/", getOrders);      // GET /api/orders

module.exports = router;