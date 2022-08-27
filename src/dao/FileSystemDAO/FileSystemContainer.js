import fs from 'fs';

export default class FileSystemContainer {
    constructor(file) {
        this.file  = file;
    }
    getAll = async() => {
        let results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'))
        return results;
    }
    save = async(element) => {
        const results = JSON.parse(await fs.promises.readFile(`src/database/${this.file}.json`, 'utf-8'))
        element.id = results.length + 1;
        element.timestamp = Date.now();

        results.push(element)

        await fs.promises.writeFile(`src/database/${this.file}.json`,JSON.stringify(results),'utf-8')
        return element.id
    }
}