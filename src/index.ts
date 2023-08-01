import express from 'express';

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res)=>{
    res.send('<h1>Respuesta</h1>')
    
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en ${PORT}`);    
})
