import Order from '../model/orderModel.js'

export const createOrder = async(req, res) =>{
    try {
        const {user, orderItems,shippingAddress,paymentMethod,totalPrice} = req.body
        const newOrder = new Order({user,orderItems,shippingAddress,paymentMethod,totalPrice})
        const saveOrder = await newOrder.save()
        res.status(201).json(saveOrder)
    } catch (error) {
        console.error("Order creation failed",error.message)
        res.status(500).json({message: "Internal Server Error"})
        
    }
}
export const getUsersOrders= async(req,res) =>{
    try {
        const userId = req.params.id
        const orders = await orderModel.find({user:userId}).populate('orderItems.product')
        if(!orders || orders.length ===0)
        {
            return res.status(404).json({message: "No orders found this user"})
        }
        res.status(200).json(orders)
        
    } catch (error) {
        console.error("Error fetching user orders:",error.message);
        res.status(500).json({message: "Internal Server Error"})
        
    }
}
export const makePayment = async(req,res)=>
{
    try {
        const order =await Order.findById(req.params.id)
        if(!order){
            return res.status(404).json({message:'Order not found'})
        }
        order.ispaid =true;
        order.paidAt =Date.now()
        const updateOrder = await order.save()
        res.status(200).json({
            message: 'Order paid',
            order:updateOrder,
        })
    } catch (error) {
        console.error('Payment update error:', error.message)
        res.status(500).json({message: 'Internal server Error'})
    }
}
