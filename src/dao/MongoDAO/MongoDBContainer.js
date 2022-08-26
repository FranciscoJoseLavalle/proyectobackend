import mongoose from 'mongoose';

export default class MongoDBContainer {
    constructor(collection, schema) {
        mongoose.connect('mongodb+srv://coder:123@cluster0.pe1in5a.mongodb.net/?retryWrites=true&w=majority')
        this.model = mongoose.model(collection, schema);
    }

    getAll = async() => {
        let results = await this.model.find();
        return results;
    }
    Save = async(document) => {
        let results = await this.model.create(document);
        return results;
    }
}