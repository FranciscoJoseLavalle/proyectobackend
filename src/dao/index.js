const persistance = "MONGO";

let productsService;
switch (persistance) {
    case "MEMORY":
        const { default: MemProd } = await import('./MemoryDAO/Products.js');
        productsService = new MemProd();
        break;
    case "MONGO":
        const { default: MongoProd } = await import('./MongoDAO/Products.js');
        productsService = new MongoProd();
        break;
    case "FS":
        const { default: FsProd } = await import('./FileSystemDAO/Products.js');
        productsService = new FsProd();
        break;
}

const services = {
    productsService,
}

export default services;