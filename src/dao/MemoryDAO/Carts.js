import MemoryContainer from "./MemoryContainer.js";

export default class Users extends MemoryContainer {
    constructor() {
        super("carts")
    }
    addProduct = async (object, pid) => {
        let cart = this.data.find(item => item.id == object.id);
        let product = cart.products.find(item => item.pid == pid.pid);
        let conditionalArray = []
        conditionalArray.push(product);

        if (conditionalArray[0] == null) {
            cart.products.push({pid: pid.pid, quantity: 1})
        } else {
            product.quantity++;
        }
        return cart
    }
    deleteProduct = async (object, pid) => {
        let cart = this.data.find(item => item.id == object.id);
        cart.products = cart.products.filter(item => item.pid != pid);

        return cart
    }
};