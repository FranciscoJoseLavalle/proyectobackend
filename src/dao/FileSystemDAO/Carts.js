import FileSystemContainer from "./FileSystemContainer.js";
import fs from 'fs';

export default class Users extends FileSystemContainer {
    constructor() {
        super("carts")
    }
    addProduct = async (object, pid) => {
        const results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'))
        let result = results.find(item => item.id == object.id);
        let product = result.products.find(item => item.pid == pid.pid);
        let conditionalArray = []
        conditionalArray.push(product);

        if (conditionalArray[0] == null) {
            result.products.push({pid: pid.pid, quantity: 1})
        } else {
            product.quantity++;
        }
        await fs.promises.writeFile(`src/database/${this.file}.json`,JSON.stringify(results),'utf-8')
        return result
    }
    deleteProduct = async (object, pid) => {
        const results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'))
        let result = results.find(item => item.id == object.id);
        result.products = result.products.filter(item => item.pid != pid);
        await fs.promises.writeFile(`src/database/${this.file}.json`,JSON.stringify(results),'utf-8')

        return result
    }
};