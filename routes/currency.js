import express from "express"

import {
    StoresCurrency,
    currencyConverter
} from "../controllers/currency.js"

const currencyRoutes = express.Router();

currencyRoutes.post("/", StoresCurrency);
currencyRoutes.get("/", currencyConverter);




export default currencyRoutes;