// import fs from 'fs';

// class File {
//     constructor(fileName) {
//         this.fileName = fileName
//     }

//     async getAll() {
//         try {
//             const allItems = JSON.parse(
//                 await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
//             )

//             return allItems
//         } catch (error) {
//             await fs.promises.writeFile(`src/database/${this.fileName}.json`, JSON.stringify([]), 'utf-8')

//             const allItems = JSON.parse(
//                 await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
//             )

//             return allItems
//         }
//     }

//     async getById(id) {
//         try {
//             const allItems = JSON.parse(
//                 await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
//             )

//             const itemFound = allItems.find((item) => item.id === Number(id))

//             if (itemFound) {
//                 return itemFound
//             } else {
//                 return { error: "Item doesn't exist" }
//             }

//         } catch (error) {
//             console.log(`ERROR: ${error}`)
//         }
//     }

//     async addItem(object) {
//         try {
//             const allItems = JSON.parse(
//                 await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
//             )

//             object.id = allItems.length + 1;
//             object.timestamp = Date.now();

//             allItems.push(object)

//             await fs.promises.writeFile(
//                 `src/database/${this.fileName}.json`,
//                 JSON.stringify(allItems),
//                 'utf-8'
//             )
//             return object.id
//         } catch (error) {
//             console.log(`ERROR: ${error}`)
//         }
//     }

//     async editById(id, object, type) {
//         try {
//             let allItems = JSON.parse(
//                 await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
//             )


//             if (this.fileName == 'products') {
//                 let product = allItems.find(item => item.id == id)
//                 product.nombre = object.nombre;
//                 product.precio = object.precio;
//             } else if (type == 'deleteProduct') {
//                 let cart = allItems.find(item => item.id == id)
//                 let products = cart.products.filter(item => item.pid != object)
//                 cart.products = [];
//                 cart.products = products;
//             } else {
//                 let cart = allItems.find(item => item.id == id);
//                 let product = cart.products.find(item => item.pid == object.pid);
//                 let conditionalArray = []
//                 conditionalArray.push(product);
                
//                 if (conditionalArray[0] == null) {
//                     cart.products.push({ pid: object.pid, quantity: 1 })
//                 } else {
//                     product.quantity++;
//                 }
//             }

//             await fs.promises.writeFile(
//                 `src/database/${this.fileName}.json`,
//                 JSON.stringify(allItems),
//                 'utf-8'
//             )

//             return allItems;
//         } catch (error) {
//             console.log(`ERROR: ${error}`)
//         }
//     }

//     async deleteById(id) {
//         try {
//             const allItems = JSON.parse(
//                 await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
//             )

//             const filteredItemList = allItems.filter((item) => item.id !== Number(id))

//             if (JSON.stringify(allItems) === JSON.stringify(filteredItemList)) {
//                 return false
//             } else {
//                 await fs.promises.writeFile(
//                     `src/database/${this.fileName}.json`,
//                     JSON.stringify(filteredItemList),
//                     'utf-8'
//                 )
//                 return true
//             }
//         } catch (error) {
//             console.log(`ERROR: ${error}`)
//         }
//     }

//     async deleteAll() {
//         try {
//             await fs.promises.writeFile(`src/database/${this.fileName}.json`, JSON.stringify([]), 'utf-8')
//         } catch (error) {
//             console.log(`ERROR: ${error}`)
//         }
//     }
// }

// export default File;