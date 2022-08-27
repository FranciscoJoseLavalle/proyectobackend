import { Router } from 'express';
import File from '../classes/file.js';
let productsFile = new File("products");
import services from '../dao/index.js';

const router = Router();

router.get('/', async (req, res) => {
    let products = await services.productsService.getAll();
    console.log(products);
    res.send(products)
})

router.post('/', async (req, res) => {
    let product = await req.body;
    console.log(product);
    await services.productsService.save(product)
    res.send({ status: "success, new product added" })
})

// router.get('/:pid', async (req, res) => {
//     let pid = req.params.pid;
//     let product = await productsFile.getById(pid);
//     console.log(product);
//     res.send(product);
// })



// router.put('/:pid/', async (req, res) => {
//     let pid = req.params.pid;
//     let productData = await req.body;
//     let product = await productsFile.editById(pid, productData);
//     console.log(product);
//     res.send({ status: "completed" })
// })

// router.delete('/:pid/', async (req, res) => {
//     let pid = req.params.pid;
//     await productsFile.deleteById(pid);
//     res.send({ status: "completed" })
// })

export default router;