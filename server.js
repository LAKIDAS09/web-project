import express from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import foodRouter from "./routes/foodRoutes.js"




// app config 
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log('server started on http://localhost:4000')
})

// mongodb+srv://loki999:<db_password>@backend.y8gpflp.mongodb.net/?

