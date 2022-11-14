import mongoose from "mongoose";

mongoose.connect("mongodb+srv://sa:123@cluster0.dysekir.mongodb.net/bdLivros");

let db = mongoose.connection;
export default db;