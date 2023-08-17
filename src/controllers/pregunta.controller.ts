import { Pregunta, PreguntasTest } from "../models/pregunta.model";
import connection from '../db/connection';

export const getPreguntas = async (req, res) => {
    connection.query('SELECT * FROM `Pregunta`',
    (error, results: Array<Pregunta>, fields) => {
        res.json(results);

    })
}

export const getPreguntasTest = async (req, res) => {
    connection.query('SELECT * FROM `PreguntasTest`',
    (error, result: Array<PreguntasTest>, fields)=>{
        res.json(result)
    })
}
