import { Router } from 'express';
import File from '../classes/file.js';
let cartsFile = new File("carts");
let productsFile = new File("products");

const router = Router();

router.get('/', (req, res) => {
    res.send('Carts')
})

router.get('/:cid/products', async (req, res) => {
    let cid = req.params.cid;
    let cart = await cartsFile.getById(cid);

    let products = [];

    for (let i = 0; i < cart.products.length; i++) {
        products.push(await productsFile.getById(cart.products[i].pid))
    }

    if (products.length > 0) {
        console.log(products);
        res.send(products);
    } else {
        res.send({error: "there isn't products"})
    }

})

router.post('/', async (req, res) => {
    let cart = {
        products: []
    }
    let cartID = await cartsFile.addItem(cart);
    console.log(cartID);
    res.send(cartID);
})
router.post('/:cid/products', async (req, res) => {
    let cid = req.params.cid;
    let pid = req.body;
    await cartsFile.editById(cid, pid);
    let cart = await cartsFile.getById(cid, pid);
    console.log(cart);
    res.send(cart)
})

router.delete('/:cid', async (req, res) => {
    let cid = req.params.cid;
    await cartsFile.deleteById(cid)
    res.send({ message: "cart deleted succesfully" })
})
router.delete('/:cid/products/:pid', async (req, res) => {
    let cid = req.params.cid;
    let pid = req.params.pid;
    await cartsFile.editById(cid, pid, 'deleteProduct')
    let cart = await cartsFile.getById(cid);
    console.log(cart.products);
    res.send({ message: "product deleted succesfully" })
})

export default router;