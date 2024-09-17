const ProductModel = require("../models/productModel");

// CREATING PRODUCT
const createProduct = async(req,res) => {
	try {
		const result = await ProductModel.create(req.body);
		res.status(200).json(result);
	}
	catch(err) {
		res.status(500).json(err);
	}
};

module.exports = createProduct;
