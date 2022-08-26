export default class MemoryContainer {
    constructor() {
        this.data = [];
    }
    getAll = () => {
        return this.data;
    }
    Save = (element) => {
        this.data.push(element);
        return element;
    }
}