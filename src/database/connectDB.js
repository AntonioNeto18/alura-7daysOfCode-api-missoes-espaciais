import mongoose from "mongoose";

mongoose.connect(process.env.DB_STRING);
const db = mongoose.connection;

export default db;