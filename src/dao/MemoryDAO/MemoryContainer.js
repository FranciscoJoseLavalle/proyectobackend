export default class MemoryContainer {
    constructor(type) {
        this.type = type;
        this.count = 0;
        this.data = [];
        
    }
    getAll = () => {
        return this.data;
    }
    getById = (id) => {
        let results = this.data.find(el => el.id == id);
        return results;
    }
    save = (element) => {
        this.count++;
        element.timestamp = Date.now();
        element.id = this.count;
        this.data.push(element);
        return element;
    }
    editById = (id, document) => {
        let results = this.data.find(el => el.id == id);
        results.name = document.name ? document.name : results.name;
        results.description = document.description ? document.description : results.description;
        results.code = document.code ? document.code : results.code;
        results.thumbnail = document.thumbnail ? document.thumbnail : results.thumbnail;
        results.price = document.price ? document.price : results.price;
        results.stock = document.stock ? document.stock : results.stock;

        return results;
    }
    deleteById = (id) => {
        this.data = this.data.filter(el => el.id != id);
    }
}