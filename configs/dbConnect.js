import mongoose from 'mongoose'



const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/currency")
        console.log("db connected")
    } catch (error) {
        console.log(error?.message);
        process.exit();
    }

}

export default dbConnect;