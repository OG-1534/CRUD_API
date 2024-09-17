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

// READ PRODUCT
const returnProducts = async(req,res) => {
	 try {
                const result = await ProductModel.find();
                res.status(200).json(result);
        }       catch(err) {
                res.status(500).json(err);
        }
};

// UPDATE PRODUCT
const updateProduct = async(req,res) => {
	try {
		const id = req.params.id;
		const productExist = await ProductModel.findOne({ _id: id });

		if(!productExist){
			return res.status(404).json({ message: "Product does not exist" });
		}

		const result = await ProductModel.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json(result);
	}       catch(err) {
		res.status(500).json(err);
	}
};

module.exports = { createProduct, returnProducts, updateProduct };
