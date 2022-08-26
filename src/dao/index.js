const persistance = "MONGO";

let usersService;
switch (persistance) {
    case "MEMORY":
        const { default: MemUser } = await import('./MemoryDAO/Users.js');
        usersService = new MemUser();
        break;
    case "MONGO":
        const { default: MongoUser } = await import('./MongoDAO/Users.js');
        usersService = new MongoUser();
        break;
}

const services = {
    usersService,
}

export default services;