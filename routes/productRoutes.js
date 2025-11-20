const express = require('express');
const { buyProduct } = require('../controllers/buyproduct');

const router = express.Router();

router.get('/', buyProduct);

module.exports = router;
