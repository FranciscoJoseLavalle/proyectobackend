export default class MemoryContainer {
    constructor(type) {
        this.type = type;
        this.dataProducts = [];
        this.dataMessages = [];
    }
    getAll = () => {
        return this.dataProducts;
    }
    save = (element) => {
        this.dataProducts.push(element);
        return element;
    }
}