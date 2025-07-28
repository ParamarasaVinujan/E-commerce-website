import express from 'express';
import Product from '../model/productModel.js'; 
import { fetch, create, update, deleteProduct, fetchById,insertManyProducts } from "../controllers/productController.js"
const route = express.Router()
route.post("/create", create)
route.post("/insertMany",insertManyProducts)
route.get("/", fetch)
route.get("/:id", fetchById)
route.put("/update/:id", update)
route.delete("/deleteProduct/:id", deleteProduct)
export default route;
