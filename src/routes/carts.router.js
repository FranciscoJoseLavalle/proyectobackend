import { Router } from 'express';
// import File from '../classes/file.js';
// let cartsFile = new File("carts");
// let productsFile = new File("products");
import services from '../dao/index.js';

const router = Router();

router.get('/', async (req, res) => {
    let cart = await services.cartsService.getAll();
    res.send(cart)
})

router.get('/:cid/products', async (req, res) => {
    let cid = req.params.cid;
    let cart = await services.cartsService.getById(cid);

    let products = [];

    if (cart.products !== undefined) {
        for (let i = 0; i < cart.products.length; i++) {
            products.push(await services.productsService.getById(cart.products[i].pid))
        }
    }
    if (cart.products == undefined) {
        for (let i = 0; i < cart[0].products.length; i++) {
            products.push(await services.productsService.getById(cart[0].products[i].pid))
        }
    }

    if (products.length > 0) {
        console.log(products);
        res.send(products);
    } else {
        res.send({ error: "there isn't products" })
    }

})

router.post('/', async (req, res) => {
    let cart = {
        products: []
    }
    let cartID = await services.cartsService.save(cart);
    console.log(cartID);
    res.send({ message: "Added succesfully" });
})


router.post('/:cid/products', async (req, res) => {
    let cid = req.params.cid;
    let pid = req.body;
    // await services.cartsService.editById(cid, pid);
    let cart = await services.cartsService.getById(cid);
    await services.cartsService.addProduct(cart, pid)
    // console.log(cart);
    res.send(cart)
})

router.delete('/:cid', async (req, res) => {
    let cid = req.params.cid;
    await services.cartsService.deleteById(cid)
    res.send({ message: "cart deleted succesfully" })
})
router.delete('/:cid/products/:pid', async (req, res) => {
    let cid = req.params.cid;
    let pid = req.params.pid;
    // await services.cartsService.editById(cid, pid, 'deleteProduct')
    let cart = await services.cartsService.getById(cid);
    await services.cartsService.deleteProduct(cart, pid)
    console.log(cart.products);
    res.send({ message: "product deleted succesfully" })
})

export default router;