import express from 'express';
import { router } from './routes/colegio';

const app = express()
app.use(express.json())
app.use(router)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en ${PORT}`);    
})
