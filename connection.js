import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.MONGO_URL;

const connection = () => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.log(err));
};

export default connection;