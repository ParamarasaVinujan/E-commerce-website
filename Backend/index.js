import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import productRoute from "./routes/productRoute.js"
import cors from 'cors'
import userRoute from "./routes/userRoute.js"
import cartRoute from "./routes/cartRoute.js"

const app = express()

app.use(bodyParser.json())

dotenv.config()


app.use(cors());


const PORT = process.env.PORT || 5000
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{

    console.log("Database connected successful.")

    app.listen(PORT, () =>{

        console.log(`Server is running on port ${PORT}`)

    })
}) 
.catch((error) => console.log(error))


app.use("/api/products", productRoute)
app.use("/api/users", userRoute)
app.use("/api/cart", cartRoute)
