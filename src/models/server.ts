import express from 'express';
import 'dotenv/config'
import colegioPaths from '../routes/colegio'
import cors from 'cors';
import db from '../db/connection';

class Server {
    private app = express();
    private port = process.env.PORT;
    private paths = {
        colegios: '/api/colegios'
    }
  

    constructor(){
        this.middlewares()
        this.routes()
        this.dbConnection()
    }

    routes () {
        this.app.use(this.paths.colegios, colegioPaths)
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        
    }
    async dbConnection(){
        try{
            await db.authenticate(); 
        }catch(error){
            throw error;
        }
    }

    listen(){
        this.app.listen(
            this.port, ()=>{
                console.log(`Server corriendo en ${this.port}`);
                
            }
        )
    }
}

export default Server;

