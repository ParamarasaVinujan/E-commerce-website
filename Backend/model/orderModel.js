import mongoose from "mongoose"
const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true

    },
    orderItems: [
        
        {
            product: { type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type:Number,
                required: true

            }
        }
        
    
    ],
    shippingAddress: {
        address: String,
        city: String,
        country: String
    },
    paymentMethod: String,
    totalPrice: Number,
    isPaid:{type: Boolean, default:false },
    paidAt: Date,
    isDelivered: { type: Boolean, default: false},
    isDeliveredAt: Date
},
{
    timestamps: true
}
)
export default mongoose.model('Order',orderSchema)