
import mongoose from 'mongoose';


export const DBConnect = async() => {

    mongoose.connect(process.env.MONGO_URI).then(() => {
       console.log("DATABASE CONNECTED!")
    })
}