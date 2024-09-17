const express = require("express");
const {
	createProduct,
	returnProducts,
	updateProduct
} = require("../controllers/productController");

const router = express.Router();

router.post("/create", createProduct);
router.get("/read", returnProducts);
router.put("/update/:id", updateProduct);

module.exports = router;
