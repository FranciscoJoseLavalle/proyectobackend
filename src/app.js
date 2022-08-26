import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

const app = express();
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Escuchando en puerto ${PORT}`));

app.use(express.json());

app.get('/',(req,res) => {
    res.send("Visita /api/products o /api/carts")
})

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.get('/*', (req,res) => {
    res.send({error: 'pagina no encontrada'})
})