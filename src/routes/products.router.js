import { Router } from 'express';
import services from '../dao/index.js';

const router = Router();

router.get('/', async (req, res) => {
    let products = await services.productsService.getAll();
    console.log(products);
    res.send(products)
})

router.get('/:pid', async (req, res) => {
    let pid = req.params.pid;
    let product = await services.productsService.getById(pid);
    console.log(product);
    res.send(product);
})

router.post('/', async (req, res) => {
    let product = await req.body;
    let result = await services.productsService.save(product)
    console.log(result);
    res.send({ status: "success, new product added" })
})

router.put('/:pid/', async (req, res) => {
    let pid = req.params.pid;
    let productData = await req.body;
    let product = await services.productsService.editById(pid, productData);
    console.log(product);
    res.send({ status: "completed" })
})

router.delete('/:pid/', async (req, res) => {
    let pid = req.params.pid;
    await services.productsService.deleteById(pid);
    res.send({ status: "completed" })
})

export default router;