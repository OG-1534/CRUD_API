const express = require("express");
const {createProduct, returnProducts} = require("../controllers/productController");

const router = express.Router();

router.post("/create", createProduct);
router.get("/read", returnProducts);

module.exports = router;
