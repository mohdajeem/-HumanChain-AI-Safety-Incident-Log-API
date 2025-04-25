import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connect = async () => {
    try{
        const connection = mongoose.connect(process.env.MONGO_URL);
        // console.log(`Mongodb connected: ${connection.connection.ho}`);
        console.log("Connected Mongodb");
    } catch(error){
        console.error(`Error : ${error}`);
        process.exit();
    }
}

export default connect;