import connection from '../db/connection';
import { TipoEstructura, TipoEdad, TipoPregunta } from '../models/tipos.model';

//  TipoEstructuras
export const getAllTipoEstructuras = async (req, res) => {
    connection.query('SELECT * FROM `TipoEstructura`',
    (error, results: Array<TipoEstructura>, fields) => {
        res.json(results);
    })
}


//  TipoEstructuras
export const getAllTipoEdades = async (req, res) => {
    connection.query('SELECT * FROM `TipoEdad`',
    (error, results: Array<TipoEdad>, fields) => {
        res.json(results);
    })
}


//  TipoEstructuras
export const getAllTipoPreguntas = async (req, res) => {
    connection.query('SELECT * FROM `TipoPregunta`',
    (error, results: Array<TipoPregunta>, fields) => {
        res.json(results);
    })
}