import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
    currency1: {
        type: String,
        required: true
    },
    currency2: {
        type: String,
        required: true
    },
    difference: {
        type: Number,
        required: true
    }
})

const currency = mongoose.model("currency", CurrencySchema)

export default currency;