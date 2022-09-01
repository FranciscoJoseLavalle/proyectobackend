import fs from 'fs';

export default class FileSystemContainer {
    constructor(file) {
        this.file  = file;
        this.count = 0;
    }
    getAll = async() => {
        let results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'))
        return results;
    }
    getById = async(id) => {
        let results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'))
        return results.find(element => element.id == id);
    }
    save = async(element) => {
        // this.count++;
        // element.id = this.count;
        // NO ME FUNCIONÓ CON FILESYSTEM

        const results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'))

        element.timestamp = Date.now();
        element.id = results.length + 1;

        results.push(element)

        await fs.promises.writeFile(`src/database/${this.file}.json`,JSON.stringify(results),'utf-8')
        return element.id;
    }
    editById = async(id, document) => {
        let results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'));
        
        let result = results.find(el => el.id == id);
        result.name = document.name ? document.name : result.name;
        result.description = document.description ? document.description : result.description;
        result.code = document.code ? document.code : result.code;
        result.thumbnail = document.thumbnail ? document.thumbnail : result.thumbnail;
        result.price = document.price ? document.price : result.price;
        result.stock = document.stock ? document.stock : result.stock;

        await fs.promises.writeFile(`src/database/${this.file}.json`,JSON.stringify(results),'utf-8')

        return results;
    }
    deleteById = async(id) => {
        let results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'))

        results = results.filter(element => element.id != id);

        await fs.promises.writeFile(`src/database/${this.file}.json`,JSON.stringify(results),'utf-8')

        return results;
    }
}