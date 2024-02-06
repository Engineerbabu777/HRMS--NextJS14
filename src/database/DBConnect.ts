
import mongoose from 'mongoose';


// CONNECTING TO OUR DATABASE!
export const DBConnect = async() => {

    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    } else{
        return mongoose.connect(process.env.MONGO_URI as string)
    }
}