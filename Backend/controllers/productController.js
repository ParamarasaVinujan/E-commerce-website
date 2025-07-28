import Product from "../model/productModel.js"

export const create = async (req, res) => {
    try {
        const productData = new Product(req.body)
        const { name } = productData
        const productExist = await Product.findOne({ name })
        if (productExist) {
            return res.status(400).json({ message: "Product already exists" })
        }
        const savedProduct = await productData.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
// Bulk insert many products
export const insertManyProducts = async (req, res) => {
  try {
     console.log("Received body:", req.body); 
    const products = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Please provide a non-empty array of products" });
    }

    const insertedProducts = await Product.insertMany(products);
    res.status(201).json({ message: "Products inserted successfully", data: insertedProducts });
  } catch (error) {
    console.error("Insert many error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const fetch = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found" })
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        const productExist = await Product.findOne({ _id: id })
        if (!productExist) {
            return res.status(404).json({ message: "Product not found" })
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const productExist = await Product.findOne({ _id: id })
        if (!productExist) {
            return res.status(404).json({ message: "Product not found" })
        }
        await Product.findByIdAndDelete(id);
        res.status(201).json({ message: "Product deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const fetchById = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
