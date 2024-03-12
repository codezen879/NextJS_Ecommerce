import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();
const connection = {};
const CONNECT="mongodb+srv://Sanchit:Romanwins@cluster0.eu0ls6l.mongodb.net/Blogweb?retryWrites=true&w=majority";
export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(CONNECT);
    connection.isConnected = db.connections[0].readyState;
    
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};