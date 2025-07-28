import express, { Router } from 'express'
import { createOrder,getUsersOrders,makePayment } from '../controllers/orderController.js'

const route = express.Router()
route.post("/createOrder", createOrder)
route.get("/user/:id",getUsersOrders)
route.put('/:id/pay', makePayment);

export default route