import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
     price:{
        type: Number,
        required:true
    },
     description:{
        type:String,
        required:true
    },
   features: [String],
  specs: {
    dimensions: String,
    seatHeight: String,
    weight: String,
    assembly: String,
    warranty: String,
  },
  images: [String],
  colors: [
    {
      name: String,
      hex: String
    }
  ],
  materials: [String]
    
},
{
    timestamps: true
}
)
export default mongoose.model("Product",productSchema)