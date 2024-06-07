import express from 'express';
import dbConnect from "../configs/dbConnect.js"
import currencyRoutes from '../routes/currency.js';
dbConnect();
const app = express();

app.use(express.json())

//routes
app.use("/currency", currencyRoutes)



/// err handiling
app.all("*", (req, res, next) => {
    res.status(404).json({
        message: "routes not found"
    })
})


// global err handling
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error?.message
    })
})



export default app;