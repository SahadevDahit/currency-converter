import currency from "../models/currency.js"


export const StoresCurrency = async (req, res, next) => {
    try {

        const newCurrencyPair = await currency.create(req.body);
        return res.status(201).json({
            message: "new currency value pair added",
            currencyPair: newCurrencyPair
        })

    } catch (error) {
        next(error)
    }
}


export const currencyConverter = async (req, res, next) => {
    try {
        // console.log(req?.body?.amount)
        const {
            currency1,
            currency2,
            amount
        } = req.body;

        const recordFound = await currency.findOne({
            currency1,
            currency2
        });

        if (!recordFound) {
            throw new Error(" Record not found or pair not found")
        }


        const currency1Intocurrency2 = amount / recordFound?.difference;
        const currency2Intocurrency1 = amount * recordFound?.difference;


        return res.status(200).json({
            message1: `${currency1} into ${currency2} is ${currency1Intocurrency2}`,
            message2: `${currency2} into ${currency1} is ${currency2Intocurrency1}`,
        })
    } catch (error) {
        next(error)
    }
}