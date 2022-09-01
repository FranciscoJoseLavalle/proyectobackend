import mongoose from "mongoose";
import MongoDBContainer from "./MongoDBContainer.js";

const collection = 'products';
const userSchema = mongoose.Schema({
        name: String,
        description: String,
        code: String,
        thumbnail: String,
        price: Number,
        stock: Number,
        timestamp: Number
})

export default class Users extends MongoDBContainer{
    constructor() {
        super(collection,userSchema)
    }
};