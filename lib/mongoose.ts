import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if(!process.env.MONGODB_URL) {return console.log("MongoDB URL is required");}

    if(isConnected) {return console.log("MongoDB Connected");}

    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "byte_exchange_ziga",
        })
        isConnected = true;
        console.log("MongoDB Connected");
    }catch(error){
        console.log("MongoDB connection failed", error);
    }
}