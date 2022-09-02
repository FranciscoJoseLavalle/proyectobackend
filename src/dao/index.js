const persistance = "FS";

let productsService;
let cartsService;
switch (persistance) {
    case "MEMORY":
        const { default: MemProd } = await import('./MemoryDAO/Products.js');
        const { default: MemCarts } = await import('./MemoryDAO/Carts.js');
        productsService = new MemProd();
        cartsService = new MemCarts();
        break;
    case "MONGO":
        const { default: MongoProd } = await import('./MongoDAO/Products.js');
        const { default: MongoCarts } = await import('./MongoDAO/Carts.js');
        productsService = new MongoProd();
        cartsService = new MongoCarts();
        break;
    case "FS":
        const { default: FsProd } = await import('./FileSystemDAO/Products.js');
        const { default: FsCarts } = await import('./FileSystemDAO/Carts.js');
        productsService = new FsProd();
        cartsService = new FsCarts();
        break;
}

const services = {
    productsService,
    cartsService
}

export default services;