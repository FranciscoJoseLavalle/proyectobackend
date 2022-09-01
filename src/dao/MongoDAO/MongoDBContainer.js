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
    getById = async(id) => {
        try {
            let results = await this.model.find({_id: id});
            return results;
        } catch (error) {
            console.log(error);
            return error
        }
    }
    save = async(document) => {
        document.timestamp = Date.now();
        let results = await this.model.create(document);
        return results;
    }
    editById = async(id, document) => {
        let results = await this.model.findOneAndUpdate({_id: id}, document)
        
        return results;
    }
    deleteById = async(id) => {
        let results = await this.model.deleteOne({_id: id})
        return results;
    }
}